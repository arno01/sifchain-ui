<template>
  <div class="field-wrappers">
    <CurrencyField
      slug="token-a"
      :label="tokenALabel"
      tabindex="1"
      :max="fromMax && !isFromMaxActive"
      :isMaxActive="isFromMaxActive"
      @focus="handleFromFocused"
      @blur="handleFromBlur"
      :amount="fromAmount"
      :inputDisabled="fromDisabled"
      @selectsymbol="$emit('fromsymbolclicked')"
      @maxclicked="handleFromMaxClicked"
      @update:amount="handleFromUpdateAmount"
      :symbol="fromSymbol"
      :symbolFixed="fromSymbolFixed"
      :selectable="fromSymbolSelectable"
      @update:symbol="handleFromUpdateSymbol"
      :handleToggle="toggleAsyncPooling"
      :asyncPooling="asyncPooling"
      :toggleLabel="toggleLabel"
    />
    <ArrowIconButton
      data-handle="switch-currencies-button"
      @click="$emit('arrowclicked')"
      :enabled="canSwap"
      v-if="canSwapIcon === 'arrow'"
    />
    <Icon icon="plus" v-if="canSwapIcon === 'plus'" />
    <CurrencyField
      slug="token-b"
      :label="tokenBLabel"
      tabindex="2"
      :max="toMax && !isToMaxActive"
      :isMaxActive="isToMaxActive"
      @focus="handleToFocused"
      @blur="handleToBlur"
      :amount="toAmount"
      :inputDisabled="toDisabled"
      @selectsymbol="$emit('tosymbolclicked')"
      @update:amount="handleToUpdateAmount"
      @maxclicked="handleToMaxClicked"
      :symbol="toSymbol"
      :symbolFixed="toSymbolFixed"
      :selectable="toSymbolSelectable"
      @update:symbol="handleToUpdateSymbol"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CurrencyField from "@/componentsLegacy/CurrencyField/CurrencyField.vue";
import ArrowIconButton from "@/componentsLegacy/ArrowIconButton/ArrowIconButton.vue";
import Icon from "@/componentsLegacy/Icon/Icon.vue";
import Checkbox from "@/componentsLegacy/Checkbox/Checkbox.vue";
export default defineComponent({
  components: { CurrencyField, ArrowIconButton, Icon, Checkbox },
  props: {
    priceMessage: String,
    fromAmount: String,
    fromSymbol: String,
    fromMax: { type: Boolean, default: false },
    toMax: { type: Boolean, default: false },
    toAmount: String,
    toSymbol: String,
    connected: Boolean,
    tokenALabel: { type: String, default: "Input" },
    tokenBLabel: { type: String, default: "Input" },
    nextStepMessage: String,
    canSwap: { type: Boolean, default: false },
    fromDisabled: { type: Boolean, default: false },
    toDisabled: { type: Boolean, default: false },
    canSwapIcon: { type: String, default: "arrow" },
    connectedText: String,
    fromSymbolFixed: { type: Boolean, default: false },
    fromSymbolSelectable: { type: Boolean, default: true },
    toSymbolFixed: { type: Boolean, default: false },
    toSymbolSelectable: { type: Boolean, default: true },
    toggleLabel: { type: String, default: null },
    asyncPooling: { type: Boolean, default: null },
    toggleAsyncPooling: { type: Function },
    isFromMaxActive: { type: Boolean, default: false },
    isToMaxActive: { type: Boolean, default: false },
  },
  emits: [
    "fromfocus",
    "fromblur",
    "tofocus",
    "toblur",
    "arrowclicked",
    "tosymbolclicked",
    "fromsymbolclicked",
    "frommaxclicked",
    "tomaxclicked",
    "swapclicked",
    "connectclicked",
    "update:toAmount",
    "update:toSymbol",
    "update:fromAmount",
    "update:fromSymbol",
    "handleToggle",
    "toggleAsyncPooling",
  ],
  setup(props, context) {
    function handleFromUpdateAmount(amount: string) {
      context.emit("update:fromAmount", amount);
    }
    function handleFromUpdateSymbol(symbol: string) {
      context.emit("update:fromSymbol", symbol);
    }

    function handleToUpdateAmount(amount: string) {
      context.emit("update:toAmount", amount);
    }

    function handleToUpdateSymbol(symbol: string) {
      context.emit("update:toSymbol", symbol);
    }
    function handleFromFocused() {
      context.emit("fromfocus");
    }
    function handleFromBlur() {
      context.emit("fromblur");
    }
    function handleToFocused() {
      context.emit("tofocus");
    }
    function handleToBlur() {
      context.emit("toblur");
    }

    function handleFromMaxClicked() {
      context.emit("frommaxclicked");
    }
    function handleToMaxClicked() {
      context.emit("tomaxclicked");
    }
    function toggleAsyncPooling() {
      context.emit("toggleAsyncPooling");
    }
    return {
      handleFromUpdateAmount,
      handleFromUpdateSymbol,
      handleToUpdateAmount,
      handleToUpdateSymbol,
      handleFromFocused,
      handleFromBlur,
      handleFromMaxClicked,
      handleToMaxClicked,
      handleToFocused,
      handleToBlur,
      toggleAsyncPooling,
    };
  },
});
</script>

<style scoped>
.arrow {
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  text-align: center;
  padding: 2px;
}
.field-wrappers {
  margin-bottom: 1rem;
}
</style>
