import { useI18n } from "vue-i18n";
import { computed, ref, onMounted } from "vue";

export default function () {
  const $i18n = useI18n();
  const newLocale = (lang) => {
    window.app.setLocale(lang, true);
    activeSelectLang.value = false;
  };
  const locale = computed(() => {
    if ($i18n.locale.value === "en-US" || $i18n.locale.value === "en")
      return "English";
    if ($i18n.locale.value === "ru-RU" || $i18n.locale.value === "ru")
      return "Русский";
    if ($i18n.locale.value === "de") return "Deutsch";
    if ($i18n.locale.value === "zh-CN" || $i18n.locale.value === "zh")
      return "中文";
    return null;
  });

  const selectLang = computed(() => {
    if ($i18n.locale.value === "en-US" || $i18n.locale.value === "en")
      return "EN";
    if ($i18n.locale.value === "ru-RU" || $i18n.locale.value === "ru")
      return "RU";
    if ($i18n.locale.value === "de") return "DE";
    if ($i18n.locale.value === "zh-CN" || $i18n.locale.value === "zh")
      return "中文";
    return null;
  });

  const activeSelectLang = ref(false);
  const scollWindow = (e) => {
    activeSelectLang.value = false;
  };
  onMounted(() => {
    window.addEventListener("scroll", scollWindow);
  });

  return {
    locale,
    newLocale,
    selectLang,
    activeSelectLang,
  };
}
