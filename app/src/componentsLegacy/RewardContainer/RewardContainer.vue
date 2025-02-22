<script>
import Box from "@/componentsLegacy/Box/Box.vue";
import { Copy, SubHeading } from "@/componentsLegacy/Text";
import Loader from "@/componentsLegacy/Loader/Loader.vue";
import Tooltip from "@/componentsLegacy/Tooltip/Tooltip.vue";
import Icon from "@/componentsLegacy/Icon/Icon.vue";
import AssetItem from "@/componentsLegacy/AssetItem/AssetItem.vue";
import SifButton from "@/componentsLegacy/SifButton/SifButton.vue";
import { format } from "@sifchain/sdk/src/utils/format";

const REWARD_INFO = {
  lm: {
    label: "Liquidity Mining",
    description:
      "Earn additional rewards by providing liquidity to any of Sifchain's pools.",
  },
  vs: {
    label: "Validator Subsidy",
    description:
      "Earn additional rewards by staking a node or delegating to a staked node.",
  },
};

export default {
  props: {
    alreadyClaimed: {
      type: Boolean || Object,
      default: false,
    },
    claimDisabled: {
      type: Boolean,
      default: true,
    },
    claimType: {
      type: String,
    },
    data: {
      type: Object,
    },
    address: {
      type: String,
    },
  },
  components: {
    SifButton,
    AssetItem,
    Copy,
    SubHeading,
    Box,
    Tooltip,
    Icon,
    Loader,
  },
  emits: ["openModal"],
  methods: {
    format,
    openClaimModal() {
      this.modalOpen = true;
    },
    requestClose() {
      this.modalOpen = false;
    },
    claimRewards() {
      alert("claim logic/keplr goes here");
    },
    getClaimButtonText() {
      if (this.alreadyClaimed) {
        return "Pending Claim";
      } else {
        return "Claim";
      }
    },
  },
  data() {
    return {
      modalOpen: false,
      loadingLm: true,
      loadingVs: true,
      REWARD_INFO,
    };
  },
};
</script>

