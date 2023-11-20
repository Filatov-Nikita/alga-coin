<template>
  <Form @submit="swap" v-slot="{ validate }" class="swap-card tw-relative">
    <div class="tw-mb-5 tw-flex tw-justify-between tw-items-center">
      <span class="tw-text-md2 tw-font-medium"> {{ t("swap") }} </span>
    </div>
    <div class="tw-flex tw-justify-end tw-mb-1.5">
      <button class="tw-bg-title tw-rounded-lg tw-h-8 tw-px-4">Max</button>
    </div>
    <div class="tw-mb-4">
      <div class="tw-text-xxs-1 tw-mb-3">
        <span class="tw-text-text-gray"> {{ t("from") }} </span>
      </div>
      <div class="field-select">
        <input type="number" name="inp1" placeholder="0.00" v-model="inp1" />
        <div class="tw-absolute tw-top-0 tw-right-0">
          <base-select2 :options="opts1" v-model="select1" />
        </div>
      </div>
    </div>

    <div>
      <div class="tw-text-xxs-1 tw-mb-3">
        <span class="tw-text-text-gray"> {{ t("to") }} </span>
      </div>
      <div class="field-select">
        <input type="number" name="inp2" placeholder="0.00" v-model="inp2" />
        <div class="tw-absolute tw-top-0 tw-right-0">
          <base-select2 :options="opts2" v-model="select2" />
        </div>
      </div>
    </div>

    <div class="tw-flex tw-justify-end tw-mt-10">
      <button
        type="submit"
        :disabled="!(select1 !== null && select2 !== null && inp1 && inp2)"
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
        <span> {{ t("swap") }} </span>
      </button>
    </div>

    <Transition
      appear
      mode="out-in"
      enter-active-class="animated zoomIn"
      leave-active-class="animated zoomOut"
    >
    <div @click="targetModal" v-show="isPopup" ref="modal" class=" tw-fixed tw-w-full tw-h-full tw-top-0 tw-left-0  tw-z-30" style="z-index:10000;">

      <div
        
        data-popup
        class="card card__border-line tw-absolute tw-w-full tw-top-1/2 tw-transform tw--translate-y-1/2 tw-left-0"
        ref="popup"
      >
      <div class="tw-text-md2 tw-text-center tw-leading-snug xl:tw-text-md2 tw-mb-2.5">
            
            Order created
          </div>
      </div>
    </div>
    </Transition>
  </Form>
  
</template>
<script setup>
import { useI18n } from "vue-i18n";
import { computed, ref, watch } from "vue";
const props = defineProps({
  derivatives: Array,
});

const i18n = {
  messages: {
    "ru-RU": {
      swap: "Менять",
      from: "От",
      to: "К",
    },
    "en-US": {
      swap: "Swap",
      from: "From",
      to: "To (estimated)",
    },
  },
};
const { t } = useI18n(i18n);
const isPopup = ref(false)

const targetModal = (e)=>{
  if(e.target === modal.value) isPopup.value = false
}
const modal = ref()
const select1 = ref(null);
const inp1 = ref("");
const select2 = ref(null);
const inp2 = ref("");
const opts1 = computed(() => {
  const newArr = props.derivatives?.map((item) => {
    return {
      id: item.id,
      img: item.image.url,
      label: item.name,
    };
  });
  if (select2.value === null) {
    return props.derivatives ? newArr : [];
  }
  return props.derivatives
    ? newArr.filter((item) => {
        return item.id !== select2.value.id;
      })
    : [];
});
const swap = (v) => {
  isPopup.value = true
};
const opts2 = computed(() => {
  const newArr = props.derivatives?.map((item) => {
    return {
      id: item.id,
      img: item.image.url,
      label: item.name,
    };
  });
  if (select1.value === null) {
    return props.derivatives ? newArr : [];
  }
  return props.derivatives
    ? newArr.filter((item) => {
        return item.id !== select1.value.id;
      })
    : [];
});
watch(isPopup,(val)=>{
  // if(val) window.addEventListener('click',targetModal)
  // else window.addEventListener('click',targetModal)
})
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
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      /* display: none; <- Crashes Chrome on hover */
      -webkit-appearance: none;
      margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
    }
  }
}
</style>
