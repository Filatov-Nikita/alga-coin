<template>
  <footer class="tw-pt-10 tw-pb-8">
    <div class="tw-container">
      <div class="popup-footer" ref="popupFooter">
        <transition
          appear
          mode="out-in"
          enter-active-class="animated zoomIn"
          leave-active-class="animated zoomOut"
        >
          <div
            v-if="currentLinks"
            class="card card__border-line tw-blur-sm tw-absolute tw-w-full tw-z-50 tw-flex tw-justify-center tw-gap-8"
          >
            <a
              v-for="(link, index) in currentLinks"
              :key="index"
              :href="link.href"
              target="_blank"
              class="link-popup"
              ><img
                :src="require(`assets/icons/${link.icon}-popup.svg`)"
                :alt="link.name"
                class="link-popup__icon"
              />
              <p
                class="tw-text-white tw-text-xs tw-text-center"
                v-html="link.title"
              ></p>
            </a>

            <!-- <div v-for=""></div> -->
          </div>
        </transition>
      </div>
      <div class="footer__top tw-flex tw-justify-between tw-items-center">
        <img :src="require('assets/images/logo-v3.svg')" alt="" />
        <div class="mob-n">
          <!-- <a :href="roadMap" class="text-arrow-brand tw-underline tw-mr-10">Roadmap.pdf</a>
            <a :href="whitePaper" class="text-arrow-brand tw-underline">Whitepaper.pdf</a> -->
          <!-- <a href="#" class="text-arrow-brand tw-underline tw-mr-10">Roadmap.pdf</a>
            <a href="#" class="text-arrow-brand tw-underline">Whitepaper.pdf</a> -->
        </div>
        <div class="tw-flex tw-gap-2.5">
          <a
            href="instagram.com/AlgaEcoSystem"
            class="tw-cursor-pointer pie pie-link"
            target="_blank"
          >
            <img :src="require('assets/icons/instagram.svg')" alt="twitter" />
          </a>
          <a
            href="https://medium.com/@algaecosystem"
            class="tw-cursor-pointer pie pie-link"
            target="_blank"
          >
            <img :src="require('assets/icons/medium.svg')" alt="twitter" />
          </a>
          <div
            @click="choiceLink('telegram')"
            class="tw-cursor-pointer pie pie-link"
            data-link
          >
            <img :src="require('assets/icons/telegram.svg')" alt="telegram" />
          </div>
        </div>
      </div>

      <!-- <a :href="whitePaper" class="text-arrow-brand tw-underline">
            Whitepaper.pdf
          </a> -->
      <!-- <a :href="roadMap" class="text-arrow-brand tw-underline">
            Roadmap.pdf
          </a> -->
      <!-- <div class="footer__bottom tw-flex tw-gap-1.5 tw-justify-center tw-mt-7.5 desk-n">
          <div class="flex tw-flex-col tw-justify-center tw-items-center">
            <img src="./img/whitepaper.png" alt="" />
            <a href="#" class="text-arrow-brand tw-underline">Whitepaper.pdf</a>
          </div>
          <div class="flex tw-flex-col tw-justify-center tw-items-center">
            <img src="./img/roadmap-link.png" alt="" />
            <a href="#" class="text-arrow-brand tw-underline tw-mr-10">Roadmap.pdf</a>
          </div>
        </div> -->
    </div>
  </footer>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from "vue";
const popupFooter = ref(null);
import { useI18n } from "vue-i18n";
const i18n = {
  messages: {
    "ru-RU": {
      links: {
        telegram: ["Канал <br> Алгафинанс", "Чат <br> Алгафинанс"],
      },
    },
    "en-US": {
      links: {
        telegram: ["Сhannel <br> Algafinance", "Chat <br> Algafinance"],
      },
    },
  },
};
const { t } = useI18n(i18n);
const links = ref([
  {
    name: "telegram",
    icon: "telegram",
    title: t("links.telegram[0]"),
    href: "https://t.me/algafinance",
  },
  {
    name: "telegram",
    icon: "telegram",
    title: t("links.telegram[1]"),
    href: "https://t.me/algafinancechat",
  },
]);
const linkName = ref("");
const currentLinks = computed(() => {
  if (linkName.value !== "") {
    return links.value.filter((link) => link.name === linkName.value);
  }
  return null;
});
const scollWindow = (e) => {
  if (linkName.value !== "") {
    linkName.value = "";
    
  }
};

const targetClick = (e) => {
  let currentElem = e.target;
  let open = false;
  while (currentElem) {
    if (currentElem.hasAttribute("data-link")) {
      open = true;
      break;
    } else currentElem = currentElem.parentElement;
  }
  if (
    !open &&
    linkName.value &&
    !e.composedPath().includes(popupFooter.value)
  ) {
    linkName.value = "";
  }
};
onMounted(() => {
  window.addEventListener("scroll", scollWindow);

  window.addEventListener("click", targetClick);
});
onUnmounted(() => {
  window.removeEventListener("scroll", scollWindow);
  window.removeEventListener("click", targetClick);
});
const choiceLink = (name) => (linkName.value = name);
</script>

<style lang="scss" scoped>
//$
footer {
  position: relative;

  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 1px;
    background-color: #101333;
    top: 0;
  }
}

.popup-footer {
  margin: 0 auto;
  position: relative;
  width: 100%;
  @include screen-xl {
    width: 660px;
  }
  & > div {
    top: -110px;
    // height: 170px;
  }
}
.link-popup {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  max-width: 132px;
  width: 100%;
  @include screen-xl {
  }
  &__icon {
    width: 40px;
    height: 40px;
    @include screen-xl {
      width: 60px;
      height: 60px;
    }
  }
}
</style>