<template>
  <Box>
    <div class="reward-container">
      <SubHeading>{{ REWARD_INFO[claimType].label }}</SubHeading>
      <Copy>
        {{ REWARD_INFO[claimType].description }}
      </Copy>
      <div class="details-container">
        <Loader v-if="!data" black />

        <div v-else class="amount-container">
          <div class="reward-rows">
            <div class="reward-row">
              <div class="row-label">Claimable Amount</div>
              <div
                class="row-amount"
                :data-handle="claimType + '-claimable-amount'"
              >
                {{
                  format(data.totalClaimableCommissionsAndClaimableRewards, {
                    mantissa: 4,
                    zeroFormat: "0",
                  }) || "0"
                }}
              </div>
              <AssetItem symbol="Rowan" :label="false" />
            </div>
            <div v-if="claimType === 'vs'" class="reward-row">
              <div class="row-label">
                Reserved Commission Rewards
                <Tooltip>
                  <template #message>
                    <div class="tooltip">
                      These are rewards you have earned from your delegators,
                      but are not yet claimable due to either: a) your
                      delegators not claiming their portion of these rewards yet
                      or b) those rewards for your delegators not reaching full
                      maturity yet. Once one of these actions happen, these
                      rewards will be considered claimable for you.
                    </div>
                  </template>
                  <Icon icon="info-box-black" />
                </Tooltip>
              </div>
              <div
                class="row-amount"
                :data-handle="claimType + '-reserved-commission-rewards'"
              >
                {{
                  format(
                    data.currentTotalCommissionsOnClaimableDelegatorRewards,
                    {
                      mantissa: 4,
                      zeroFormat: "0",
                    },
                  ) || "0"
                }}
              </div>
              <AssetItem symbol="Rowan" :label="false" />
            </div>

            <div class="reward-row">
              <div class="row-label">
                Pending Dispensation
                <Tooltip>
                  <template #message>
                    <div class="tooltip">
                      This is the amount that will be dispensed on Tuesday. Any
                      new claimable amounts will need to be claimed after the
                      next dispensation.
                    </div>
                  </template>
                  <Icon icon="info-box-black" />
                </Tooltip>
              </div>
              <div
                class="row-amount"
                :data-handle="claimType + '-pending-rewards'"
              >
                {{
                  format(
                    data.claimedCommissionsAndRewardsAwaitingDispensation,
                    { mantissa: 4, zeroFormat: "0" },
                  ) || "0"
                }}
              </div>
              <AssetItem symbol="Rowan" :label="false" />
            </div>

            <div class="reward-row">
              <div class="row-label">
                Dispensed Rewards
                <Tooltip>
                  <template #message>
                    <div class="tooltip">
                      Rewards that have already been dispensed.
                    </div>
                  </template>
                  <Icon icon="info-box-black" />
                </Tooltip>
              </div>
              <div
                class="row-amount"
                :data-handle="claimType + '-dispensed-rewards'"
              >
                {{
                  format(data.dispensed, { mantissa: 4, zeroFormat: "0" }) ||
                  "0"
                }}
              </div>
              <AssetItem symbol="Rowan" :label="false" />
            </div>

            <div class="reward-row secondary">
              <div class="row-label">
                Projected Full Amount
                <Tooltip>
                  <template #message>
                    <div class="tooltip">
                      <div v-if="data.maturityDate">
                        Projected Full Maturity Date: <br />
                        <span class="tooltip-date">{{
                          data.maturityDate
                        }}</span>
                        <span v-if="data.nextRewardProjectedAPYOnTickets">
                          Projected Fully Maturated APY: <br />
                          <span class="tooltip-date">
                            {{
                              format(
                                data.nextRewardProjectedAPYOnTickets * 100,
                                {
                                  mantissa: 2,
                                  zeroFormat: "0",
                                },
                              )
                            }}%</span
                          >
                        </span>
                        <br /><br />
                      </div>
                      This is your estimated projected full reward amount that
                      you can earn if you were to leave your current
                      {{ claimType === "lm" ? "liquidity" : "stake" }}
                      positions in place to the above mentioned date. This
                      includes your projected future rewards, and excludes your
                      already disbursed amounts. This number can fluctuate due
                      to other market conditions and this number is a
                      representation of the current market as it is in this very
                      moment.
                    </div>
                  </template>
                  <Icon icon="info-box-black" />
                </Tooltip>
              </div>
              <div
                class="row-amount"
                :data-handle="claimType + '-projected-full-amount'"
              >
                {{
                  format(data.totalCommissionsAndRewardsAtMaturity, {
                    mantissa: 4,
                    zeroFormat: "0",
                  }) || "0"
                }}
              </div>
              <AssetItem symbol="Rowan" :label="false" />
            </div>
          </div>

          <div class="reward-buttons">
            <a
              class="more-info-button mr-8"
              target="_blank"
              :href="`https://cryptoeconomics.sifchain.finance/#${address}&type=${claimType}`"
              >More Info</a
            >

            <SifButton
              @click="$emit('openModal', claimType)"
              :primary="true"
              :disabled="
                alreadyClaimed ||
                !data.totalClaimableCommissionsAndClaimableRewards
              "
              :data-handle="claimType + '-claim-button'"
              >{{ getClaimButtonText() }}</SifButton
            >
          </div>
        </div>
      </div>
    </div>
  </Box>
</template>

<style lang="scss" scoped>
.rewards-container {
  display: flex;
  flex-direction: column;
  > :first-child {
    margin-top: $margin_medium;
  }
  width: 100%;
  > :nth-child(1) {
    margin-bottom: $margin_medium;
  }
  .reward-container {
    flex-direction: column;
    > :nth-child(1),
    > :nth-child(2) {
      margin-bottom: $margin_small;
    }
  }
  .reward-rows {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    color: #343434;
  }
  .reward-row {
    display: flex;
    width: 100%;
    justify-content: space-between;
    font-size: $fs;
    font-weight: 400;
    &.secondary {
      color: #818181;
    }
    .row-label {
      flex: 1 1 auto;
      text-align: left;
    }
    .row-amount {
      width: 100px;
      text-align: right;
    }
    .row {
      width: 15px;
      margin-left: 2px;
    }
  }
}

.reward-buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .more-info-button {
    background: #f3f3f3;
    color: #343434;
    font-weight: 100;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .more-info-button,
  .btn {
    width: 300px;
    border-radius: 6px;
    display: flex;
    font-size: $fs;
    height: 30px;
  }
  .reward-button {
    text-align: center;
  }
}

.tooltip-date {
  font-weight: 600;
}
</style>
