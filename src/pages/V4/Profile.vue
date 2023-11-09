<template>
  <q-page
    class="tw-flex tw-flex-col tw-relative tw-overflow-hidden tw-container tw-pb-20"
  >
  <section class="profile">
    <h2 class="tw-mb-15">{{ t("title") }}</h2>
    <div class="card-big"></div>
    <div class="tw-flex tw-flex-col tw-items-center tw-gap-7.5 profile-header">
      <div class="profile-header__icon">
        <svg width="74" height="76" viewBox="0 0 74 76" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M72.1193 36.0431L65.8471 19.2048C61.5747 7.73653 50.4847 0 38.213 0H35.6677C23.4869 0 12.3969 7.73653 8.12457 19.2048L1.85236 36.0431C-1.511 45.1449 -0.238379 55.2479 5.21572 63.2575C10.7607 71.176 19.76 76 29.4864 76C31.9408 76 34.5769 75.6359 37.0313 74.9988C39.4856 75.6359 42.1218 76 44.5761 76C54.2117 76 63.3018 71.2671 68.8468 63.2575C74.3009 55.2479 75.4826 45.0539 72.1193 36.0431ZM67.4833 62.3473C62.3019 69.8108 53.6663 74.3617 44.4852 74.3617C42.0309 74.3617 39.5765 73.9976 37.1222 73.3605L36.9404 73.2695L36.7586 73.3605C34.3951 73.9976 31.8499 74.3617 29.3955 74.3617C20.2145 74.3617 11.6697 69.9018 6.39744 62.3473C1.21605 54.7928 -0.056576 45.1449 3.21588 36.5892L9.48809 19.7509C13.5787 8.91976 24.0323 1.54731 35.6677 1.54731H38.213C49.7575 1.54731 60.3021 8.82874 64.3926 19.7509L70.6649 36.5892C73.9373 45.1449 72.6647 54.7928 67.4833 62.3473ZM69.3922 37.0443L63.12 20.206C59.3022 9.92096 49.303 2.91257 38.3039 2.91257H35.7587C24.7596 2.91257 14.7604 9.82994 10.9425 20.206L4.5794 37.0443C1.48875 45.2359 2.67047 54.3377 7.67006 61.5281C12.6696 68.7186 20.7599 72.9964 29.4864 72.9964C31.9408 72.9964 34.5769 72.6323 37.0313 71.9042C39.4856 72.6323 42.0309 72.9964 44.5761 72.9964C53.3027 72.9964 61.3929 68.7186 66.3925 61.5281C71.3012 54.3377 72.392 45.2359 69.3922 37.0443ZM65.029 60.618C60.393 67.3533 52.7572 71.3581 44.4852 71.3581C42.0309 71.3581 39.5765 70.994 37.2131 70.2659L37.0313 70.1749L36.8495 70.2659C34.486 70.994 31.9408 71.3581 29.5773 71.3581C21.3962 71.3581 13.6696 67.3533 9.03358 60.618C4.3976 53.8826 3.30678 45.2359 6.12473 37.5904L12.3969 20.7521C15.9421 11.0132 25.3959 4.5509 35.7587 4.5509H38.3039C48.6667 4.5509 58.0295 11.1042 61.6656 20.8431L67.9378 37.6814C70.7558 45.2359 69.7558 53.8826 65.029 60.618ZM66.5743 38.0455L60.3021 21.2072C56.8478 12.1054 48.0304 5.91617 38.213 5.91617H35.6677C25.8504 5.91617 17.0329 12.1054 13.5787 21.2072L7.30645 38.0455C4.57941 45.3269 5.57932 53.4275 10.0335 59.7988C14.3968 66.1701 21.6689 69.9928 29.3955 69.9928C31.9408 69.9928 34.486 69.5377 36.9404 68.7186C39.3947 69.5377 41.94 69.9928 44.4852 69.9928C52.2118 69.9928 59.484 66.1701 63.8472 59.7988C68.3014 53.4275 69.3013 45.3269 66.5743 38.0455ZM62.6655 58.9796C58.484 64.8958 51.7573 68.4455 44.4852 68.4455C42.0309 68.4455 39.4856 67.9904 37.2131 67.1713L36.9404 67.0802L36.6677 67.1713C34.3042 67.9904 31.8499 68.4455 29.3955 68.4455C22.2143 68.4455 15.3967 64.8958 11.3061 58.9796C7.21555 52.9725 6.30654 45.418 8.76088 38.5916L15.0331 21.7533C18.2146 13.1976 26.4867 7.46347 35.6677 7.46347H38.213C47.3941 7.46347 55.6661 13.1976 58.8477 21.7533L65.1199 38.5916C67.6651 45.418 66.7561 52.9725 62.6655 58.9796ZM57.575 22.2994C54.5753 14.2898 46.7577 8.91976 38.213 8.91976H35.6677C27.123 8.91976 19.3055 14.2898 16.3966 22.2994L10.1244 39.1377C7.76096 45.509 8.66998 52.6084 12.4878 58.1605C16.3057 63.7126 22.6688 66.9892 29.3955 66.9892C31.9408 66.9892 34.5769 66.5341 36.9404 65.5329C39.3038 66.4431 41.94 66.9892 44.4852 66.9892C51.2119 66.9892 57.575 63.7126 61.3929 58.0695C65.2108 52.5174 66.1198 45.418 63.7563 39.0467L57.575 22.2994ZM60.2112 57.2503C56.666 62.4383 50.7574 65.4419 44.5761 65.4419C42.1218 65.4419 39.5765 64.9868 37.304 63.9856L37.0313 63.8946L36.7586 63.9856C34.486 64.8958 31.9408 65.4419 29.4864 65.4419C23.2142 65.4419 17.3965 62.3473 13.8514 57.2503C10.3062 52.0623 9.48809 45.509 11.6697 39.6838L17.9419 22.8455C20.669 15.382 27.8502 10.4671 35.8495 10.4671H38.3948C46.3032 10.4671 53.4845 15.4731 56.3024 22.8455L62.5746 39.6838C64.5745 45.509 63.7563 52.0623 60.2112 57.2503ZM54.7571 23.3006C52.2118 16.4743 45.576 11.8323 38.213 11.8323H35.6677C28.3047 11.8323 21.6689 16.4743 19.1237 23.3006L12.8514 40.1389C10.8516 45.6 11.5788 51.6982 14.8513 56.4311C18.1237 61.1641 23.5778 64.0766 29.3955 64.0766C32.0317 64.0766 34.5769 63.5305 36.9404 62.4383C39.3038 63.5305 41.8491 64.0766 44.4852 64.0766C50.3029 64.0766 55.6661 61.2551 59.0295 56.4311C62.3019 51.6982 63.12 45.6 61.0293 40.1389L54.7571 23.3006ZM57.7568 55.521C54.7571 59.8898 49.7575 62.4383 44.4852 62.4383C42.0309 62.4383 39.4856 61.8922 37.304 60.709L36.9404 60.5269L36.5768 60.709C34.3951 61.8012 31.8499 62.4383 29.3955 62.4383C24.1232 62.4383 19.1237 59.7988 16.1239 55.521C13.1242 51.1521 12.3969 45.6 14.3059 40.685L20.5781 23.8467C22.9415 17.5665 29.0319 13.3796 35.6677 13.3796H38.213C44.9397 13.3796 50.9392 17.5665 53.3027 23.8467L59.5749 40.685C61.4838 45.691 60.7566 51.2431 57.7568 55.521ZM52.03 24.3928C49.8484 18.6587 44.3943 14.8359 38.213 14.8359H35.6677C29.5773 14.8359 24.0323 18.6587 21.8507 24.3928L15.5785 41.2311C13.8514 45.782 14.4877 50.788 17.3056 54.7928C20.0327 58.7976 24.5778 61.1641 29.3955 61.1641C32.0317 61.1641 34.6678 60.4359 36.9404 59.0707C39.2129 60.4359 41.8491 61.1641 44.4852 61.1641C49.303 61.1641 53.8481 58.7976 56.5751 54.7928C59.3022 50.788 59.9385 45.782 58.3022 41.2311L52.03 24.3928ZM55.3025 53.8826C52.8481 57.4323 48.7576 59.5257 44.4852 59.5257C41.94 59.5257 39.4856 58.7976 37.3949 57.4323L36.9404 57.1593L36.4859 57.4323C34.3951 58.7976 31.9408 59.5257 29.3955 59.5257C25.1232 59.5257 21.0326 57.4323 18.5782 53.8826C16.1239 50.3329 15.5785 45.782 17.0329 41.7772L23.3051 24.9389C25.2141 19.8419 30.2137 16.3832 35.6677 16.3832H38.213C43.6671 16.3832 48.6667 19.8419 50.5756 24.9389L56.8478 41.7772C58.3931 45.782 57.8477 50.3329 55.3025 53.8826ZM49.2121 25.394C47.485 20.8431 43.1217 17.7485 38.213 17.7485H35.6677C30.7591 17.7485 26.3958 20.8431 24.6687 25.394L18.3964 42.2323C17.0329 45.8731 17.5783 49.8778 19.76 53.0635C21.9416 56.2491 25.5777 58.1605 29.3955 58.1605C32.2135 58.1605 34.8496 57.1593 36.9404 55.4299C39.0311 57.1593 41.6673 58.1605 44.4852 58.1605C48.3031 58.1605 51.9391 56.2491 54.1208 53.0635C56.3024 49.8778 56.8478 45.8731 55.4843 42.2323L49.2121 25.394ZM52.939 52.1533C51.0301 54.8838 47.9395 56.5222 44.5761 56.5222C41.94 56.5222 39.4856 55.521 37.5767 53.7006L37.0313 53.1545L36.4859 53.7006C34.5769 55.521 32.1226 56.5222 29.4864 56.5222C26.1231 56.5222 23.0324 54.8838 21.1235 52.1533C19.2146 49.4228 18.7601 45.8731 19.9418 42.7784L26.214 25.9401C27.6684 21.9353 31.5772 19.2958 35.7587 19.2958H38.3039C42.5763 19.2958 46.3941 21.9353 47.8486 25.9401L54.1208 42.7784C55.3025 45.9641 54.848 49.4228 52.939 52.1533ZM46.485 26.3952C45.2124 22.9365 41.8491 20.6611 38.213 20.6611H35.6677C32.0317 20.6611 28.6683 22.9365 27.3957 26.3952L21.1235 43.2335C20.1236 45.9641 20.4872 48.9677 22.1234 51.3341C23.7596 53.7006 26.4867 55.1569 29.3955 55.1569C32.4862 55.1569 35.395 53.5186 36.9404 50.879C38.4857 53.5186 41.3945 55.1569 44.4852 55.1569C47.3941 55.1569 50.0302 53.7006 51.7573 51.3341C53.3936 48.9677 53.7572 45.9641 52.7572 43.2335L46.485 26.3952ZM50.4847 50.515C49.1212 52.5174 46.9395 53.6096 44.4852 53.6096C41.5764 53.6096 38.9402 51.8802 37.7585 49.1497L37.5767 48.6946H36.3041L36.1223 49.1497C35.0314 51.8802 32.3044 53.6096 29.3955 53.6096C27.0321 53.6096 24.7596 52.4263 23.396 50.515C22.0325 48.6036 21.7598 46.0551 22.6688 43.7796L28.941 26.9413C30.0318 24.1198 32.7589 22.2084 35.7587 22.2084H38.3039C41.3036 22.2084 44.0307 24.1198 45.1215 26.9413L51.3937 43.7796C52.1209 46.0551 51.8482 48.5126 50.4847 50.515ZM43.6671 27.4874C42.849 25.212 40.5764 23.6647 38.213 23.6647H35.6677C33.2134 23.6647 31.0318 25.212 30.2137 27.4874L23.9414 44.3257C23.3051 46.1461 23.4869 48.1485 24.5778 49.6958C25.6686 51.2431 27.4866 52.2443 29.3955 52.2443C31.8499 52.2443 34.0315 50.697 34.8496 48.4216L35.2132 47.3293H38.4857L38.8493 48.4216C39.6674 50.788 41.8491 52.3353 44.3943 52.3353C46.3032 52.3353 48.1213 51.4251 49.2121 49.7868C50.3029 48.2395 50.5756 46.2371 49.8484 44.4168L43.6671 27.4874ZM48.0304 48.7856C47.2122 49.9689 45.9396 50.606 44.4852 50.606C42.6672 50.606 41.0309 49.4228 40.3946 47.7844L39.6674 45.691H34.2133L33.3952 47.7844C32.7589 49.5138 31.1227 50.606 29.3955 50.606C27.9411 50.606 26.6685 49.8778 25.8504 48.7856C25.0323 47.6024 24.8505 46.1461 25.3959 44.7808L31.6681 27.9425C32.3044 26.3042 33.9406 25.121 35.6677 25.121H38.213C40.031 25.121 41.5764 26.2132 42.2127 27.9425L48.4849 44.7808C49.0303 46.1461 48.8485 47.6934 48.0304 48.7856ZM40.94 28.4886C40.4855 27.3964 39.3947 26.5772 38.213 26.5772H35.6677C34.486 26.5772 33.3952 27.3054 32.9407 28.4886L26.6685 45.3269C26.3049 46.2371 26.4867 47.2383 27.0321 47.9665C27.5775 48.7856 28.4865 49.2407 29.3955 49.2407C30.5773 49.2407 31.6681 48.5126 32.1226 47.3293L32.9407 45.1449C33.1225 44.5988 33.6679 44.2347 34.2133 44.2347H39.7583C40.3037 44.2347 40.8491 44.5988 41.0309 45.1449L41.7582 47.3293C42.2127 48.5126 43.3035 49.2407 44.4852 49.2407C45.3942 49.2407 46.3032 48.7856 46.8486 47.9665C47.3941 47.1473 47.485 46.1461 47.2122 45.3269L40.94 28.4886ZM45.6669 47.1473C45.3942 47.5114 45.0306 47.6934 44.5761 47.6934C44.0307 47.6934 43.4853 47.3293 43.3035 46.7832L42.5763 44.5988C42.1218 43.4156 41.0309 42.6874 39.8492 42.6874H34.3042C33.1225 42.6874 32.0317 43.4156 31.5772 44.5988L30.7591 46.7832C30.5773 47.3293 30.0318 47.6934 29.4864 47.6934C29.0319 47.6934 28.6683 47.5114 28.3956 47.1473C28.1229 46.7832 28.1229 46.3281 28.2138 45.8731L34.486 29.0347C34.6678 28.4886 35.2132 28.1245 35.7587 28.1245H38.3039C38.8493 28.1245 39.3947 28.4886 39.5765 29.0347L45.8487 45.8731C45.9396 46.3281 45.8487 46.7832 45.6669 47.1473Z" fill="url(#paint0_linear_1_2462)"/>
        <defs>
        <linearGradient id="paint0_linear_1_2462" x1="37" y1="0" x2="37" y2="76" gradientUnits="userSpaceOnUse">
        <stop stop-color="#4AD66D"/>
        <stop offset="1" stop-color="#04AC2E"/>
        </linearGradient>
        </defs>
        </svg>

      </div>
      <!-- <img
        class="profile-header__icon"
        :src="require('assets/icons/index-directive/indg-5.svg')"
        alt=""
      /> -->
      <h4>{{ $store.getters["profile/name"] }}</h4>
    </div>

    <div class="profile-step profile-step1">
      <div class="profile-step__item tw-mb-5">
        <div class="tw-text-purple-dark">E-mail</div>
        <div>{{ email }}</div>
      </div>
      <div>
        <div class="profile-step__item tw-mb-5">
          <div class="tw-text-purple-dark">{{ t("password-title") }}</div>
          <div>••••••••</div>
          <div
            v-if="editPassword"
            @click="editPassword = false"
            class="tw-text-purple-light tw-cursor-pointer"
          >
            {{ t("cancel") }}
          </div>
          <div
            v-else
            @click="editPassword = true"
            class="tw-text-purple-light tw-cursor-pointer"
          >
            {{ t("edit") }}
          </div>
        </div>
        <div class="tw-mb-5" v-if="editPassword">
          <Form @submit="updatePassword" v-slot="{ isSubmitting }">
            <div class="profile-step__item-form">
              <div class="tw-text-purple-dark">{{ $t("inputs.oldPass") }}</div>
              <AppInput
                type="password"
                name="oldPassword"
                :placeholder="$t('inputs.password')"
                rules="required|password"
                @isError="isErrorPassword"
              />
            </div>
            <div class="profile-step__item-form">
              <div class="tw-text-purple-dark">
                {{ $t("inputs.password") }}
              </div>
              <AppInput
                type="password"
                name="password"
                :placeholder="$t('inputs.password')"
                rules="required|password"
                @isError="isErrorPassword"
              />
            </div>
            <div class="profile-step__item-form">
              <div class="tw-text-purple-dark">
                {{ $t("inputs.repeatPass") }}
              </div>
              <AppInput
                type="password"
                name="pass2"
                :placeholder="$t('inputs.password')"
                rules="required|confirmed:@password"
                @isError="isErrorPassword"
              />
            </div>
            <div class="profile-step__item-button tw-mt-7.5">
              <div></div>
              <base-button type="submit" :disabled="!isSubmittingPassword || isSubmitting">{{
                t("change-password")
              }}</base-button>
            </div>
          </Form>
        </div>
      </div>
      <div class="profile-step__item">
        <div class="tw-text-purple-dark">{{ t("phone-title") }}</div>
        <div>{{ phone }}</div>
        <div
          v-if="editPhone"
          @click="editPhone = false"
          class="tw-text-purple-light tw-cursor-pointer"
        >
          {{ t("cancel") }}
        </div>
        <div
          v-else
          @click="editPhone = true"
          class="tw-text-purple-light tw-cursor-pointer"
        >
          {{ t("edit") }}
        </div>
      </div>
      <div v-if="editPhone">
        <Form @submit="updatePhone" v-slot="{ isSubmitting }">
          <div class="profile-step__item-form">
            <div class="tw-text-purple-dark">{{ t("phone.label") }}</div>
            <AppInput
              rules="required|cellphone"
              placeholder="+123456789012345"
              name="cellphone"
              @isError="isErrorPhone"
            />
          </div>
          <div class="profile-step__item-button tw-mt-7.5">
            <div></div>
            <base-button type="submit" :disabled="!isSubmittingPhone || isSubmitting"> {{ t("change-phone") }}</base-button>
          </div>
        </Form>
      </div>
      <base-button @click.prevent="$app.logout"  class=" tw-mt-5"> {{ t("exit") }}</base-button>
    </div>
  </section>
  </q-page>
</template>

<script>
import { useStore } from "vuex";
import useStep from "src/composition/useStep";
import BaseButton from "src/core/V3/BaseButton.vue";
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import { AppAlert } from "src/plugins/app-alert";
const i18n = {
  messages: {
    "ru-RU": {
      title: "Профиль",
      edit: "Изменить",
      cancel: "Отменить",
      "password-title": "Пароль",
      "change-password": "Изменить пароль",
      "change-phone": "Изменить телефон",
      "phone-title": "Новый номер телефона",
      exit:'Выход',
      phone: {
        label: "Номер телефона",
      },
    },
    "en-US": {
      title: "Profile",
      edit: "Edit",
      cancel: "Cancel",
      "password-title": "Password",
      "change-password": "Change Password",
      "change-phone": "Change Phone",
      "phone-title": "New Phone Number",
      exit:'Exit',
      phone: {
        label: "Phone number",
      },
    },
    de: {
      title: "Konto",
      edit: "Ändern",
      cancel: "Abbrechen",
      "password-title": "Passwort",
      "change-password": "Passwort ändern",
      "change-phone": "Handynummer ändern",
      "phone-title": "Neue Telefonnnumer",
      phone: {
        label: "Telefonnummer",
      },
    },
    "zh-CN": {
      title: "轮廓",
      edit: "编辑",
      cancel: "取消",
      "password-title": "密码",
      "change-password": "更改密码",
      "change-phone": "更换电话",
      "phone-title": "新电话号码",
      phone: {
        label: "电话号码",
      },
    },
  },
};
export default {
  components: { BaseButton },
  setup() {
    const { t } = useI18n(i18n);
    const store = useStore();
    const { changeStep, step } = useStep("profile");

    const edit = (type) => {
      changeStep("edit");
    };

    const updateEmail = () => {
      
    };
    const updatePassword = async (values, { setErrors }) => {
      try {
        await store.dispatch("auth/setNewPassword", {
          new_password: values.password,
          old_password: values.oldPassword,
        });
        editPassword.value = false;
      } catch (e) {
        const { errors } = await e.response.json();
        if (!e.response) throw e;
        if (e.response.status === 422) {
          AppAlert({
            message: () => errors.old_password[0],
            type: "negative",
          });
          setErrors(errors);
        } else throw e;
      }
    };
    const updatePhone = async (values) => {
      try {
        await store.dispatch("auth/editPhone", {
          cellphone: `+${values.cellphone.replace("+", "")}`,
          name: name.value,
        });
        await store.dispatch("profile/show");
        editPhone.value = false;
      } catch (e) {
        const { errors } = await e.response.json();
        if (!e.response) throw e;
        if (e.response.status === 422) {
          AppAlert({
            message: () => errors.cellphone[0],
            type: "negative",
          });
          setErrors(errors);
        } else throw e;
      }
    };

    const simpleSchema = () => {};

    const isSubmittingEmail = ref(false);
    const isSubmittingPassword = ref(false);
    const isSubmittingPhone = ref(false);

    const isErrorEmail = (val) => {
      isSubmittingEmail.value = val;
    };
    const isErrorPassword = (val) => {
      isSubmittingPassword.value = val;
    };
    const isErrorPhone = (val) => {
      isSubmittingPhone.value = val;
    };

    const email = computed(() => store.getters["profile/email"]);
    const name = computed(() => store.getters["profile/name"]);
    const phone = computed(() => store.getters["profile/phone"]);

    const editPassword = ref(false);
    const editPhone = ref(false);
    return {
      step,
      edit,

      updateEmail,
      updatePassword,
      updatePhone,
      isErrorEmail,
      isErrorPassword,
      isErrorPhone,

      isSubmittingEmail,
      isSubmittingPassword,
      isSubmittingPhone,

      email,
      phone,

      editPassword,
      editPhone,
      t,
    };
  },
};
</script>

<style lang="scss" scoped>
//$
.card-big {
  @apply tw-flex tw-flex-col tw-py-10 tw-px-6
  xl:tw-flex-row xl:tw-items-end xl:tw-justify-between
  xl:tw-py-10;
  
  padding: 40px 25px;
  position: relative;

  border-radius: 13.973px;
  border: 0.932px solid #575656;
  z-index: 1;

  height: 180px;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: url("src/assets/icons/touch.svg");
    background-repeat: no-repeat;
    background-size: 155%;
    border-radius: 24px;
    mix-blend-mode: luminosity;
    z-index: 0;
    background-position: center -177px;
    @include screen-xl {
      background-position: center -440px;
    }
  }
}

.profile {
  &-header {
    position: relative;
    z-index: 2;
    transform: translateY(-50px);
    margin-bottom: -10px;
    &__icon {
      width: 120px;
      height: 120px;
      border-radius: 99999px;
      background: #0B0E11;
      border: 1px solid #575656;
      display: grid;
      place-content: center;
    }
  }
  &-step1 {
    margin: 0 auto;
    @include screen-xl {
      width: 547px;
    }
    .profile-step__item {
      display: grid;
      grid-template-columns: 140px 1fr auto;
      gap: 20px;
    }
    .profile-step__item-form {
      display: flex;
      flex-direction: column;
      align-items: baseline;
      gap: 20px;
      margin-bottom: 10px;
      @include screen-xl {
        grid-template-columns: 140px 300px;
        display: grid;
        gap: 20px;
        align-items: center;
      }
    }
    .profile-step__item-button {
      @include screen-xl {
        grid-template-columns: 140px 200px;
        gap: 20px;
        align-items: center;
        display: grid;
      }
    }
  }
}
</style>
