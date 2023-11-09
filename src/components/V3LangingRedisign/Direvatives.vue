<template>
<section class="section index-directive">
      <div class="tw-container">
        <h2 class="title xl:tw-mb-14">{{ t("indexD.title") }}</h2>
        <!-- cards -->
        <div class=" tw-flex xl:tw-gap-5 tw-gap-3 tw-mt-5">
          <base-button
                  v-for="item in typesDirevative"
                  class="button button__dense "
                  :design="typeDirevative === item ? 'green': 'border'"
                  @click="selectTypeDirevatives(item)"
                >
                {{ item }}
                </base-button>
        </div>
        <div class="mob-n">
          <div class="index-directive__cards tw-mt-10">
            <div
              class="card card_border card-derivative"
              v-for="derivative in derivatives"
              :key="derivative.id"
            >
              <div class="tw-flex tw-gap-3.5 tw-items-center">
                <div class="circle tw-flex-shrink-0">
                  <img :src="derivative.image.url" alt="" />
                </div>
                <h4 class=" tw-text-sm">{{ derivative.name }}</h4>
              </div>
              <p class="tw-mt-2.5 tokens tw-overflow-auto">
                <template
                  v-for="currency in derivative.currency_shares"
                  :key="derivative.id + '_' + currency.id"
                >
                  {{ currency.code }} &nbsp;
                </template>
              </p>
              <!-- index_derivative_id: -->
              <div
                class="tw-mt-5 tw-flex tw-justify-between"
                v-if="getChart(derivative.id)"
              >
                <div>
                  <p
                    class="tw-text-white"
                    v-html="t('indexD.card.profitability.1', { numb: '1' })"
                  ></p>
                  <div class="tw-flex tw-gap-x-2.5">
                    <MarkIcon :mark="getChart(derivative.id)?.profitability" />
                    <h4>{{ getChart(derivative.id)?.profitability }}%</h4>
                  </div>
                </div>
                <div>
                  <MiniAreaChart :values="getChartData(derivative.id)" />

                  <button
                    @click="stage2"
                    class="tw-mt-2 tw-flex tw-gap-1.5 tw-items-center"
                  >
                    <span class="buy">{{ t("other.button.buy") }}</span>
                    <img src="./icons/button-arrow.svg" alt="" />
                  </button>
                </div>
              </div>
            </div>
            <!-- card -->
          </div>
        </div>
        <div class="desk-n">
          <div class="index-directive__cards">
            <!-- card -->
            
            <q-carousel
              v-model="slideIndex"
              transition-prev="scale"
              transition-next="scale"
              swipeable
              animated
              navigation
              padding
              class="bg-transparent"
            >
              <template
                v-slot:navigation-icon="{ index, active, btnProps, onClick }"
              >
                <button
                  class="slide-paginate active"
                  v-if="active"
                  @click="onClick"
                >
                  {{ index + 1 }}
                </button>
                <button class="slide-paginate" v-else @click="onClick">
                  {{ index + 1 }}
                </button>
              </template>

              <q-carousel-slide
                v-for="derivative in derivatives"
                :key="derivative.id"
                :name="derivative.id"
                class="column no-wrap flex-center"
              >
                <div class="card card_border card-derivative">
                  <div class="tw-flex tw-gap-3.5 tw-items-center">
                    <div class="circle tw-flex-shrink-0">
                      <img src="./img/index-icon_1.png" alt="" />
                    </div>
                    <h4 class=" tw-text-sm">{{ derivative.name }}</h4>
                  </div>
                  <p class="tw-mt-2.5 tokens tw-overflow-auto">
                    <template
                      v-for="currency in derivative.currency_shares"
                      :key="derivative.id + '_' + currency.id"
                    >
                      {{ currency.code }} &nbsp;
                    </template>
                  </p>
                  <div
                    class="tw-mt-5 tw-flex tw-justify-between"
                    v-if="getChart(derivative.id)"
                  >
                    <div>
                      <p
                        class="tw-text-white"
                        v-html="t('indexD.card.profitability.1', { numb: '1' })"
                      ></p>
                      <div class="tw-flex tw-gap-x-2.5">
                        <MarkIcon
                          :mark="getChart(derivative.id)?.profitability"
                        />
                        <h4>{{ getChart(derivative.id)?.profitability }}%</h4>
                      </div>
                    </div>
                    <div>
                      <MiniAreaChart :values="getChartData(derivative.id)" />

                      <button
                        @click="stage2"
                        class="tw-mt-2 tw-flex tw-gap-1.5 tw-items-center"
                      >
                        <span class="buy">{{ t("other.button.buy") }}</span>
                        <img src="./icons/button-arrow.svg" alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              </q-carousel-slide>
            </q-carousel>
          </div>
        </div>
      </div>
    </section>
