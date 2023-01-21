<template>
  <div class="select-lang">
    <div
      class="select-lang__head"
      @click="activeSelectLang = !activeSelectLang"
    >
      <span>
        {{ selectLang }}
      </span>
    </div>
    <div class="select-lang__body" :class="{ active: activeSelectLang }">
      <div class="select-lang__body-wrapper">
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
    </div>
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

<style></style>
