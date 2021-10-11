<template>
  <teleport to="body" :disabled="!showMenu">
    <q-header class="tw-pt-4-1" :class="{ 'header--open': showMenu }">
      <div class="tw-container">
        <div class="tw-pt-safe">
          <div
            class="app-row app-gutter-col tw-justify-between tw-items-center"
          >
            <a href="#" class="header__logo">
              <img src="~assets/images/app-logo.svg" alt="логотип" />
            </a>
            <div class="app-row tw-items-center tw-space-x-4">
              <LangToolbar currentLang="ru" />
              <button class="xl:tw-hidden" @click="showMenu = !showMenu">
                <UserAvatar width="30px" height="30px" />
              </button>
              <!-- Дексктопное меню -->
              <UserMenu class="tw-hidden xl:tw-block" :name="'Валентина'" />
            </div>
          </div>
        </div>
      </div>

      <!-- Мобильное меню -->
      <div class="header-dropdown" v-show="showMenu">
        <div class="header-dropdown__main">
          <div class="tw-flex tw-items-center tw-py-4">
            <UserAvatar />
            <div class="user-menu__name">{{ 'Валентина' }}</div>
          </div>

          <a class="user-menu__item" href="#">
            <InlineSvg :src="require('assets/profile.svg')" />
            <div class="user-menu__item-name">Личный кабинет</div>
          </a>
          <a class="user-menu__item" href="#">
            <InlineSvg :src="require('assets/logout.svg')" />
            <div class="user-menu__item-name">Выйти</div>
          </a>

          <div class="header-dropdown__footer">
            <div class="tw-flex tw-justify-between tw-mb-3">
              <div class="header-dropdown__logo">
                <img src="~assets/images/app-logo.svg" alt="логотип" />
              </div>
              <div class="tw-flex tw-space-x-3">
                <a href="#">
                  <InlineSvg
                    width="24px"
                    height="24px"
                    :src="require('assets/fb-icon.svg')"
                  />
                </a>
                <a href="#">
                  <InlineSvg
                    width="24px"
                    height="24px"
                    :src="require('assets/inst-icon.svg')"
                  />
                </a>
                <a href="#">
                  <InlineSvg
                    width="24px"
                    height="24px"
                    :src="require('assets/te-icon.svg')"
                  />
                </a>
              </div>
            </div>

            <div class="tw-flex tw-justify-between tw-text-xxs">
              <div>AlgaCoin © 2021</div>
              <div>
                <a href="#">Условия обслуживания</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </q-header>
    <div class="header__cover" v-show="showMenu"></div>
  </teleport>
</template>

<script>
import LangToolbar from 'src/components/LangToolbar.vue';
import UserMenu from 'src/components/UserMenu.vue';
import UserAvatar from 'src/components/UserAvatar.vue';

export default {
  data() {
    return {
      showMenu: false,
    };
  },
  components: {
    LangToolbar,
    UserMenu,
    UserAvatar,
  },
};
</script>

<style scoped lang="scss">
//$

.header {
  &--open {
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    @apply tw-w-full tw-bg-dark;
  }

  &__cover {
    background: linear-gradient(52.21deg, #000b29 12.29%, #00173b 82.07%);
    opacity: 0.8;
    z-index: 9;
    @apply tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full;
  }

  &__logo {
    width: 100px;

    @include screen-xl {
      width: 198px;
    }
  }
}

.header-dropdown {
  border-radius: 0px 0px 15px 15px;
  z-index: 10;
  @apply tw-bg-dark tw-absolute tw-w-full tw-text-xs tw-p-6;

  &__main {
    & > * {
      border-top: 1px solid theme('colors.dark-blue');
    }
  }

  &__logo {
    width: 100px;
  }

  &__footer {
    @apply tw-pt-6;
  }
}

.user-menu {
  &__name {
    margin-right: 6px;
    @apply tw-text-xxs;
  }

  &__item {
    padding: 18px 0px;
    @apply tw-flex tw-items-center tw-text-white tw-text-xxs;

    svg {
      margin-right: 12px;
    }

    & + & {
      border-top: 1px solid theme('colors.dark-blue');
    }
  }
}
</style>
