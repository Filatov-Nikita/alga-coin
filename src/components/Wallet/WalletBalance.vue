<template>
  <div class="wallet-balance">
    <AppWalletDisplay
      v-if="!hideWalletNumber"
      class="tw-justify-center tw-mb-3-1"
      v-bind="{ walletNumber }"
    />

    <div class="tw-mb-6 tw-text-center">
      <div v-if="!hideIcon" class="wallet-balance__icon tw-mx-auto tw-mb-3">
        <InlineSvg
          :src="
            frozen
              ? require('assets/images/wallet-frozen.svg')
              : require('assets/images/logo.svg')
          "
        />
      </div>
      <div
        class="tw-text-md2"
        :class="[frozen ? 'tw-text-secondary tw-opacity-40' : '']"
      >
        {{ alg }} ALG
      </div>
      <div
        class="tw-text-secondary tw-text-xs xl:tw-text-sm"
        :class="[frozen ? 'tw-opacity-40' : '']"
      >
        {{ rub }} RUB
      </div>

      <div
        v-if="frozenTill"
        class="
          tw-bg-dark-blue
          tw-bg-opacity-40
          tw-rounded-base
          tw-flex
          tw-items-center
          tw-justify-center
          tw-text-xxs
          xl:tw-text-xs
          tw-px-4 tw-py-3 tw-mt-4-1
          xl:tw-px-6 xl:tw-py-4
        "
      >
        <InlineSvg class="tw-mr-2" :src="require('assets/icons/info.svg')" />
        <span> {{ t('frozenTill', { date: frozenTill }) }} </span>
      </div>
    </div>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n';

export default {
  props: {
    walletNumber: {
      required: true,
      type: String,
    },
    alg: {
      required: true,
      type: String,
    },
    rub: {
      required: true,
      type: String,
    },
    frozen: {
      default: false,
      type: Boolean,
    },
    frozenTill: {
      default: undefined,
      type: String,
    },
    hideIcon: {
      default: false,
      type: Boolean,
    },
    hideWalletNumber: {
      default: false,
      type: Boolean,
    },
  },
  setup() {
    const { t } = useI18n({
      messages: {
        'ru-RU': {
          frozenTill: 'Заморожено до {date}',
        },
        'en-US': {
          frozenTill: 'Frozen till {date}',
        },
      },
    });
    return {
      t,
    };
  },
};
</script>

<style scoped lang="scss">
.wallet-balance {
  &__icon {
    width: 70px;
    height: 70px;
  }
}
</style>
