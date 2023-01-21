<template>
  <div class="tw-flex tw-gap-2 tw-items-center lang">
    <div
      class="option"
      :class="locale === 'Русский' ? 'active' : ''"
      @click="newLocale('ru-RU')"
    >
      <span> RU </span>
    </div>
    <div
      class="option"
      :class="locale === 'English' ? 'active' : ''"
      @click="newLocale('en-US')"
    >
      <span> EN </span>
    </div>
    <!-- <div
      class="option"
      :class="locale === 'Deutsch' ? 'active' : ''"
      @click="newLocale('de')"
    >
      <span> DE </span>
    </div>
    <div
      class="option"
      :class="locale === '中文' ? 'active' : ''"
      @click="newLocale('zh-CN')"
    >
      <span> 中文 </span>
    </div> -->
  </div>
</template>

<script>
import useLocal from "src/composition/V3/useLocal";
export default {
  setup() {
    const { locale, newLocale, selectLang, activeSelectLang } = useLocal();
    return {
      locale,
      newLocale,
      selectLang,
      activeSelectLang,
    };
  },
};
</script>

<style lang="scss" scoped>
.lang {
  .option {
    font-size: 15.017px;
    line-height: 18px;
    cursor: pointer;
    &.active {
      font-weight: 700;
      font-size: 21.5615px;
      line-height: 26px;
      background: linear-gradient(180deg, #4ad66d 0%, #04ac2e 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
  }
}
</style>
