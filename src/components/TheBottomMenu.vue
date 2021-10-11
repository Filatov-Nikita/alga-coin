<template>
  <div class="bottom-menu">
    <div class="bottom-menu__links">
      <div class="tw-pb-safe">
        <div class="bottom-menu__list">
          <router-link to="#" class="bottom-menu__link tw-mr-8">
            <InlineSvg
              class="bottom-menu__icon"
              :src="require('assets/icons/alga.svg')"
            />
            <div class="bottom-menu__label">Кошелек</div>
          </router-link>
          <router-link to="#" class="bottom-menu__link bottom-menu__link--2">
            <InlineSvg
              class="bottom-menu__icon"
              :src="require('assets/icons/history.svg')"
            />
            <div class="bottom-menu__label">История операций</div>
          </router-link>

          <router-link to="#" class="bottom-menu__link">
            <InlineSvg
              class="bottom-menu__icon"
              :src="require('assets/icons/output.svg')"
            />
            <div class="bottom-menu__label">Вывод</div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.bottom-menu {
  @apply tw-pt-3;

  &__links {
    border-radius: 12px 12px 0px 0px;
    padding-bottom: 9px;
    @apply tw-bg-dark tw-pt-2;
  }

  &__list {
    @apply tw-flex tw-justify-center;
  }

  &__label {
    font-size: 10px;
    line-height: 11px;
    margin-top: 6px;
  }

  &__icon {
    @apply tw-mx-auto;
  }

  &__link {
    &--2 {
      margin-right: 35px;
    }
  }
}
</style>
