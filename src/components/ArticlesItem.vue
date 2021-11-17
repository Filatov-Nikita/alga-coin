<template>
  <section>
    <div
      class="
        app-row app-gutter-x-xl
        tw-items-center tw-mb-6 tw-justify-between
        xl:tw-justify-start
      "
    >
      <p class="tw-text-xs">15.11.2021, 13:39</p>
      <AppButton design="flat" @click="share">
        <div class="tw-flex tw-items-center tw-text-xs">
          <InlineSvg
            class="tw-mr-3"
            :src="require('assets/icons/share.svg')"
            width="16px"
          />
          <div>Поделиться</div>
        </div>
      </AppButton>
    </div>
    <component
      :is="main ? 'h1' : 'div'"
      class="tw-text-sm xl:tw-text-lg tw-mb-4-1 xl:tw-mb-6"
    >
      Банк России изучит объём инвестиций россиян в криптовалюту
    </component>
    <div class="tw-mb-9">
      <q-img
        height="370px"
        class="tw-rounded-base"
        src="https://images.unsplash.com/photo-1598128558393-70ff21433be0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=978&q=80"
      />
    </div>

    <p class="tw-text-xxs xl:tw-text-xs tw-leading-loose xl:app-col-14">
      За последние сутки первая криптовалюта подорожала на 3%, а ее
      капитализация увеличилась до $1,1 трлн Утром 15 октября цена биткоина на
      криптобирже Bitfinex впервые с середины апреля превысила $60 тыс. За
      прошедшие сутки главная криптовалюта подорожала на 3%. На 9:30 мск биткоин
      торгуется на уровне $59,5 тыс.
      <br />
      <br />
      Капитализация криптовалюты увеличилась до $1,1 трлн, по данным CoinGecko.
      Доля биткоина на крипторынке составляет 44,2%. Последняя волна роста
      биткоина стартовала 29 сентября, с локального ценового минимума в $40,7
      тыс.
      <br />
      <br />
      За более чем две недели криптовалюта подорожала на 47%. Ее цена
      приближается к историческому максимуму в $64,8 тыс., установленному в
      середине апреля. Ранее аналитическая компания B2C2 сообщила, что рост
      стоимости биткоина в начале октября вызван повышенным спросом на
      криптовалюту со стороны институциональных инвесторов. Аналитики
      утверждают, что в последние недели рынок «активно смещен в сторону
      покупателей». — Банк России изучит объем инвестиций россиян в криптовалюту
      — В Fidelity спрогнозировали подорожание биткоина до $100 тыс. к 2023 году
      — Glassnode: отток биткоинов с криптобирж замедлился
    </p>
  </section>
</template>

<script>
export default {
  props: {
    main: {
      default: false,
      type: Boolean,
    },
  },
  methods: {
    share() {
      const route = this.$router.resolve({
        name: 'articles.show',
        params: { id: 2 },
      });
      this.$copy(window.location.origin + route.href);
      this.$alert({
        type: 'neutral',
        message: 'Ссылка скопирована в буфер обмена',
      });
    },
  },
};
</script>

<style>
</style>
