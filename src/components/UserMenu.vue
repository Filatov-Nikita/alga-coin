<template>
  <div class="user-menu">
    <button class="user-menu__btn" @click="onClick" v-click-outside="close">
      <UserAvatar class="tw-mr-3" />
      <div class="user-menu__name">{{ name }}</div>
      <div class="user-menu__icon">
        <InlineSvg :src="require('assets/arrow2.svg')" />
      </div>
    </button>
    <div class="user-menu__dropdown" v-if="showMenu">
      <router-link class="user-menu__item" :to="{ name: 'profile' }">
        <InlineSvg :src="require('assets/profile.svg')" />
        <div class="user-menu__item-name">{{$t('landing.header.lk')}}</div>
      </router-link>
      <a class="user-menu__item" href="#" @click.prevent="$app.logout">
        <InlineSvg :src="require('assets/logout.svg')" />
        <div class="user-menu__item-name">{{$t('actions.logout')}}</div>
      </a>
    </div>
  </div>
</template>

<script>
import UserAvatar from 'src/components/UserAvatar.vue';

export default {
  props: {
    name: {
      required: true,
      type: String,
    },
    avatar: {
      default: 'standart',
      type: String,
    },
  },
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    close() {
      this.showMenu = false;
    },
    onClick() {
      this.showMenu = !this.showMenu;
    },
  },
  components: {
    UserAvatar,
  },
};
</script>

<style scoped lang="scss">
.user-menu {
  width: 200px;
  @apply tw-relative;

  &__dropdown {
    bottom: -8px;
    transform: translateY(100%);
    @apply tw-bg-dark tw-rounded-base tw-absolute tw-w-full;
  }

  &__btn {
    word-break: break-all;
    padding: 10px 30px 10px 23px;
    @apply tw-flex tw-items-center tw-bg-dark tw-rounded-base tw-w-full;

    &:hover {
      @apply tw-bg-blue-hover;
    }
  }

  &__name {
    margin-right: 6px;
    @apply tw-text-xs;
  }

  &__icon {
    width: 16px;
    height: 16px;
    line-height: 16px;
    @apply tw-text-center;

    svg {
      @apply tw-inline-block;
    }
  }

  &__item {
    padding: 18px 20px;
    @apply tw-flex tw-items-center tw-text-white;

    svg {
      margin-right: 14px;
    }

    &:first-child {
      @apply tw-rounded-t-base;
    }

    &:last-child {
      @apply tw-rounded-b-base;
    }

    & + & {
      border-top: 1px solid theme('colors.dark-blue');
    }

    &:hover {
      @apply tw-bg-blue-hover;
    }
  }
}
</style>
