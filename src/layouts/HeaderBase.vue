<template>
  <teleport to="body" :disabled="!showMenu">
    <q-header class="tw-pt-4-1 " :class="{ 'header--open': showMenu }">
      <div class="tw-container">
        <div class="tw-pt-safe">
          <div class="app-row app-gutter-col-x tw-items-center">
            <div class="xl:app-col-5">
              <a href="#" class="app-logo-2 tw-block">
                <img
                  class="app-logo-i"
                  src="~assets/images/app-logo-3.svg"
                  alt="логотип"
                />
              </a>
            </div>

            <div class="xl:app-col-6" v-if="$q.screen.xl">
              <TheNavMenu class="tw-inline-block" />
            </div>

            <div class="tw-flex-grow"></div>

            <div class="app-row tw-items-center tw-space-x-4">
              <AppLink :to="{name: 'polls'}">{{$t('lk.menu.polls')}}</AppLink>
              <LangToolbar
                :currentLang="$i18n.locale"
                @update:lang="onChangeLang"
              />
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
        <HeaderBaseDropdown v-show="showMenu" />
      </template>
    </q-header>

    <template v-if="$q.screen.lt.xl">
      <div class="header__cover" @click="close" v-show="showMenu"></div>
    </template>
  </teleport>
</template>

<script>
import HeaderBaseDropdown from './HeaderBaseDropdown.vue';
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
    onChangeLang(lang) {
      window.app.setLocale(lang, true);
    },
  },
  computed: {
    ...mapGetters('profile', { username: 'name' }),
  },
  components: {
    HeaderBaseDropdown,
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
}
</style>
