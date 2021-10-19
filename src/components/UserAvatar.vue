<template>
  <div class="user-menu__avatar" :style="{ width, height }">
    <InlineSvg
      v-if="avatar === 'standart'"
      v-bind="{ width, height }"
      :src="require('assets/profile-avatar.svg')"
    />
    <img v-else :src="avatar" alt="profile avatar" />
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
    },
    height: {
      type: String,
    },
    avatar: {
      default: 'standart',
      type: String,
    },
  },
};
</script>

<style scoped lang="scss">
.user-menu {
  &__avatar {
    width: 36px;
    height: 36px;
    @apply tw-rounded-full;

    img {
      @apply tw-rounded-full;
    }
  }
}
</style>
