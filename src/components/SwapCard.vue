<template>
  <div class="swap-card">
    <div class="tw-mb-5 tw-flex tw-justify-between tw-items-center">
      <span class="tw-text-md2 tw-font-medium"> Swap </span>
    </div>
    <div class="tw-flex tw-justify-end tw-mb-1.5">
      <button class="tw-bg-title tw-rounded-lg tw-h-8 tw-px-4">Max</button>
    </div>
    <div class="tw-mb-4">
      <div class="tw-text-xxs-1 tw-mb-3">
        <span class="tw-text-text-gray"> From </span>
      </div>
      <div class="field-select">
        <input type="text" placeholder="0.00" />
        <div class="tw-absolute tw-top-0 tw-right-0">
          <base-select2 :options="options" v-model="select1" />
        </div>
        <!-- <div class="select">
                <img
                  src="https://admin.alga.finance/storage/coin_images/7rQbWbecOrwZdODcQ1w2who2iLSPonLCRt68AuvU.svg"
                  alt=""
                  width="16"
                  height="16"
                />
                <span> LTC </span>
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L4.8 4.8L8.6 1"
                    stroke="#D9D9D9"
                    stroke-linecap="round"
                  />
                </svg>
              </div> -->
      </div>
      <div class="tw-text-xxs-1 tw-mt-3">
        <span class="tw-text-text-gray"> Available: </span>
        0.00006000 LTC
      </div>
    </div>

    <div>
      <div class="tw-text-xxs-1 tw-mb-3">
        <span class="tw-text-text-gray"> To (estimated) </span>
      </div>
      <div class="field-select">
        <input type="text" placeholder="0.00" />
        <div class="tw-absolute tw-top-0 tw-right-0">
          <base-select2 :options="options" v-model="select2" />
        </div>
      </div>
    </div>
    {{}}
    <div class="tw-flex tw-justify-end tw-mt-10">
      <button
        :disabled="!(select1 !== null && select2 !== null)"
        class="tw-bg-title-light tw-text-white tw-rounded-xl tw-px-12 tw-h-12 tw-flex tw-items-center tw-justify-center tw-gap-2"
      >
        <svg
          width="14"
          height="12"
          viewBox="0 0 14 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2.84615 11.3333L1 7.3333H13" stroke="#fff" />
          <path d="M11.1538 0.666626L13 4.66663H1" stroke="#fff" />
        </svg>
        <span> Swap </span>
      </button>
    </div>
  </div>
</template>
<script setup>
import { computed, ref } from "vue";
const props = defineProps({
  derivatives: Array,
});
const select1 = ref(null);
const select2 = ref(null);
const options = computed(() => {
  return props.derivatives
    ? props.derivatives?.map((item) => {
        return {
          img: item.image.url,
          label: item.name,
        };
      })
    : [];
});
</script>
<style lang="scss" scoped>
.swap-card {
  border: 1.04002px solid #575656;
  border-radius: 7.80016px;
  padding: 24px 26px;
}

.field-select {
  position: relative;
  width: 100%;
  & input {
    width: 100%;
    height: 50px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.08);
    outline: none;
    padding: 0 16px;
    &::placeholder {
      color: #575656;
    }
  }
}
</style>
