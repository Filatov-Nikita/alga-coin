<template>
  <footer class="tw-pt-10 tw-pb-8">
    <div class="tw-container">
      <div class="footer__top tw-flex tw-justify-between tw-items-center">
        <img :src="require('assets/images/logo-v3.svg')" alt="" />
        <div class="mob-n">
          <!-- <a :href="roadMap" class="text-arrow-brand tw-underline tw-mr-10">Roadmap.pdf</a>
            <a :href="whitePaper" class="text-arrow-brand tw-underline">Whitepaper.pdf</a> -->
          <!-- <a href="#" class="text-arrow-brand tw-underline tw-mr-10">Roadmap.pdf</a>
            <a href="#" class="text-arrow-brand tw-underline">Whitepaper.pdf</a> -->
        </div>
        <div class="tw-flex tw-gap-2.5">
          <a href="https://twitter.com/AlgaEcosystem" target="blank" class="pie pie-link"><img :src="require('assets/icons/twitter.svg')" alt="twitter" /></a>
          <a href="https://t.me/algafinance" target="blank"
            class="pie pie-link"><img :src="require('assets/icons/telegram.svg')" alt="telegram" /></a><a href="#"
            class="pie pie-link"><img :src="require('assets/icons/discord.svg')" alt="discord" /></a>
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

<script>
export default {

}
</script>

<style lang="scss" scoped>
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
</style>