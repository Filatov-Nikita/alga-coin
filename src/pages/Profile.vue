<template>
  <q-page class="app-page-y">
    <div class="tw-container">
      <h1 class="app-h1 app-h1--space">Личный кабинет</h1>
      <div class="app-row app-gutter-col-x">
        <div class="app-col-18 xl:app-col-5">
          <div class="tabs tw-mb-7-1">
            <button
              class="tab"
              :class="{ 'tab--active': step === 'profile-data' }"
              @click="changeStep('profile-data')"
            >
              Данные
            </button>
            <button
              class="tab"
              :class="{ 'tab--active': step === 'password' }"
              @click="changeStep('password')"
            >
              Пароль
            </button>
          </div>
          <AppStep name="profile-data">
            <Form class="app-space-y-md" v-slot="{ isSubmittig }">
              <AppInput
                name="name"
                label="Имя"
                placeholder="Имя"
                rules="required"
              />
              <AppInput
                name="email"
                label="E-mail"
                placeholder="E-mail"
                rules="required|email"
              />
              <AppInput
                type="tel"
                name="cellphone"
                label="Телефон"
                placeholder="Номер телефона"
                rules="required"
              />
              <AppButton
                type="submit"
                :disabled="isSubmittig"
                fullWidth
                label="Сохранить изменения"
              />
            </Form>
          </AppStep>
          <AppStep name="password">
            <Form class="app-space-y-md" v-slot="{ isSubmittig }">
              <AppInput
                type="password"
                name="oldPass"
                label="Старый пароль"
                placeholder="Пароль"
                rules="required|password"
              />
              <AppInput
                type="password"
                name="newPass"
                label="Новый пароль"
                placeholder="Пароль"
                rules="required|confirmed:@oldPass"
              />
              <AppButton
                type="submit"
                :disabled="isSubmittig"
                fullWidth
                label="Изменить пароль"
              />
            </Form>
          </AppStep>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import useStep from 'src/composition/useStep';

export default {
  setup() {
    const { step, changeStep } = useStep('profile-data');
    return {
      step,
      changeStep,
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
