<template>
  <AppAlert />
  <router-view />
</template>
<script>
import { defineComponent } from "vue";
import { useMeta } from "quasar";
import { useI18n } from "vue-i18n";
const i18n = {
  messages: {
    "ru-RU": {
      meta: {
        "og:desctrition":
          "Alga - это новый вид инвестирования. Наша цель - сформировать совершенно новую “точку входа” на рынок, чтобы сделать криптовалюты еще более демократичным финансовым инструментом.",
      },
    },
    "en-US": {
      meta: {
        "og:desctrition":
          "Alga is a new kind of investing. Our goal is to form a completely new “entry point” into the market to make cryptocurrencies even more democratic financial tool.",
      },
    },
  },
};
export default defineComponent({
  name: "App",
  setup() {
    const { t } = useI18n(i18n);
    useMeta({
      title: "Alga Ecosystem - Financial Derivatives Platform",
      description: "",
      meta: {
        // { name: "url", content: "https://alga.finance/" },
        url: {
          name: "url",
          content: "https://alga.finance/",
        },
        ogImageWidth: {
          name: "og:image:width",
          content: "1920",
        },
        ogImageHeight: {
          name: "og:image:height",
          content: "1080",
        },
        title: {
          property: "og:title",
          // optional; similar to titleTemplate, but allows templating with other meta properties
          template() {
            return "title";
          },
        },
        ogDescription: {
          property: "og:description",
          // optional; similar to titleTemplate, but allows templating with other meta properties
          template() {
            return t("meta.og:desctrition");
          },
        },
        ogImage: {
          property: "og:image",
          content: "https://alga.finance/header-bg_en.jpg",
        },
        twitterImage: {
          name: "twitter:image",
          content: "https://alga.finance/header-bg_en.jpg",
        },
      },
    });
  },
});
</script>
