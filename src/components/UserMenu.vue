<template>
  <div class="user-menu">
    <button class="user-menu__btn" @click="onClick">
      <div class="user-menu__avatar">
        <InlineSvg
          v-if="avatar === 'standart'"
          :src="require('assets/profile-avatar.svg')"
        />
        <img v-else :src="avatar" alt="profile avatar" />
      </div>
      <div class="user-menu__name">{{ name }}</div>
      <div class="user-menu__icon">
        <InlineSvg :src="require('assets/arrow2.svg')" />
      </div>
    </button>
    <div class="user-menu__dropdown" v-if="showMenu">
      <a class="user-menu__item" href="#">
        <InlineSvg :src="require('assets/profile.svg')" />
        <div class="user-menu__item-name">Личный кабинет</div>
      </a>
      <a class="user-menu__item" href="#">
        <InlineSvg :src="require('assets/logout.svg')" />
        <div class="user-menu__item-name">Выйти</div>
      </a>
    </div>
  </div>
</template>

<script>
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
    onClick() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>

<style scoped lang="scss">
.user-menu {
  @apply tw-relative tw-inline-block;

  &__dropdown {
    bottom: -8px;
    transform: translateY(100%);
    @apply tw-bg-dark tw-rounded-base tw-absolute tw-w-full;
  }

  &__btn {
    padding: 10px 30px 10px 23px;
    @apply tw-flex tw-items-center tw-bg-dark tw-rounded-base;

    &:hover {
      @apply tw-bg-primary;
    }
  }

  &__avatar {
    width: 36px;
    height: 36px;
    margin-right: 12px;
    @apply tw-rounded-full;

    img {
      @apply tw-rounded-full;
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
    @apply tw-flex tw-items-center;

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
      @apply tw-bg-primary;
    }
  }
}
</style>
