import groupBy from "lodash/groupBy";
import uniq from "lodash/fp/uniq";

import { PoolStatsResponseData } from "@/hooks/usePoolStats";

export const BASE_URL = "https://data.sifchain.finance";

export type RewardsProgramConfig = {
  start_height: number;
  end_height: number | null;
  start_date_utc: string;
  end_date_utc: string | null;
  /**
   * comma separated list of token denoms
   */
  tokens: string[];
  symbol: string[];
};

export type RewardsProgram = {
  reward_program: string;
  last_updated: string;
  comment: string;
  preflight_on: boolean;
  config: RewardsProgramConfig;
};

export type UserRewardsSummaryResponse = {
  reward_program: string;
  pool: string;
  net_liquidity_bal: number;
  total_liquidity_bal: number;
  net_percentage: number;
  reward_allocation: number;
  pool_unit: string;
  total_pool: string;
  perc_pool: number;
  pool_balance: string;
  pool_balance_native: string;
  pool_balance_external: string;
  network_pool_native: string;
  network_pool_external: string;
  reward_dispensed_total: string;
  pending_rewards: string;
  next_remaining_time_to_dispense: string;
  dispensed_rewards: string;
};

type ProgramConfigMap = Record<
  string,
  {
    displayName: string;
    description: string;
    documentationURL: string;
    summaryAPY: number;
  }
>;

export const REWARDS_PROGRAMS_CONFIG: ProgramConfigMap = {
  harvest_expansion: {
    displayName: "Sif's Expansion",
    description: "100% APR. All pools.",
    documentationURL:
      "https://docs.sifchain.finance/using-the-website/web-ui-step-by-step/rewards/liquidity-mining-rewards-programs",
    summaryAPY: 100,
  },
  expansion_v4_bonus: {
    displayName: "Pools of the People (v4)",
    description:
      "300% total APR (Expansion included). 5 pools. Selected by the community.",
    documentationURL:
      "https://docs.sifchain.finance/using-the-website/web-ui-step-by-step/rewards/liquidity-mining-rewards-programs",
    summaryAPY: 200,
  },
};

const MINUTE = 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

/**
 * formats time in seconds to DDd HHh MMm
 * @param seconds time in seconds
 * @returns
 */
function formatTimeInSeconds(seconds = 0) {
  const days = Math.floor(seconds / DAY);
  const remainderFromDays = seconds % DAY;
  const hours = Math.floor(remainderFromDays / HOUR);
  // const minutes = Math.floor((seconds % HOUR) / MINUTE);

  const qualifiers = ["d", "h"];

  return [days, hours]
    .map((value, index) => `${value}${qualifiers[index]}`)
    .join(" ");
}

const fetchJSON = <T>(endpoint: string, options: RequestInit = {}) =>
  fetch(endpoint, options).then((x) => x.json() as Promise<T>);

type CacheEntry<T> = {
  value: T;
  expires: number;
};

const CACHE = new Map<string, CacheEntry<any>>();

async function cached<T>(
  key: string | string[],
  fn: () => Promise<T>,
  ttl = 1000,
) {
  const flatKey = Array.isArray(key) ? key.join("-") : key;
  const cached = CACHE.get(flatKey);

  if (cached && cached.expires > Date.now()) {
    return Promise.resolve(cached.value as T);
  }

  const value = await fn();
  CACHE.set(flatKey, { value, expires: Date.now() + ttl });
  return value;
}

export default class DataService {
  constructor(private baseUrl: string = BASE_URL) {
    this.baseUrl = baseUrl;
  }

  async getTokenStats() {
    try {
      const res = await cached(
        "tokenStats",
        () =>
          fetchJSON<PoolStatsResponseData>(
            `${this.baseUrl}/beta/asset/tokenStats`,
          ),
        60000 * 5, // cache for 5 minutes
      );
      return res;
    } catch (error) {
      return {} as PoolStatsResponseData;
    }
  }

  async getRewardsPrograms() {
    try {
      const { Rewards } = await cached(
        "rewardsPrograms",
        () =>
          fetchJSON<{ Rewards: RewardsProgram[] }>(
            `${this.baseUrl}/beta/network/rewardconfig/all`,
          ),
        60000 * 60, // cache for 1 hour
      );

      const raw = Rewards;

      const sorted = raw
        .filter((x) => !x.config.end_height)
        .sort(
          (a, b) => (a.config.end_height || 0) - (b.config.end_height || 0),
        );

      return sorted.map((program) => {
        const isUniversal = program.config.tokens[0] === "ALL";

        const config = REWARDS_PROGRAMS_CONFIG[program.reward_program];

        return {
          isUniversal,
          rewardProgramName: program.reward_program,
          startDateTimeISO: program.config.start_date_utc,
          endDateTimeISO: program.config.end_date_utc,
          incentivizedPoolSymbols: isUniversal ? ["*"] : program.config.symbol,
          ...(config || {}),
        };
      });
    } catch (error) {
      return [];
    }
  }

  async getUserRewards(address: string) {
    try {
      const { Rewards } = await cached(
        ["userRewards", address],
        () =>
          fetchJSON<{
            Rewards: UserRewardsSummaryResponse[];
          }>(`${this.baseUrl}/beta/network/rewardPay/${address}`),
        60000 * 5, // cache for 5 minute
      );

      const groups = groupBy(Rewards, (x) => x.reward_program);

      let timeToNextDispensation = "";

      const programs = Object.keys(groups).reduce(
        (acc, groupName) => {
          const group: UserRewardsSummaryResponse[] = groups[groupName];

          if (!timeToNextDispensation) {
            timeToNextDispensation = formatTimeInSeconds(
              Math.floor(Number(group[0].next_remaining_time_to_dispense)),
            );
          }

          const pendingRewards = uniq(
            group.map((x) => Number(x.pending_rewards)),
          );

          const totalDispensedRewards = uniq(
            group.map((x) => Number(x.reward_dispensed_total)),
          );

          const totalPendingRewards = pendingRewards.reduce(
            (acc, x) => acc + x,
            0,
          );

          return {
            ...acc,
            [groupName]: {
              totalClaimableCommissionsAndClaimableRewards: totalPendingRewards,
              claimedCommissionsAndRewardsAwaitingDispensation:
                totalPendingRewards,
              dispensed: totalDispensedRewards[0],
              pools: group,
            },
          };
        },
        {} as Record<
          string,
          {
            totalClaimableCommissionsAndClaimableRewards: number;
            claimedCommissionsAndRewardsAwaitingDispensation: number;
            dispensed: number;
          }
        >,
      );

      return {
        programs,
        timeRemaining: timeToNextDispensation,
      };
    } catch (error) {
      return {
        programs: {} as Record<
          string,
          {
            totalClaimableCommissionsAndClaimableRewards: number;
            claimedCommissionsAndRewardsAwaitingDispensation: number;
            dispensed: number;
          }
        >,
      };
    }
  }
}
