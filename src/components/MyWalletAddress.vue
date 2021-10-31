<template>
  <div class="my-address">
    <div class="my-address__label">Адрес вашего кошелька для перевода</div>
    <div class="my-address__field">
      <div class="my-address__number">{{ address }}</div>
      <CopyClip
        :value="address"
        message="Номер кошелька скопирован в буфер обмена"
      />
    </div>
  </div>
</template>

<script>
import CopyClip from 'src/components/CopyClip.vue';

export default {
  props: {
    address: {
      required: true,
      type: String,
    },
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
