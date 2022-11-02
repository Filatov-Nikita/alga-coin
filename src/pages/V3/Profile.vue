<template>
  <section class="profile">
    <h2 class="tw-mb-15">{{ t("title") }}</h2>
    <div class="card-big"></div>
    <div class="tw-flex tw-flex-col tw-items-center tw-gap-7.5 profile-header">
      <img
        class="profile-header__icon"
        :src="require('assets/icons/index-directive/indg-5.svg')"
        alt=""
      />
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
              <base-button type="submit" :disabled="isSubmitting">{{
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
            <base-button type="submit">{{ t("change-phone") }}</base-button>
          </div>
        </Form>
      </div>
    </div>
  </section>
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
      phone: {
        label: "Номер телефона",
      },
    },
    "en-US": {
      title: "",
      edit: "Edit",
      cancel: "Cancel",
      "password-title": "Password",
      "change-password": "Change Password",
      "change-phone": "Change Phone",
      "phone-title": "New Phone Number",
      phone: {
        label: "Phone number",
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
      console.log("test");
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
      console.log(val);
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
  border-radius: 24px;
  padding: 40px 25px;
  position: relative;

  background: radial-gradient(
    93.33% 93.33% at 50% 50%,
    #0f1359 0%,
    #000320 100%
  );
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
