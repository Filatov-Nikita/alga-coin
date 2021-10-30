<template>
  <teleport to="body" :disabled="!showMenu">
    <q-header
      class="tw-pt-4-1 header"
      :class="{ 'header--open': showMenu }"
    >
      <div class="tw-container">
        <div class="tw-pt-safe">
          <div class="app-row app-gutter-col-x tw-items-center">
            <div class="xl:app-col-5">
              <a href="#" class="header__logo">
                <img src="~assets/images/app-logo.svg" alt="логотип" />
              </a>
            </div>

            <div class="xl:app-col-6" v-if="$q.screen.xl">
              <TheNavMenu class="tw-inline-block" />
            </div>

            <div class="tw-flex-grow"></div>

            <div class="app-row tw-items-center tw-space-x-4">
              <LangToolbar currentLang="ru" />
              <!-- Кнопка открыть мобильное меню -->
              <button v-if="$q.screen.lt.xl" @click="showMenu = !showMenu">
                <UserAvatar width="30px" height="30px" />
              </button>
              <!-- Дексктопное меню -->
              <UserMenu v-else-if="$q.screen.xl" :name="username" />
            </div>
          </div>
        </div>
      </div>

      <!-- Мобильное меню -->
      <template v-if="$q.screen.lt.xl">
        <div class="header-dropdown" v-show="showMenu">
          <div class="header-dropdown__main">
            <div class="tw-flex tw-items-center tw-py-4">
              <UserAvatar class="tw-mr-3" />
              <div class="user-menu__name">{{ username }}</div>
            </div>

            <router-link class="user-menu__item" :to="{ name: 'profile' }">
              <InlineSvg :src="require('assets/profile.svg')" />
              <div class="user-menu__item-name">Личный кабинет</div>
            </router-link>
            <a class="user-menu__item" href="#" @click="$app.logout">
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
                <div>AlgaCoin © {{ $fullYear }}</div>
                <div>
                  <a href="#">Условия обслуживания</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </q-header>

    <template v-if="$q.screen.lt.xl">
      <div class="header__cover" @click="close" v-show="showMenu"></div>
    </template>
  </teleport>
</template>

<script>
import LangToolbar from 'src/components/LangToolbar.vue';
import UserMenu from 'src/components/UserMenu.vue';
import UserAvatar from 'src/components/UserAvatar.vue';
import TheNavMenu from 'src/components/TheNavMenu.vue';
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    close() {
      this.showMenu = false;
    },
  },
  computed: {
    ...mapGetters('profile', { username: 'name' }),
  },
  components: {
    LangToolbar,
    UserMenu,
    UserAvatar,
    TheNavMenu,
  },
  watch: {
    showMenu: {
      handler(val) {
        if (val) {
          this.$scroll.stop('header');
        } else {
          this.$scroll.start('header');
        }
      },
      immediate: true,
    },
    $route() {
      this.close();
    },
  },
};
</script>

<style scoped lang="scss">
//$

.header {
  &--open {
    position: absolute;
    z-index: 2002;
    top: 0;
    left: 0;
    @apply tw-w-full tw-bg-dark;
  }

  &__cover {
    background: linear-gradient(52.21deg, #000b29 12.29%, #00173b 82.07%);
    opacity: 0.8;
    z-index: 9;
    @apply tw-fixed tw-top-0 tw-left-0 tw-w-full tw-h-full;
  }

  &__logo {
    width: 100px;
    @apply tw-block;

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