</template>
<script >
import { ref, computed } from "vue";
import { useStore } from "vuex";
import useChart from "src/composition/useChart.js";
import { useI18n } from "vue-i18n";
import MiniAreaChart from "src/components/V3/MiniAreaChart.vue";
import MarkIcon from "src/components/V3/MarkIcon.vue";
const i18n = {
  messages: {
    "ru-RU": {
      lk: "Личный кабинет",
      dropdown: {
        buttons: {
          register: "Регистрация",
          login: "Авторизация",
          profile: "Профиль",
        },
      },
      header: {
        title: "Алга",
        subtitle: "Платформа <br> Индексных <br> Деривативов",
        nav: ["О нас", "Поддержка"],
      },
      about: {
        title: "О нас",
        subtitle:
          "ALGA — это совершенно новая платформа CeFi для реализации различных инвестиционных стратегий на основе индексных деривативов.",
        text: `Базовая передовая технология наряду с огромным
               опыт основной команды в торговле делает ALGA одношаговым
               поиск инвестиций в проверенные и эффективные стратегии
               облегчение входа в криптовалюту для всех. <br /><br />
               Эти стратегии, основанные на индексных производных, состоящих из многих
               активы, подобранные с использованием наиболее эффективного соотношения, позволяют получать солидные
               рентабельность вложенного капитала при минимизации рисков.
               <br /><br />
               Платформа разработана людьми для людей с только
               одна цель - обеспечить комфортное отслеживание активов и
               прозрачные сделки, чтобы обеспечить управление активами
               опыт на совершенно новый уровень.`,
        button: "О нас",
      },
      indexD: {
        title: "Деривативы",
        card: {
          profitability: {
            1: "Прибыльность <br/> за {numb} месяцa",
            2: "Прибыльность <br/> за {numb} месяцa",
            3: "Прибыльность <br/> за {numb} месяцa",
            4: "Прибыльность <br/> за {numb} месяцa",
            5: "Прибыльность <br/> за {numb} месяцa",
            6: "Прибыльность <br/> за {numb} месяцa",
            7: "Прибыльность <br/> за {numb} месяцa",
            8: "Прибыльность <br/> за {numb} месяцa",
            9: "Прибыльность <br/> за {numb} месяцa",
            10: "Прибыльность <br/> за {numb} месяцa",
          },
        },
      },
      backers: {
        title: "Спонсоры & Партнеры",
        text: "Партнерство с ALGA даст вам доступ к новой аудитории, а также откроет новые перспективы для развития вашей компании в активно развивающемся сегменте крипторынка.",
      },
      faq: {
        title: "FAQ",
        items: {
          1: {
            title: "Что такое Alga Ecosystem?",
            text: `
              Alga Ecosystem — это совершенно новый инструмент для удобного входа в мир криптовалюты и разумных инвестиций. На начальном этапе экосистема будет состоять из трех основных продуктов:
              <br>
              - Платформа индексных деривативов Alga (AID)
              <br>
              - Образовательная платформа Alga (AE)
              <br>
              - Социальная сеть Alga Indexview (AI)
            `,
          },
          2: {
            title: "Что такое Платформа индексных деривативов Alga?",
            text: `
              Это CeFi платформа, которая позволяет вам инвестировать в криптовалюты через индексные деривативы. Команда объединила передовые технологии и личный торговый опыт, чтобы создать среду безопасного инвестирования средств пользователей и получения сбалансированной доходности на аллокированный капитал с помощью индексов. AID дает возможность отдельным лицам или учреждениям создавать, управлять и вкладывать в инновационные инвестиционные инструменты
            `,
          },
          3: {
            title: "Что такое индекс?",
            text: `
              Индекс — это дериватив, который представляет собой полностью обеспеченный портфель активов, который может позволить людям или организациям управлять своим капиталом и капиталом других в безопасной среде
            `,
          },
          4: {
            title: "Какие виды индексов есть на платформе?",
            text: `
              В настоящий момент на платформе AID представлено 5 индексов:
              <br>
              - BTC MAIN ALGA INDEX;
              <br>
              - ETH MAIN ALGA INDEX;
              <br>
              - BTC COMBO ALGA INDEX;
              <br>
              - ETH COMBO ALGA INDEX;
              <br>
              - STABLE ALGA INDEX.
              <br>
              С развитием платформы будут добавляться новые индексы
            `,
          },
          5: {
            title: "Что такое Alga Token и для чего он нужен?",
            text: `
              Токен Alga является нативным токеном экосистемы. Владельцы Alga получат ряд преимуществ, таких как возможность стейкинга и участия в DAO, создания собственных индексов. Кроме того, за токены Alga можно будет получить скидку на образовательные программы и различные функции кастомизации в Alga Indexview
            `,
          },
          6: {
            title: "Законна ли деятельность вашей платформы?",
            text: `
            Да, интеллектуальная собственность Alga Ecosystem принадлежит юридическому лицу, официально оформленному в г. Дубай (ОАЭ), которое имеет лицензию на работу с цифровыми активами
            `,
          },
        },
      },
      "card-big": {
        signin: {
          titleReg: "Регистрация",
          titleSign: "Личный кабинет",
          text: "По всем вопросам пишите нам, оператор свяжется с вами в ближайшее время",
          createButtonReg: "Регистрация",
          createButtonSign: "Личный кабинет",
        },
        anyquestion: {
          title: "Остались вопросы?",
          text: "По всем вопросам пишите нам, оператор свяжется с вами в ближайшее время",
          contacrusButton: "Напишите нам",
          joinButton: "Вступайте в сообщество",
        },
      },
      other: {
        button: {
          buy: "Купить",
        },
      },
    },
    "en-US": {
      lk: "Personal",
      dropdown: {
        buttons: {
          register: "Registration",
          login: "Authorization",
          profile: "profile",
        },
      },
      header: {
        title: "Alga",
        subtitle: "Index <br> Derivatives <br> Platform",
        nav: ["About us", "Support"],
      },
      about: {
        title: "About",
        subttitle:
          "ALGA is a brand new CeFi platform for the implementation of different investment strategies based on index derivatives.",
        text: `The underlying cutting edge technology along with a huge
              background of the core team in trading makes ALGA the one-step
              shop for investments into proven and efficient strategies
              facilitating entry to the crypto for everyone. <br /><br />
              These strategies based on index derivatives consisting of many
              assets selected using most efficient ratio allow to receive solid
              return on the allocated capital while minimizing risks.
              <br /><br />
              The platform is designed by the people for the people with only
              one goal - to ensure comfortable tracking of assets and
              transparent transactions in order to bring asset management
              experience to a completely new level.`,
        button: "About us",
      },
      indexD: {
        title: "Index Derivatives",
        card: {
          profitability: {
            1: "Profitability <br/> for {numb} months",
            2: "Profitability <br/> for {numb} months",
            3: "Profitability <br/> for {numb} months",
            4: "Profitability <br/> for {numb} months",
            5: "Profitability <br/> for {numb} months",
            6: "Profitability <br/> for {numb} months",
            7: "Profitability <br/> for {numb} months",
            8: "Profitability <br/> for {numb} months",
            9: "Profitability <br/> for {numb} months",
            10: "Profitability <br/> for {numb} months",
          },
        },
      },
      backers: {
        title: "Backers & Partners",
        text: "Partnership with ALGA will give you access to a new audience, as well as open up new prospects for the development of your company in the actively developing segment of the crypto market",
      },
      "card-big": {
        signin: {
          titleReg: "Registration",
          titleSign: "Personal",
          text: "If you have any questions, please contact us at , and an operator will get back with you as soon as possible",
          createButtonReg: "Registration",
          createButtonSign: "Personal",
        },
        anyquestion: {
          title: "Any questions?",
          text: "If you have any questions, please contact us at , and an operator will get back with you as soon as possible",
          contacrusButton: "Contast us",
          joinButton: "Join our community",
        },
      },
      other: {
        button: {
          buy: "Buy",
        },
      },
    },
    de: {
      dropdown: {
        buttons: {
          register: "Registrieren",
          login: "Anmelden",
          profile: "Profil",
        },
      },
      header: {
        title: "Alga",
        subtitle: "Index- <br> Derivate- <br> Plattform",
        nav: ["Etwa so", "Unterstützen"],
      },
      about: {
        title: "Über uns",
        subtitle:
          "ALGA ist eine brandneue CeFi-Plattform zur Umsetzung verschiedener Anlagestrategien auf Basis von Indexderivaten.",
        text: `Die zugrunde liegende Spitzentechnologie zusammen mit einem riesigen
               Hintergrund des Kernteams im Trading macht ALGA zum One-Step
               Kaufen Sie nach Investitionen in bewährte und effiziente Strategien
               Erleichterung des Zugangs zur Krypto für alle. <br /><br />
               Diese Strategien basieren auf Indexderivaten, die aus vielen bestehen
               Vermögenswerte, die nach dem effizientesten Verhältnis ausgewählt wurden, ermöglichen es, solide zu erhalten
               Rendite auf das eingesetzte Kapital bei gleichzeitiger Risikominimierung.
               <br /><br />
               Die Plattform ist nur von Menschen für Menschen konzipiert
               ein Ziel - eine komfortable Verfolgung von Vermögenswerten zu gewährleisten und
               transparente Transaktionen, um Vermögensverwaltung zu bringen
               auf einem völlig neuen Level erleben.`,
        button: "Etwa so",
      },
      indexD: {
        title: "Derivates",
        card: {
          profitability: {
            1: "Rentabilität <br/> für {numb} Monate",
            2: "Rentabilität <br/> für {numb} Monate",
            3: "Rentabilität <br/> für {numb} Monate",
            4: "Rentabilität <br/> für {numb} Monate",
            5: "Rentabilität <br/> für {numb} Monate",
            6: "Rentabilität <br/> für {numb} Monate",
            7: "Rentabilität <br/> für {numb} Monate",
            8: "Rentabilität <br/> für {numb} Monate",
            9: "Rentabilität <br/> für {numb} Monate",
            10: "Rentabilität <br/> für {numb} Monate",
          },
        },
      },
      roadmap: {
        title: "Straßenkarte",
        stages: {
          1: {
            title: "Phase 1",
            subtitle: "Januar - März 2022",
            items: [
              "Entwicklung des Konzepts und des Markenbuchs des Projekts",
              "Entwicklung der Plattformarchitektur",
              "Erstellung der Webseite und Inhalte (Design, Layout, mobile Anpassung, Entwicklung des Kerns des Benutzerkontos)",
            ],
          },
          2: {
            title: "Phase 2",
            subtitle: "März - September 2022",
            items: [
              "Entwicklung der Plattform MVP",
              "Entwicklung des Marketingplans",
              "Erstellung und Inhalt der sozialen Netzwerke (Facebook, Instagram, Telegram, Reddit)",
              "Start der ersten Marketingkampagne",
            ],
          },
          3: {
            title: "Phase 3",
            subtitle: "September - November 2022",
            items: [
              "Gründung des Unternehmens und Beschaffung der rechtlichen Dokumente",
              "Beginn der Mittelbeschaffung",
              "Einrichtung von Büros: Dubai, Moskau, Ufa, Kasan",
              "MVP-Tests und QA",
              "Abschluss des Sicherheitsaudits der Plattform",
            ],
          },
          4: {
            title: "Phase 4",
            subtitle: "November 2022 - Januar 2023",
            items: [
              "Start der globalen Marketingkampagne",
              "Durchführung des IEO an der CEX",
              "CEX-Notierung",
              "Einführung der Plattform MVP",
            ],
          },
          5: {
            title: "Phase 5",
            subtitle: "Dezember 2022 - November 2023",
            items: [
              "Aktualisierung der Plattformfunktionalität",
              "Start des Alga-Advisors-Indexprogramms",
              "Entwicklung einer mobilen App",
            ],
          },
          6: {
            title: "Phase 6",
            subtitle: "November 2022 - Februar 2023",
            items: [
              "Notierung an anderen zentralisierten Börsen",
              "Entwicklung einer eigenen Indexbörse",
              "Erhöhung der Anzahl der Indizes auf 15",
              "Partnerschaftsvereinbarungen mit soliden Hedge-Fonds",
            ],
          },
        },
      },
      team: {
        title: "Das Team",
        peoples: {
          1: {
            name: "Ural",
            lastName: "Karazbaev",
            bio: "Gründer von ALGA Ecosystem, Unternehmer, Gründer des Investmentclubs Museum of Finance, Mitbegründer von TC Gorod, Forestprom, D.S.R. Ufa.",
          },
          2: {
            name: "Danat",
            lastName: "Latypov",
            bio: "Entwickler, PhD in Wirtschaftswissenschaften, Mathematiker. Leiter des Entwicklungsteams. Spezialisiert auf die Entwicklung von Hochlastsystemen und kommerziellen Blockchain-Projekten seit 2017",
          },
          3: {
            name: "Rast",
            lastName: "Pentagon",
            bio: "Gründer und Handelsdirektor von Fakel Cryptocurrency Fund in der GUS, Leiter des Bildungsprogramms, qualifizierter Händler mit mehr als 8 Jahren Erfahrung.",
          },
          4: {
            name: "Ivan",
            lastName: "Beliy",
            bio: "Gründer und CEO von Fakel Cryptocurrency Fund in der GUS, Leiter des Bildungsprogramms, qualifizierter Händler und Vermarkter mit mehr als 10 Jahren Erfahrung.",
          },
          5: {
            name: "Elena",
            lastName: "Shakhanova",
            bio: "Geschäftsfrau, Gründerin und CEO der digitalen Branding-Agentur YES IDEA, Art Direktorin von russischen und internationalen Projekten",
          },
        },
      },
      backers: {
        title: "Förderer & Partner",
        text: "Die Partnerschaft mit ALGA verschafft Ihnen Zugang zu einem neuen Publikum und eröffnet Ihnen neue Perspektiven für die Entwicklung Ihres Unternehmens im sich aktiv entwickelnden Segment des Kryptomarktes",
      },
      faq: {
        title: "Häufig gestellte Fragen",
        items: {
          1: {
            title: "Was ist Alga Ecosystem?",
            text: `
              Alga Ecosystem ist ein brandneues Tool für den einfachen Einstieg in die Welt der Kryptowährungen und smarten Investitionen. Das Ökosystem wird zunächst aus drei Hauptprodukten bestehen:
              <br>
              - Indexderivate-Plattform Alga (AID)
              <br>
              - Bildungsplattform Alga (AE)
              <br>
              - Das soziale Netzwerk Alga Indexview (AI)
            `,
          },
          2: {
            title: "Was ist die Indexderivate-Plattform Alga?",
            text: `
              Es handelt sich um eine CeFi-Plattform, die es Ihnen ermöglicht, über Index-Derivate in Kryptowährungen zu investieren. Das Team hat modernste Technologie und persönliches Handels-Know-how kombiniert, um ein Umfeld zu schaffen, in dem die Gelder der Nutzer sicher angelegt werden können und eine ausgewogene Rendite auf das zugewiesene Kapital durch Indizes erzielt wird. AID ermöglicht Einzelpersonen oder Institutionen die Schaffung, Verwaltung und Investition in innovative Anlageinstrumente
            `,
          },
          3: {
            title: "Was ist ein Index?",
            text: `
              Ein Index ist ein Derivat, bei dem es sich um ein vollständig besichertes Portfolio von Vermögenswerten handelt, das es Personen oder Organisationen ermöglichen kann, ihr eigenes Kapital und das anderer in einem sicheren Umfeld zu verwalten.
            `,
          },
          4: {
            title:
              "Welche Arten von Indexes sind auf der Plattform verfügbar??",
            text: `
              Derzeit gibt es 5 Indizes auf der AID-Plattform:
              <br>
              - BTC MAIN ALGA INDEX;
              <br>
              - ETH MAIN ALGA INDEX;
              <br>
              - BTC COMBO ALGA INDEX;
              <br>
              - ETH COMBO ALGA INDEX;
              <br>
              - STABLE ALGA INDEX.
              <br>
              Neue Indizes werden mit der Entwicklung der Plattform hinzugefügt
            `,
          },
          5: {
            title: "Was ist ein Alga-Token und wozu dient er?",
            text: `
              Der Alga-Token ist ein nativer Ökosystem-Token. Alga-Besitzer erhalten eine Reihe von Vorteilen, wie z.B. die Möglichkeit, DAOs zu stapeln und sich an ihnen zu beteiligen sowie eigene Indizes zu erstellen. Darüber hinaus bieten Alga-Tokens einen Rabatt auf Bildungsprogramme und verschiedene Anpassungsfunktionen in Alga Indexview
            `,
          },
          6: {
            title: "Ist die Tätigkeit Ihrer Plattform legal?",
            text: `
            Ja, das geistige Eigentum von Alga Ecosystem ist Eigentum einer in Dubai, VAE, eingetragenen juristischen Person, die eine Lizenz für den Handel mit digitalen Vermögenswerten besitzt.
            `,
          },
        },
      },
      "card-big": {
        signin: {
          titleReg: "Registrieren",
          titleSign: "Mein Konto",
          text: "Senden Sie uns eine Nachricht, wenn Sie Fragen haben. Ein Mitarbeiter wird sich so schnell wie möglich mit Ihnen in Verbindung setzen.",
          createButtonReg: "Registrieren",
          createButtonSign: "Mein Konto",
        },
        anyquestion: {
          title: "Noch Fragen?",
          text: "Senden Sie uns eine Nachricht, wenn Sie Fragen haben. Ein Mitarbeiter wird sich so schnell wie möglich mit Ihnen in Verbindung setzen.",
          contacrusButton: "Kontaktieren Sie uns",
          joinButton: "Werden Sie Mitglied der Community",
        },
      },
      other: {
        button: {
          buy: "Kaufen",
        },
      },
    },
    "zh-CN": {
      dropdown: {
        buttons: {
          register: "登记",
          login: "登录",
          profile: "个人资料",
        },
      },
      header: {
        title: "Alga",
        subtitle: "指数 <br> 衍生品 <br> 平台",
        nav: ["大約作為", "支持"],
      },
      about: {
        title: "关于我们",
        subtitle:
          "ALGA是一個全新的CeFi平台，用於實施基於指數衍生品的不同投資策略。",
        text: `底層的尖端技術以及巨大的
               交易核心團隊背景，讓ALGA一步到位
               購買經過驗證且有效的策略的投資
               促進每個人進入加密貨幣。 <br /><br />
               這些基於指數衍生品的策略由許多
               使用最有效比率選擇的資產允許接收固體
               分配資本的回報，同時將風險降至最低。
               <br /><br />
               該平台是由人們為只有
               一個目標 - 確保輕鬆跟踪資產和
               透明交易以帶來資產管理
               體驗到一個全新的水平。`,
        button: "大約作為",
      },
      indexD: {
        title: "指数衍生品",
        card: {
          profitability: {
            1: "{numb} 个月 <br/> 盈利",
            2: "{numb} 个月 <br/> 盈利",
            3: "{numb} 个月 <br/> 盈利",
            4: "{numb} 个月 <br/> 盈利",
            5: "{numb} 个月 <br/> 盈利",
            6: "{numb} 个月 <br/> 盈利",
            7: "{numb} 个月 <br/> 盈利",
            8: "{numb} 个月 <br/> 盈利",
            9: "{numb} 个月 <br/> 盈利",
            10: "{numb} 个月 <br/> 盈利",
          },
        },
      },
      roadmap: {
        title: "路线图",
        stages: {
          1: {
            title: "第一阶段",
            subtitle: "2022年1月-3月",
            items: [
              "项目的概念和品牌书的发展",
              "平台架构开发",
              "网站创建和内容（设计，布局，移动适应，用户帐户核心的开发）",
            ],
          },
          2: {
            title: "第二阶段",
            subtitle: "2022年3月-5月",
            items: [
              "平台MVP的开发",
              "制定营销计划 ",
              "社交活动的创建和内容（Facebook、Instagram、Telegram、Reddit）",
              "开始初步的市场推广活动 ",
            ],
          },
          3: {
            title: "第三阶段",
            subtitle: "2022年5月-7月",
            items: [
              "公司设立及取得法律文件 ",
              "资金筹措开始",
              "办事处设立：迪拜、莫斯科、乌法、喀山",
              "MVP测试和QA",
              "平台安全审计完成",
            ],
          },
          4: {
            title: "第四阶段",
            subtitle: "2022年7月-9月",
            items: [
              "全球营销活动开始",
              "IEO在CEX上的传导",
              "CEX上市",
              "平台MVP启动",
            ],
          },
          5: {
            title: "第五阶段",
            subtitle: "2022年9月-11月",
            items: ["平台功能更新", "推出Alga顾问指数计划", "移动应用开发"],
          },
          6: {
            title: "第六阶段",
            subtitle: "2022年11月-2023年2月",
            items: [
              "在其他集中交易所上市",
              "发展自己的指数交易所",
              "索引数目增加至15个",
              "П与可靠对冲基金的合作协议",
            ],
          },
        },
      },
      team: {
        title: "专责小组 ",
        peoples: {
          1: {
            name: "Ural",
            lastName: "Karazbaev",
            bio: "ALGA生态系统创始人，企业家，金融投资俱乐部博物馆创始人，TC Gorod，Forestprom，D.S.R.Ufa的联合创始人",
          },
          2: {
            name: "Danat",
            lastName: "Latypov",
            bio: "开发人员，经济学博士，数学家。开发团队负责人。从2017年开始专门从事高负载系统和商业区块链项目的开发",
          },
          3: {
            name: "Rast",
            lastName: "Pentagon",
            bio: "ALGA生态系统的创始人和独联体Fakel加密货币基金的交易总监，Take Profit咨询公司的创始人，国际演讲者，拥有超过8年经验的合格交易者",
          },
          4: {
            name: "Ivan",
            lastName: "Beliy",
            bio: "独联体Fakel加密货币基金的创始人兼首席执行官，教育项目负责人，拥有超过10年经验的合格交易者和营销人员",
          },
          5: {
            name: "Elena",
            lastName: "Shakhanova",
            bio: "企业家，YES IDEA数字品牌代理公司创始人兼首席执行官，俄罗斯和国际项目艺术总监",
          },
        },
      },
      backers: {
        title: "支持者和合作伙伴",
        text: "與 ALGA 合作將使您接觸到新的受眾，並為您的公司在加密市場的積極發展領域開闢新的發展前景",
      },
      faq: {
        title: "FAQ",
        items: {
          1: {
            title: "什么是Alga生态系统?",
            text: `
              AAlga生态系统是进入加密世界和智能投资的全新工具。 Н在早期阶段，生态系统包含三种主要产品:
              <br>
              - Alga指数衍生品平台(AID)
              <br>
              - Alga教育平台(AE)
              <br>
              - Alga Indexview社交网络(AI)
            `,
          },
          2: {
            title: "什么是Alga指数衍生品平台?",
            text: `
              这是一个CeFi平台，允许您通过指数衍生品投资加密货币。 创始人结合先进的技术和个人交易经验，在指数的帮助下，为用户资金的安全投资和分配资本的平衡回报创造了一个环境。 AID使个人或机构能够创造、管理和投资创新的链上投资工具
            `,
          },
          3: {
            title: "什么是索引？",
            text: `
              指数是一种衍生品，代表了一个完全抵押的资产组合，可以使人们或实体在安全的环境中管理他们的财富和他人的财富
            `,
          },
          4: {
            title: "在AIDT中表示什么样的索引？",
            text: `
              目前我们有5个索引:
              <br>
              - BTC MAIN ALGA INDEX;
              <br>
              - ETH MAIN ALGA INDEX;
              <br>
              - BTC COMBO ALGA INDEX;
              <br>
              - ETH COMBO ALGA INDEX;
              <br>
              - STABLE ALGA INDEX.
              <br>
              随着平台的发展，将会有更多
            `,
          },
          5: {
            title: "什么是Alga令牌，它用于什么？",
            text: `
              Alga令牌是Alga生态系统的原生令牌。 Alga的持有者将有几个好处，例如：staking和DAO参与的可能性，创建自己的索引。 КAlga Indexview的教育计划和不同定制功能的折扣
            `,
          },
          6: {
            title: "Alga生态系统的运作是否合法？",
            text: `
            是的，Alga Ecosystem在迪拜（阿联酋）的注册法律实体下工作。 实体被授权使用数字资产
            `,
          },
        },
      },
      "card-big": {
        signin: {
          titleReg: "登记注册",
          titleSign: "个人专区",
          text: "如有任何问题，请写信给我们，接线员会尽快与您联系",
          createButtonReg: "登记注册",
          createButtonSign: "个人专区",
        },
        anyquestion: {
          title: "有什么问题吗",
          text: "如有任何问题，请写信给我们，接线员会尽快与您联系",
          contacrusButton: "联系我们",
          joinButton: "加入社区",
        },
      },
      other: {
        button: {
          buy: "购买",
        },
      },
    },
  },
};
export default {
  components: {
    MiniAreaChart,
    MarkIcon
  },
  props: {
    charts: Array
  },
  setup(props){
    const $i18n = useI18n();
    const { t } = useI18n(i18n);
    const store = useStore();
    const derivatives = computed(() => {
      const arr = store.getters["landing/derivatives"]
      if(typeDirevative.value === 'ALGA') return arr.slice(0,5)
      if(typeDirevative.value === 'Market')return arr.slice(5)
      
    });
    
    const typeDirevative = ref('ALGA')
    const typesDirevative = ['ALGA', 'Market']
    const getChart = (id) => {
    if (props.charts) {
      return props.charts.find((chart) => chart["index_derivative_id"] === id);
    }
  };
    const getChartData = (id) => {
        return getChart(id)?.chart.map((item) => [
          +item.timestamp * 1000,
          +item.value,
        ]);
      };
    const selectTypeDirevatives = (type)=>{
      typeDirevative.value= type
    }
      return {
        derivatives,
        getChart,
        getChartData,
        t,
        typeDirevative,
        typesDirevative,
        selectTypeDirevatives,
        slideIndex: ref(1),
      }
  }
}
</script>
<style src="./style.scss" lang="scss" scoped></style>