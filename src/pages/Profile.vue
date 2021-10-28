<template>
  <q-page class="app-page-y">
    <div class="tw-container">
      <h1 class="app-h1 app-h1--space">Личный кабинет</h1>
      <div class="app-row app-gutter-col-x">
        <div class="app-col-18 xl:app-col-5">
          <div class="tabs tw-mb-7-1">
            <button
              class="tab"
              :class="{ 'tab--active': tab === 'data' }"
              @click="tab = 'data'"
            >
              Данные
            </button>
            <button
              class="tab"
              :class="{ 'tab--active': tab === 'password' }"
              @click="tab = 'password'"
            >
              Пароль
            </button>
          </div>

          <div v-if="tab === 'data'">
            <AppButton fullWidth label="Изменить данные" />
          </div>
          <div v-else-if="tab === 'password'">
            <AppButton fullWidth label="Изменить пароль" />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      tab: 'data',
    };
  },
};
</script>

<style scoped lang="scss">
//$

.tabs {
  @apply tw-flex tw-rounded-base tw-bg-dark;

  @include screen-xl {
    max-width: 200px;
  }
}

.tab {
  @apply tw-px-5 tw-py-3 tw-text-center tw-w-1/2 tw-relative tw-text-xxs;

  @include screen-xl {
    @apply tw-text-xs tw-py-4;

    &:hover {
      @apply tw-bg-blue-hover;

      &:first-child {
        @apply tw-rounded-tl-base tw-rounded-bl-base;
      }

      &:last-child {
        @apply tw-rounded-tr-base tw-rounded-br-base;
      }
    }
  }

  &--active {
    @include screen-xl {
      &:hover {
        &::after {
          @apply tw-bg-white;
        }
      }
    }

    &::after {
      content: '';
      height: 2px;
      width: calc(100% - theme('spacing.5') * 2);
      left: 50%;
      transform: translateX(-50%);
      @apply tw-bg-blue-hover tw-block tw-rounded-base tw-absolute tw-bottom-0;
    }
  }
}
</style>
