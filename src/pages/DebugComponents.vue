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

        <article>
          <h3 class="h4">Кнопки в стиле flat дизайна</h3>
          <AppButton design="flat" label="Назад">
            <template #prepend>
              <InlineSvg
                :src="require('assets/arrow2.svg')"
                style="transform: rotate(90deg)"
              />
            </template>
          </AppButton>

          <AppButton
            design="flat"
            label="Закрыть"
            :icon="require('assets/close.svg')"
          />
        </article>
      </div>
    </section>
    <section class="section">
      <h2 class="h3">Инпуты:</h2>
      <div>
        <article>
          <h3 class="h4">Инпут с проверкой адреса кошелька</h3>
          <AppInput
            name="address"
            label="Адрес"
            placeholder="Адрес"
            rules="walletAddress"
          />
        </article>

        <article>
          <h3 class="h4">Валюта c конвертацией</h3>
          <AppConvertInput />
        </article>

        <article>
          <h3 class="h4">Валюта</h3>
          <AppInput type="text" label="Валюта" placeholder="Валюта" currency />
        </article>

        <article>
          <h3 class="h4">Кредитка</h3>
          <AppInput label="Кредитка" placeholder="Кредитка" creditCard />
        </article>

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

        <article>
          <h3 class="h4">Базовый checkbox</h3>
          <AppCheckbox>
            <span>
              Я ознакомился(ась) и соглашаюсь с
              <AppLink to="#">Условиями обслуживания</AppLink> AlgaCoin
            </span>
          </AppCheckbox>
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

    <!-- <section class="section">
      <h2 class="h3">уведомления:</h2>
      <div>
        <article>
          <h3 class="h4">Ошибки</h3>
          <AppAlert type="negative" message="уведомление об ошибке" />
        </article>
        <article>
          <h3 class="h4">Успешные</h3>
          <AppAlert type="positive" message="успешное уведомление" />
        </article>
        <article>
          <h3 class="h4">Нейтральные</h3>
          <AppAlert type="neutral" message="нейтральные уведомление" />
        </article>
      </div>
    </section> -->

    <section class="section">
      <h2 class="h3">Прочие компоненты:</h2>
      <article>
        <h3 class="h4">Шаги</h3>
        <div>
          <AppStepGroup v-slot="{ next, prev }" name="payment">
            <AppStep name="choose-way">
              <button @click="next({ show: 'card' })">Пополнить картой</button>
              <button @click="next({ show: 'crypt' })">
                Пополнить криптой
              </button>
            </AppStep>
            <AppRadioGroupStep name="ways">
              <AppStep name="card">
                <button @click="prev">Назад</button>
                <button>поплнить картой</button>
              </AppStep>
              <AppStepGroup name="crypt" v-slot="{ next, prev }">
                <AppStep name="choose-crypt">
                  <button @click="prev">Назад</button>
                  <button @click="next({ show: 'busd' })">busd</button>
                  <button @click="next({ show: 'usdt' })">usdt</button>
                </AppStep>
                <AppRadioGroupStep name="crypt-group">
                  <AppStep name="busd">
                    <button @click="prev">Назад</button>

                    <button @click="next">пополнить в busd</button>
                  </AppStep>
                  <AppStep name="usdt">
                    <button @click="prev">Назад</button>
                    <button @click="next">пополнить в usdt</button>
                  </AppStep>
                </AppRadioGroupStep>
                <AppStep name="finish">
                  <button @click="prev">Назад</button>
                  <div>Вы пополнили счет</div>
                </AppStep>
              </AppStepGroup>
            </AppRadioGroupStep>
          </AppStepGroup>
        </div>
      </article>

      <article>
        <h3 class="h4">Отображение полного адреса кошелька</h3>
        <div>
          <MyWalletAddress
            address="0xAbBDd166fD5DfFe50D294aEEe539CBB2547DE7DF"
          />
        </div>
      </article>
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
import MyWalletAddress from 'src/components/MyWalletAddress';

export default {
  data() {
    return { password: '', code: '', sum: '' };
  },
  components: {
    UserMenu,
    LangToolbar,
    MyWalletAddress,
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
