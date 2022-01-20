<template>
  <div class="header-dropdown">
    <div class="header-dropdown__main">
      <template v-if="isAuth">
        <div class="tw-flex tw-items-center tw-py-4">
          <UserAvatar class="tw-mr-3" />
          <div class="user-menu__name">{{ username }}</div>
        </div>

        <router-link class="user-menu__item" :to="{ name: 'profile' }">
          <InlineSvg :src="require('assets/profile.svg')" />
          <div class="user-menu__item-name">{{ $t('landing.header.lk') }}</div>
        </router-link>
        <a class="user-menu__item" href="#" @click="$app.logout">
          <InlineSvg :src="require('assets/logout.svg')" />
          <div class="user-menu__item-name">
            {{ $t('landing.header.logout') }}
          </div>
        </a>
      </template>
      <div v-else class="tw-pb-6">
        <AppButton
          fullWidth
          :label="$t('landing.header.registr')"
          :to="{ name: 'auth.registr' }"
          class="tw-mb-2-1"
        />
        <AppButton
          :icon="require('assets/profile.svg')"
          fullWidth
          :label="$t('landing.header.auth')"
          :to="{ name: 'auth.login' }"
          design="flat"
          textClass="tw-text-xxs"
        />
      </div>
      <HeaderBaseFooter />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import UserAvatar from 'src/components/UserAvatar.vue';
import HeaderBaseFooter from 'src/layouts/HeaderBaseFooter';

export default {
  computed: {
    ...mapGetters('profile', { username: 'name' }),
    ...mapGetters('auth', ['isAuth']),
  },
  components: {
    UserAvatar,
    HeaderBaseFooter,
  },
};
</script>

<style scoped lang="scss">
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
