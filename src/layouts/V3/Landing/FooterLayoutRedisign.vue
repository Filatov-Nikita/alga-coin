<template>
  <footer class="tw-pt-10 tw-pb-8 tw-mt-15">
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
            class="card   tw-blur-lg tw-bg-dark tw-absolute tw-w-full tw-z-50 tw-flex tw-justify-center tw-gap-8"
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
      <div class="footer__top">
        <!-- <div class="tw-flex tw-gap-2.5">
          <a
            href="https://instagram.com/algaecosystem?igshid=NmZiMzY2Mjc="
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
        </div> -->
        <div
          class="xl:tw-order-2 tw-grid tw-grid-cols-2 xl:tw-flex tw-gap-8 tw-mb-4 xl:tw-mb-0"
        >
          <div>
            <div class="tw-mb-5">{{ t("learnMore.title") }}</div>
            <div class="links tw-flex tw-flex-col tw-gap-3.5">
              <a href="#">{{ t("learnMore.list[0]") }}</a>
              <a href="#">{{ t("learnMore.list[1]") }}</a>
              <a href="#">{{ t("learnMore.list[2]") }}</a>
            </div>
          </div>
          <div>
            <div class="tw-mb-5">{{ t("platform.title") }}</div>
            <div class="links tw-flex tw-flex-col tw-gap-3.5">
              <span @click="$router.push({ name: 'profile' })">{{
                t("platform.list[0]")
              }}</span>
              <a href="#">{{ t("platform.list[1]") }}</a>
              <span @click="$router.push({ name: 'portfolio' })">{{
                t("platform.list[2]")
              }}</span>
              <span
                @click="$router.push({ name: 'index-directive' })"
                v-html="t('platform.list[3]')"
              ></span>
            </div>
          </div>
          <div>
            <div class="tw-mb-5">{{ t("company.title") }}</div>
            <div class="links tw-flex tw-flex-col tw-gap-3.5">
              <span @click="$router.push({ name: 'home' })">{{
                t("company.list[0]")
              }}</span>
              <span @click="$router.push({ name: 'about' })">{{
                t("company.list[1]")
              }}</span>
              
            </div>
          </div>
          <div>
            <div class="tw-mb-5">{{ t("ourCommunities.title") }}</div>
            <div class="links tw-flex tw-flex-col tw-gap-3.5">
              <a href="#"> 🇺🇸 English </a>
              <a href="#"> 🇷🇺 Russian </a>
            </div>
          </div>
        </div>

        <div class="xl:tw-order-1 xl:tw-mr-20">
          <img
            :src="require('assets/images/logo-v3.svg')"
            alt=""
            class="tw-mb-4"
          />
          <div class="tw-flex tw-gap-2 tw-mb-4">
            <a
              href="https://instagram.com/algaecosystem?igshid=NmZiMzY2Mjc="
              target="_blank"
            >
              <svg
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.454125"
                  y="0.454125"
                  width="27.9251"
                  height="27.9251"
                  rx="13.9625"
                  stroke="#575656"
                  stroke-width="0.90825"
                />
                <g style="mix-blend-mode: luminosity">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.5641 7.5381C12.3021 7.50413 12.5373 7.49658 14.4171 7.49658C16.2968 7.49658 16.5321 7.50476 17.2694 7.5381C18.0067 7.57144 18.5099 7.68908 18.9503 7.85957C19.4114 8.03383 19.8298 8.30622 20.1758 8.65851C20.5281 9.00388 20.7998 9.4216 20.9735 9.88335C21.1446 10.3237 21.2616 10.827 21.2956 11.563C21.3295 12.3022 21.3371 12.5375 21.3371 14.4166C21.3371 16.2963 21.3289 16.5316 21.2956 17.2695C21.2622 18.0055 21.1446 18.5088 20.9735 18.9492C20.7998 19.411 20.5276 19.8294 20.1758 20.1753C19.8298 20.5276 19.4114 20.7993 18.9503 20.973C18.5099 21.1441 18.0067 21.2611 17.2706 21.2951C16.5321 21.329 16.2968 21.3366 14.4171 21.3366C12.5373 21.3366 12.3021 21.3284 11.5641 21.2951C10.8281 21.2617 10.3248 21.1441 9.88447 20.973C9.42267 20.7993 9.00426 20.5271 8.65837 20.1753C8.30632 19.8297 8.03388 19.4115 7.86006 18.9498C7.68957 18.5094 7.57256 18.0062 7.53859 17.2701C7.50462 16.531 7.49707 16.2957 7.49707 14.4166C7.49707 12.5369 7.50525 12.3016 7.53859 11.5643C7.57193 10.827 7.68957 10.3237 7.86006 9.88335C8.03414 9.42165 8.30678 9.00345 8.659 8.65788C9.0044 8.30591 9.42239 8.03348 9.88384 7.85957C10.3242 7.68908 10.8281 7.57207 11.5641 7.5381ZM17.2134 8.7837C16.4836 8.75036 16.2647 8.74344 14.4171 8.74344C12.5694 8.74344 12.3505 8.75036 11.6208 8.7837C10.9457 8.81453 10.5796 8.92713 10.3355 9.02213C10.0128 9.14795 9.78193 9.29704 9.53973 9.53924C9.31014 9.7626 9.13345 10.0345 9.02262 10.335C8.92762 10.5791 8.81502 10.9453 8.78419 11.6203C8.75085 12.35 8.74393 12.5689 8.74393 14.4166C8.74393 16.2642 8.75085 16.4831 8.78419 17.2129C8.81502 17.8879 8.92762 18.254 9.02262 18.4981C9.13334 18.7982 9.31011 19.0706 9.53973 19.2939C9.76306 19.5235 10.0355 19.7003 10.3355 19.811C10.5796 19.906 10.9457 20.0186 11.6208 20.0495C12.3505 20.0828 12.5688 20.0897 14.4171 20.0897C16.2653 20.0897 16.4836 20.0828 17.2134 20.0495C17.8884 20.0186 18.2545 19.906 18.4986 19.811C18.8213 19.6852 19.0522 19.5361 19.2944 19.2939C19.524 19.0706 19.7008 18.7982 19.8115 18.4981C19.9065 18.254 20.0191 17.8879 20.05 17.2129C20.0833 16.4831 20.0902 16.2642 20.0902 14.4166C20.0902 12.5689 20.0833 12.35 20.05 11.6203C20.0191 10.9453 19.9065 10.5791 19.8115 10.335C19.6857 10.0123 19.5366 9.78144 19.2944 9.53924C19.071 9.30967 18.7991 9.13298 18.4986 9.02213C18.2545 8.92713 17.8884 8.81453 17.2134 8.7837ZM13.5332 16.5498C14.0268 16.7553 14.5765 16.783 15.0883 16.6283C15.6001 16.4735 16.0423 16.1459 16.3393 15.7013C16.6364 15.2568 16.7699 14.7229 16.7171 14.1908C16.6642 13.6587 16.4283 13.1615 16.0496 12.7841C15.8081 12.5428 15.5162 12.3581 15.1948 12.2432C14.8734 12.1283 14.5306 12.086 14.1909 12.1195C13.8512 12.153 13.5232 12.2614 13.2305 12.4369C12.9377 12.6124 12.6875 12.8506 12.4979 13.1344C12.3083 13.4182 12.1839 13.7405 12.1338 14.0781C12.0837 14.4157 12.109 14.7602 12.208 15.0869C12.3071 15.4135 12.4773 15.7142 12.7064 15.9671C12.9355 16.2201 13.2179 16.4191 13.5332 16.5498ZM11.902 11.9015C12.2323 11.5712 12.6244 11.3092 13.0559 11.1304C13.4874 10.9517 13.95 10.8597 14.4171 10.8597C14.8842 10.8597 15.3467 10.9517 15.7782 11.1304C16.2098 11.3092 16.6019 11.5712 16.9322 11.9015C17.2625 12.2318 17.5245 12.6239 17.7032 13.0554C17.882 13.487 17.974 13.9495 17.974 14.4166C17.974 14.8837 17.882 15.3462 17.7032 15.7777C17.5245 16.2093 17.2625 16.6014 16.9322 16.9317C16.2651 17.5987 15.3604 17.9735 14.4171 17.9735C13.4737 17.9735 12.569 17.5987 11.902 16.9317C11.2349 16.2646 10.8602 15.3599 10.8602 14.4166C10.8602 13.4732 11.2349 12.5685 11.902 11.9015ZM18.7628 11.3894C18.8447 11.3122 18.9102 11.2193 18.9555 11.1164C19.0008 11.0134 19.025 10.9023 19.0267 10.7898C19.0283 10.6773 19.0074 10.5656 18.9651 10.4614C18.9228 10.3571 18.86 10.2624 18.7804 10.1828C18.7009 10.1033 18.6061 10.0405 18.5019 9.99817C18.3976 9.95587 18.2859 9.93492 18.1734 9.93656C18.0609 9.9382 17.9499 9.9624 17.8469 10.0077C17.7439 10.053 17.6511 10.1186 17.5738 10.2004C17.4237 10.3596 17.3415 10.571 17.3447 10.7898C17.3479 11.0086 17.4362 11.2176 17.5909 11.3723C17.7457 11.527 17.9546 11.6154 18.1734 11.6186C18.3922 11.6218 18.6037 11.5396 18.7628 11.3894Z"
                    fill="url(#paint0_linear_1_655)"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_1_655"
                    x1="18.8207"
                    y1="19.7507"
                    x2="8.04052"
                    y2="14.8012"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#575656" />
                    <stop offset="1" stop-color="#575656" />
                  </linearGradient>
                </defs>
              </svg>
            </a>
            <a href="https://medium.com/@algaecosystem" target="_blank">
              <svg
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.493187"
                  y="0.454125"
                  width="27.9251"
                  height="27.9251"
                  rx="13.9625"
                  stroke="#575656"
                  stroke-width="0.90825"
                />
                <g style="mix-blend-mode: luminosity">
                  <path
                    d="M9.61694 11.3443C9.62472 11.2654 9.61431 11.1856 9.58655 11.1115C9.55879 11.0374 9.51446 10.9709 9.45709 10.9174L8.27216 9.44673V9.22681H11.95L14.7931 15.6527L17.2924 9.22681H20.799V9.44673L19.7859 10.4465C19.743 10.4804 19.7099 10.5255 19.6901 10.5772C19.6703 10.6288 19.6647 10.685 19.6737 10.7397V18.0926C19.6647 18.1473 19.6703 18.2035 19.6901 18.2551C19.7099 18.3068 19.743 18.352 19.7859 18.3859L20.7755 19.3862V19.6068H15.7998V19.3869L16.8249 18.3619C16.9257 18.2581 16.9257 18.2276 16.9257 18.0693V12.1254L14.0763 19.5822H13.6919L10.3743 12.1254V17.1234C10.3471 17.3329 10.4149 17.5451 10.5583 17.6969L11.891 19.3629V19.5822H8.1123V19.3629L9.4444 17.6969C9.51489 17.6217 9.5672 17.5306 9.59715 17.4311C9.62711 17.3315 9.63389 17.2261 9.61694 17.1234V11.3443Z"
                    fill="url(#paint0_linear_1_654)"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_1_654"
                    x1="18.4923"
                    y1="18.4174"
                    x2="9.3928"
                    y2="13.3112"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#575656" />
                    <stop offset="1" stop-color="#575656" />
                  </linearGradient>
                </defs>
              </svg>
            </a>

            <div
              @click="choiceLink('telegram')"
              class="tw-cursor-pointer"
              data-link
            >
              <svg
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.579125"
                  y="0.454125"
                  width="27.9251"
                  height="27.9251"
                  rx="13.9625"
                  stroke="#5C5C5C"
                  stroke-width="0.90825"
                />
                <g
                  style="mix-blend-mode: luminosity"
                  clip-path="url(#clip0_1_652)"
                >
                  <path
                    d="M17.9699 9.92628C19.3959 9.35774 19.8516 9.23294 20.1837 9.22686C20.288 9.2255 20.5244 9.25121 20.6772 9.37668C20.7782 9.46462 20.8426 9.58841 20.8579 9.72268C20.8838 9.88908 20.8911 10.0582 20.8798 10.2263C20.7715 11.3718 20.4593 13.4403 20.1319 15.4324C19.8801 16.9655 19.6198 18.4533 19.4365 19.4399C19.2564 20.4007 18.9051 20.7224 18.5643 20.7545C17.8244 20.8225 17.2618 20.2624 16.5445 19.7909C15.4246 19.0502 14.791 18.5903 13.701 17.8685C12.4955 17.0703 13.1942 16.6155 13.8856 15.9197L13.9766 15.8274C14.0218 15.7804 14.243 15.5738 14.5538 15.2829C15.5422 14.3586 17.4398 12.5846 17.487 12.379C17.4956 12.3445 17.5036 12.219 17.4292 12.1524C17.3887 12.1169 17.3389 12.1067 17.2891 12.1078C17.2452 12.1088 17.202 12.1182 17.1649 12.1267C17.0519 12.1524 15.2612 13.3426 11.7881 15.7006C11.4626 15.9245 11.1571 16.0753 10.8708 16.1528C10.7101 16.1961 10.5553 16.2164 10.4065 16.213C9.95153 16.2028 9.07544 15.9542 8.42518 15.7415L8.14222 15.6509C7.48333 15.4422 6.99978 15.289 7.04827 14.8997C7.05956 14.8087 7.11536 14.7167 7.21632 14.6241C7.37108 14.482 7.63012 14.3376 7.9961 14.1911C10.4663 13.1014 12.9438 12.0283 15.4286 10.972C16.5153 10.5175 17.3375 10.1782 17.9699 9.92628Z"
                    fill="url(#paint0_linear_1_652)"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_1_652"
                    x1="18.3686"
                    y1="19.4386"
                    x2="8.35542"
                    y2="13.9218"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#575656" />
                    <stop offset="1" stop-color="#575656" />
                  </linearGradient>
                  <clipPath id="clip0_1_652">
                    <rect
                      width="13.84"
                      height="13.84"
                      fill="white"
                      transform="translate(7.04492 8.07324)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <a href="twitter.com/AlgaEcoSystem" target="_blank">
              <svg
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.540062"
                  y="0.454125"
                  width="27.9251"
                  height="27.9251"
                  rx="13.9625"
                  stroke="#575656"
                  stroke-width="0.90825"
                />
                <g
                  style="mix-blend-mode: luminosity"
                  clip-path="url(#clip0_1_653)"
                >
                  <path
                    d="M21.4225 11.1031C20.9348 11.3228 20.4108 11.4711 19.86 11.5382C20.4283 11.1926 20.8535 10.6487 21.0563 10.008C20.5223 10.3303 19.9378 10.5571 19.3284 10.6787C18.9186 10.234 18.3757 9.93931 17.7841 9.84026C17.1926 9.74122 16.5854 9.84342 16.0568 10.131C15.5282 10.4186 15.1079 10.8754 14.861 11.4306C14.6142 11.9858 14.5546 12.6083 14.6915 13.2014C13.6095 13.1462 12.5511 12.8605 11.5848 12.3627C10.6185 11.8648 9.76604 11.1661 9.08269 10.3119C8.84904 10.7215 8.71469 11.1963 8.71469 11.7021C8.71443 12.1573 8.82476 12.6056 9.03589 13.0072C9.24703 13.4087 9.55243 13.7511 9.92502 14.004C9.49292 13.99 9.07035 13.8714 8.69249 13.6579V13.6935C8.69245 14.3321 8.90981 14.951 9.30769 15.4452C9.70558 15.9394 10.2595 16.2785 10.8754 16.405C10.4746 16.5152 10.0543 16.5315 9.64638 16.4525C9.82016 17.0019 10.1587 17.4824 10.6145 17.8266C11.0703 18.1708 11.6207 18.3616 12.1885 18.3721C11.2246 19.1411 10.0342 19.5582 8.80874 19.5563C8.59166 19.5564 8.37477 19.5435 8.15918 19.5178C9.40308 20.3305 10.8511 20.7618 12.3299 20.7601C17.3359 20.7601 20.0726 16.5469 20.0726 12.8928C20.0726 12.7741 20.0697 12.6542 20.0644 12.5354C20.5967 12.1443 21.0562 11.6598 21.4213 11.1049L21.4225 11.1031Z"
                    fill="url(#paint0_linear_1_653)"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_1_653"
                    x1="19.011"
                    y1="19.5047"
                    x2="9.45428"
                    y2="14.1932"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#575656" />
                    <stop offset="1" stop-color="#575656" />
                  </linearGradient>
                  <clipPath id="clip0_1_653">
                    <rect
                      width="13.84"
                      height="13.84"
                      fill="white"
                      transform="translate(7.58301 8.6499)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>

            <a href="" target="_blank">
              <svg
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.618187"
                  y="0.454125"
                  width="27.9251"
                  height="27.9251"
                  rx="13.9625"
                  stroke="#595959"
                  stroke-width="0.90825"
                />
                <g style="mix-blend-mode: luminosity">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19.7086 10.5922C21.2485 13.0522 21.4909 17.1645 21.5005 17.3383C21.5065 17.4473 21.4695 17.5542 21.3977 17.6356C21.3263 17.7164 19.6296 19.6068 17.285 19.6068L17.2532 19.6067C17.1299 19.6058 17.0138 19.5481 16.9376 19.45L15.856 18.058C17.2514 17.8965 18.5183 17.4721 19.4481 16.8395C19.634 16.713 19.6837 16.4575 19.5589 16.269C19.4341 16.0804 19.1822 16.03 18.9963 16.1566C17.92 16.8888 16.3107 17.3088 14.5811 17.3088C12.8517 17.3088 11.2424 16.8888 10.166 16.1566C9.98002 16.0301 9.72811 16.0804 9.60336 16.269C9.47861 16.4576 9.52824 16.713 9.71422 16.8396C10.6441 17.4721 11.9109 17.8964 13.3063 18.058L12.2247 19.45C12.1484 19.5481 12.0323 19.6058 11.9091 19.6067L11.8773 19.6068C9.53241 19.6068 7.83598 17.7164 7.76456 17.6356C7.69274 17.5542 7.65576 17.4473 7.66176 17.3383C7.67133 17.1645 7.91383 13.0522 9.45377 10.5922C9.48526 10.5419 9.52719 10.4991 9.57657 10.4669C11.4796 9.22412 12.7758 9.22671 12.8318 9.22682C12.9897 9.22893 13.1256 9.32238 13.1908 9.45725L13.8442 10.7269C12.6172 10.8083 11.4519 11.0913 10.5034 11.5441C10.3008 11.6408 10.2139 11.8858 10.3092 12.0913C10.4046 12.2968 10.6462 12.3849 10.8488 12.2882C11.8799 11.7959 13.2054 11.5248 14.5811 11.5248C15.9569 11.5248 17.2825 11.7959 18.3136 12.2883C18.3695 12.3149 18.4282 12.3276 18.4861 12.3276C18.6382 12.3276 18.7841 12.2403 18.8532 12.0914C18.9485 11.886 18.8616 11.641 18.659 11.5442C17.7105 11.0913 16.5452 10.8084 15.3181 10.727L15.9723 9.45577C16.0377 9.32172 16.1732 9.2289 16.3305 9.22682C16.3851 9.22649 17.6817 9.22348 19.5858 10.4669C19.6352 10.4991 19.6771 10.5419 19.7086 10.5922ZM11.3869 14.6859C11.3869 13.9418 11.9839 13.3364 12.7177 13.3364C13.4515 13.3364 14.0485 13.9418 14.0485 14.6859C14.0485 15.4301 13.4515 16.0355 12.7177 16.0355C11.9839 16.0355 11.3869 15.4301 11.3869 14.6859ZM15.1133 14.6859C15.1133 13.9418 15.7103 13.3364 16.4441 13.3364C17.1779 13.3364 17.7748 13.9418 17.7748 14.6859C17.7748 15.4301 17.1779 16.0355 16.4441 16.0355C15.7103 16.0355 15.1133 15.4301 15.1133 14.6859Z"
                    fill="url(#paint0_linear_1_651)"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_1_651"
                    x1="18.9848"
                    y1="18.4174"
                    x2="9.49024"
                    y2="12.6051"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#575656" />
                    <stop offset="1" stop-color="#575656" />
                  </linearGradient>
                </defs>
              </svg>
            </a>
          </div>
          <div class="dates tw-text-center xl:tw-text-left">
            © 2021-{{ new Date().getFullYear() }} ALGA.
          </div>
        </div>
      </div>
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
      learnMore: {
        title: "Учить больше",
        list: ["Документация", "Разработка", "FAQ"],
      },
      platform: {
        title: "Платформа",
        list: [
          "Профиль",
          "Трейдинг",
          "Портфолио",
          "Производные <br/> индексы <br/> токенов",
        ],
      },
      company: {
        title: "Компания",
        list: ["Дом", "О нас", "Токен"],
      },
      ourCommunities: {
        title: "Наши сообщества",
      },
      links: {
        telegram: ["Канал <br> Алгафинанс", "Чат <br> Алгафинанс"],
      },
    },
    "en-US": {
      learnMore: {
        title: "Learn more",
        list: ["Documentation", "Development", "FAQ"],
      },
      platform: {
        title: "Platform",
        list: [
          "Profile",
          "Trading",
          "Portfolio",
          "Tokenindex <br/> derivaties",
        ],
      },
      company: {
        title: "Company",
        list: ["Home", "About us"],
      },
      ourCommunities: {
        title: "Our communities",
      },
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
    href: "https://t.me/algafinance_int",
  },
  {
    name: "telegram",
    icon: "telegram",
    title: t("links.telegram[1]"),
    href: "https://t.me/algafinance",
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
    console.log(e);
  }
};

const targetClick = (e) => {
  let currentElem = e.target;
  let open = false;
  // console.log(currentElem);
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
    console.log(open);
    console.log(e.target);
    console.log(currentElem);
    linkName.value = "";
  }
  // console.log(linkName.value);
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
.footer {
  &__top {
    @apply tw-flex tw-flex-col xl:tw-flex-row tw-items-center;
  }
}
footer {
  position: relative;
  font-size: 12px;
  line-height: 130%;
  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 1px;
    background-color: #101333;
    top: 0;
  }

  .links {
    color: #9b9999;
    & > * {
      cursor: pointer;
    }
    & > a {
      color: #9b9999;
    }
  }

  .dates {
    color: #575656;
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
