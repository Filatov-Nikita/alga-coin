<template>
  <div class="list">
    <button
      v-for="(item, index) in list"
      :key="item.label"
      :style="{ '--theme-primary': themes[theme] }"
      @click="$router.push(item.to)"
      class="list__item"
      :class="[
        { 'list__item--active': isActive(item) },
        ['darkBlue', 'blue', 'default'].includes(theme)
          ? 'tw-text-secondary'
          : 'tw-text-white',
      ]"
    >
      {{ item.label }}
    </button>
  </div>
</template>

<script>
import { inject, computed } from "vue";
import { useI18n } from "vue-i18n";

export default {
  props: {
    activeIndex: {
      default: 0,
      type: Number,
    },
  },
  emits: ["to"],
  setup(_props, { emit }) {
    const theme = inject("theme");
    const themes = inject("themes");
    const { t } = useI18n();
    const list = computed(() => getItems(t));

    const to = (index) => {
      emit("to", index);
    };

    return {
      to,
      list,
      theme,
      themes,
    };
  },
  methods: {
    isActive(item) {
      const curSection = this.$route.query.section;
      const routeName = this.$route.name;
      const itemSection = item.to.query.section;
      const itemName = item.to.name;
      const itemChildren = item.children;

      if (curSection === itemSection && routeName === itemName) return true;
      if (itemChildren?.includes(routeName)) return true;
      if (
        itemChildren?.some(
          (child) => curSection && child?.section === curSection
        )
      )
        return true;

      return false;
    },
  },
};

function getItems(t) {
  return [
    {
      label: t("landing.menu.about"),
      to: { name: "home", query: { section: "advantages" } },
    },
    {
      label: t("landing.menu.features"),
      to: { name: "home", query: { section: "features" } },
    },
    // {
    //   label: t('landing.menu.owners'),
    //   to: { name: 'home', query: { section: 'owners' } },
    // },
    {
      label: t("landing.menu.ecosystem"),
      to: { name: "home", query: { section: "eco-start" } },
      children: [{ section: "ecosystem" }],
    },
    {
      label: t("landing.menu.projects"),
      to: { name: "home", query: { section: "projects" } },
      children: ["projects.show"],
    },
    {
      label: t("landing.menu.news"),
      to: { name: "home", query: { section: "news" } },
      children: ["articles.show"],
    },
  ];
}
</script>

<style scoped lang="scss">
//$

.list {
  position: relative;
  z-index: 2000;
  @include row();
  @include gutter-x(1px);

  &__item {
    border-radius: 50px;
    padding: 5px 13px;
    @apply tw-uppercase tw-text-xxs-1;

    &:first-child:not(.list__item--active) {
      margin-left: -13px;
    }

    &--active {
      @apply tw-normal-case tw-text-white tw-text-xxs;
      background: var(--theme-primary);
    }
  }
}
</style>
