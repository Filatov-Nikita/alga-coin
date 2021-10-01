<template>
  <q-page class="tw-p-4">
    <h1 class="h2 tw-text-center">Vue компоненты alga-coin</h1>
    <section class="section">
      <h2 class="h3">Кнопки:</h2>
      <div>
        <article>
          <h3 class="h4">Классическая кнопка</h3>
          <AppButton label="Нажми" />
        </article>
        <article>
          <h3 class="h4">Кнопка с иконкой</h3>
          <AppButton
            label="Иконочная кнопка"
            :icon="require('assets/usdt.svg')"
          />
        </article>
      </div>
    </section>
    <section class="section">
      <h2 class="h3">Инпуты:</h2>
      <div>
        <article>
          <h3 class="h4">Пароль</h3>
          <AppInput
            type="password"
            label="Пароль"
            placeholder="Пароль"
            v-model="password"
            rules="required|min:8"
          />
        </article>

        <article>
          <h3 class="h4">Инпут с добавлением слотов слева и справа</h3>
          <AppInput label="append/prepend" placeholder="append/prepend">
            <template #prepend> 1 </template>
            <template #append>
              <span class="tw-text-secondary">ALG</span>
            </template>
          </AppInput>
        </article>

        <article>
          <h3 class="h4">Номер телефона с префиксом</h3>
          <AppInput
            label="Номер телефона"
            placeholder="Номер телефона"
            type="tel"
            withTelPrefix
          />
        </article>

        <article>
          <h3 class="h4">Инпут для ввода целоа числа или дробного</h3>
          <AppCurrencyInput
            class="tw-mb-8"
            label="Сумма в рублях"
            placeholder="Сумма в рублях"
            currency="rub"
            v-model="sum"
          />
        </article>

        <article>
          <h3 class="h4">Ввод цифрового кода</h3>
          <AppCodeInput length="6" label="Код из СМС" v-model:code="code" />
        </article>
      </div>
    </section>
    <section class="section">
      <h2 class="h3">Ссылки:</h2>
      <article>
        <h3 class="h4">Базовая ссылка</h3>
        <AppLink to="#">Не получили код?</AppLink>
      </article>
    </section>

    <section class="section">
      <h2 class="h3">Меню:</h2>
      <div>
        <article>
          <h3 class="h4">Выпадающее меню пользователя</h3>
          <UserMenu name="Валентина" />
        </article>
      </div>
    </section>

    <section class="section">
      <h2 class="h3">Прочие компоненты:</h2>
      <article>
        <h3 class="h4">Отображение номера кошелька</h3>
        <div>
          <AppWalletDisplay
            walletNumber="0xAbBDd166fD5DfFe50D294aEEe539CBB2547DE7DF"
          />
        </div>
      </article>
      <article>
        <h3 class="h4">Таймер обратного отсчета</h3>
        <AppTimer :start="5" class="tw-text-xs">
          <template v-slot:default="{ time }">
            <span>Повторная отправка через ({{ time }})</span>
          </template>
        </AppTimer>
      </article>

      <article>
        <h3 class="h4">Переключение языка</h3>
        <LangToolbar currentLang="ru" />
      </article>
    </section>
  </q-page>
</template>

<script>
import UserMenu from 'src/components/UserMenu';
import LangToolbar from 'src/components/LangToolbar';

export default {
  data() {
    return { password: '', code: '', sum: '' };
  },
  components: {
    UserMenu,
    LangToolbar,
  },
};
</script>

<style scoped>
.section {
  @apply tw-border tw-border-dashed tw-border-primary tw-p-6;
}

.section + .section {
  margin-top: 20px;
}
</style>
