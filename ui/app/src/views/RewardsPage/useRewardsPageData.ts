import { computed, ComputedRef, onMounted, onUnmounted, ref, watch } from "vue";
import { useAsyncData } from "@/hooks/useAsyncData";
import { useCore } from "@/hooks/useCore";
import { getExistingClaimsData } from "@/componentsLegacy/shared/utils";
import { accountStore } from "@/store/modules/accounts";
import { QueryClaimsByTypeRequest } from "../../../../core/src/generated/proto/sifnode/dispensation/v1/query";
import { NativeDexClient } from "../../../../core/src/services/utils/SifClient/NativeDexClient";
import { DistributionType } from "../../../../core/src/generated/proto/sifnode/dispensation/v1/types";
import { flagsStore } from "@/store/modules/flags";
import { createCryptoeconGqlClient } from "@/utils/createCryptoeconGqlClient";

// TODO REACTIVE

export const rewardColumnsLookup = {
  rewardProgram: {
    class: "w-[195px] text-left flex-shrink-0",
  },
  apy: {
    class: "w-[175px] text-right",
  },
  claimableAmount: {
    class: "w-[200px] text-right flex-shrink-0",
  },
  duration: {
    class: "w-[150px] text-right flex-shrink-0",
  },
  expand: {
    class: "flex-1 flex items-center justify-end flex-shrink-0",
  },
};

const useLiquidityMiningData = (
  address: ComputedRef<string>,
  rewardProgram?: "harvest",
) => {
  const { services } = useCore();
  return useAsyncData(async () => {
    // return null;
    if (!address.value) return null;
    return services.cryptoeconomics.fetchLmData({
      address: address.value,
      rewardProgram,
      devnet: flagsStore.state.devnetCryptoecon,
    });
  }, [address]);
};

const useValidatorSubsidyData = (address: ComputedRef<string>) => {
  const { services } = useCore();
  return useAsyncData(async () => {
    return null;
    if (!address.value) return null;
    return services.cryptoeconomics.fetchVsData({
      address: address.value,
      devnet: flagsStore.state.devnetCryptoecon,
    });
  }, [address]);
};

const useExistingClaimsData = (
  address: ComputedRef<string>,
  sifRpcUrl: string,
) => {
  const res = useAsyncData(async () => {
    if (!address.value) return null;
    const config = useCore().config;
    const nativeDexClient = await NativeDexClient.connect(
      config.sifRpcUrl,
      config.sifApiUrl,
      config.sifChainId,
    );
    const claims = await nativeDexClient.query.dispensation.ClaimsByType({
      userClaimType: DistributionType.DISTRIBUTION_TYPE_LIQUIDITY_MINING,
    });
    const userClaims = claims.claims.filter(
      (c) => c.userAddress === address.value,
    );
    const lm = userClaims.some(
      (c) =>
        c.userClaimType === DistributionType.DISTRIBUTION_TYPE_LIQUIDITY_MINING,
    );
    const vs = userClaims.some(
      (c) =>
        c.userClaimType ===
        DistributionType.DISTRIBUTION_TYPE_VALIDATOR_SUBSIDY,
    );
    return {
      lm: lm,
      vs: vs,
    };
  }, [address]);
  return res;
};

export type RewardProgramParticipant = {
  currentAPYOnTickets: number;
  totalClaimableCommissionsAndClaimableRewards: number;
  maturityDateMs: string;
  yearsToMaturity: number;
  totalDepositedAmount: number;
  currentTotalCommissionsOnClaimableDelegatorRewards: number;
  claimedCommissionsAndRewardsAwaitingDispensation: number;
  dispensed: number;
  totalCommissionsAndRewardsAtMaturity: number;
};
export type RewardProgram = {
  participant?: RewardProgramParticipant;
  incentivizedPoolSymbols: string[];
  isUniversal: boolean;
  summaryAPY: number;
  rewardProgramName: string;
  rewardProgramType: string;
  startDateTimeISO: string;
  endDateTimeISO: string;
  distributionPattern: string;
  documentationURL: string;
  displayName: string;
  description: string;
};
export const useRewardsPageData = () => {
  const { config, services } = useCore();
  const address = accountStore.refs.sifchain.address.computed();

  const gql = createCryptoeconGqlClient();

  const rewardProgramResponse = useAsyncData(
    (): Promise<{
      rewardPrograms: RewardProgram[];
    }> =>
      gql`
        query ${address.value ? `($participantAddress: String!)` : ``} {
          rewardPrograms {
            ${
              address.value
                ? `
            participant(address: $participantAddress) {
              totalCommissionsAndRewardsAtMaturity
              currentAPYOnTickets
              totalClaimableCommissionsAndClaimableRewards
              currentTotalCommissionsOnClaimableDelegatorRewards
              maturityDateMs
              yearsToMaturity
              totalDepositedAmount
              claimedCommissionsAndRewardsAwaitingDispensation
              dispensed
            }`
                : ``
            }
            displayName
            description
            documentationURL
            incentivizedPoolSymbols
            isUniversal
            summaryAPY
            rewardProgramName
            rewardProgramType
            startDateTimeISO
            endDateTimeISO
            distributionPattern
          }
        }
      `({ participantAddress: address.value }),
    [address],
  );

  const claimsRes = useExistingClaimsData(address, config.sifRpcUrl);

  const isLoading = computed(() => {
    return !accountStore.state.sifchain.address || claimsRes.isLoading.value;
  });
  const error = computed(() => {
    return rewardProgramResponse.error.value || claimsRes.error.value;
  });

  return {
    address,
    isLoading,
    rewardProgramResponse,
    error,
    lmClaim: computed(() => claimsRes.data.value?.lm),
    reloadClaims: () => claimsRes.reload.value(),
  };
};

function calculateDateOfNextDispensation(currentDate: Date) {
  const date = currentDate;
  date.setMinutes(0, 0, 0);
  while (true) {
    date.setHours(date.getHours() + 1);
    // output format: Friday, December 31, 2021 at 4:17:29 PM PST
    const formattedDate = new Intl.DateTimeFormat([], {
      timeZone: "PST",
      dateStyle: "full",
      timeStyle: "long",
    }).format(date);
    // dispensations are on Mondays at 8:00 AM PST
    if (
      formattedDate.includes("Monday") &&
      formattedDate.includes("8:00:00 AM PST")
    )
      break;
  }
  return date;
}

function getHumanReadableTimeUntil(date: Date) {
  const diff = date.getTime() - new Date().getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / 1000 / 60) % 60);
  return `${days}d ${hours}h ${mins}m`;
}

export const useTimeUntilNextDispensation = () => {
  const isMounted = ref(false);
  const currentDate = ref(new Date());
  onMounted(() => {
    isMounted.value = true;
    const interval = setInterval(() => {
      currentDate.value = new Date();
      if (!isMounted.value) clearInterval(interval);
    }, 1000);
  });
  onUnmounted(() => {
    isMounted.value = false;
  });
  return computed(() => {
    const dateOfNextDispensation = calculateDateOfNextDispensation(
      currentDate.value,
    );
    return {
      timeUntilNextDispensation: getHumanReadableTimeUntil(
        dateOfNextDispensation,
      ),
      dateOfNextDispensation,
    };
  });
};
