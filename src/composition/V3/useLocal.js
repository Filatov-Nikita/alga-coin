import { useI18n } from "vue-i18n";
import { computed } from "vue";

export default function(){
    const $i18n = useI18n();
    const newLocale = (lang) => {
      window.app.setLocale(lang, true);
    };
    const locale = computed(() => {
      console.log($i18n.locale.value);
      if ($i18n.locale.value === "en-US" || $i18n.locale.value === "en")
        return "English";
      if ($i18n.locale.value === "ru-RU" || $i18n.locale.value === "ru")
        return "Русский";
      return null;
    });

    return {
        locale,
        newLocale
    }
}