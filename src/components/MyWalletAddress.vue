<template>
  <div class="my-address">
    <div class="my-address__label">Вам необходимо перевести</div>
    <span>{{Number(count).toFixed(1)}} {{coin}}</span>
    <div class="my-address__label">{{ t('label') }}</div>
    <div class="my-address__field">
      <div class="my-address__number">{{ address }}</div>
      <CopyClip
        :value="address"
        :message="$t('alerts.copy', { msg: $t('inputs.wallet') })"
      />
    </div>
  </div>
</template>

<script>
import CopyClip from 'src/components/CopyClip.vue';
import { useI18n } from 'vue-i18n';

export default {
  props: {
    address: {
      required: true,
      type: String,
    },
    count: {
      required: true,
      type: String,
    },
    coin: {
      required: true,
      type: String,
    }
  },
  setup() {
    const { t } = useI18n({
      messages: {
        'ru-RU': {
          label: 'Адрес кошелька для перевода',
        },
        'en-US': {
          label: 'Wallet address for transaction',
        },
      },
    });

    return {
      t,
    };
  },
  components: {
    CopyClip,
  },
};
</script>

<style scoped lang="scss">
//$

.my-address {
  &__field {
    padding: 6px 10px;
    min-height: 50px;
    @apply tw-rounded-base tw-bg-dark-blue tw-flex tw-items-center;
    @include screen-xl {
      padding: 15px 18px;
    }
  }

  &__label {
    @apply tw-mb-1;
  }

  &__number {
    @apply tw-mr-2 tw-break-all tw-flex-grow;
  }
}
</style>
