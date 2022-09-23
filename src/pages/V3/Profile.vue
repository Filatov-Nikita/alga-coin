<template>
  <section class="profile">
    <h2 class="tw-mb-15">My Profile</h2>
    <div class="card-big"></div>
    <div class="tw-flex tw-flex-col tw-items-center tw-gap-7.5 profile-header">
      <img
        class="profile-header__icon"
        :src="require('assets/icons/index-directive/indg-1.png')"
        alt=""
      />
      <h4>Constantine</h4>
    </div>

    <AppStep name="profile">
      <div class="profile-step profile-step1">
        <div class="profile-step__item tw-mb-5">
          <div class="tw-text-purple-dark">E-mail</div>
          <div>example@mail.com</div>
        </div>
        <div>
          <div class="profile-step__item tw-mb-5">
            <div class="tw-text-purple-dark">Password</div>
            <div>••••••••</div>
            <div @click="edit('password')" class="tw-text-purple-light">
              Edit
            </div>
          </div>
          <div class="tw-mb-5">
            <Form @submit="updatePassword" v-slot="{ isSubmitting }">
              <div class="profile-step__item-form">
                <div class="tw-text-purple-dark">Old Password</div>
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
                <base-button type="submit" :disabled="isSubmitting"
                  >Change Password</base-button
                >
              </div>
            </Form>
          </div>
        </div>
        <div class="profile-step__item">
          <div class="tw-text-purple-dark">Phone number</div>
          <div>7 (917) 481-94-57</div>
          <div @click="edit('phone')" class="tw-text-purple-light">Edit</div>
        </div>
        <div>
          <Form @submit="updatePhone">
            <div class="profile-step__item-form">
              <div class="tw-text-purple-dark">New Phone number</div>
              <AppInput
                rules="required"
                type="tel"
                name="cellphone"
                placeholder="(999) 999 99 99"
                @isError="isErrorPhone"
              />
            </div>
            <div class="profile-step__item-button tw-mt-7.5">
              <div></div>
              <base-button type="submit">Change Phone Number</base-button>
            </div>
          </Form>
        </div>
      </div>
    </AppStep>
    <AppStep name="edit"> Тестирование2 </AppStep>
  </section>
</template>

<script>
import { useStore } from "vuex";
import useStep from "src/composition/useStep";
import BaseButton from "src/core/V3/BaseButton.vue";
import { ref } from "vue";
export default {
  components: { BaseButton },
  setup() {
    const store = useStore();
    const { changeStep, step } = useStep("profile");

    const edit = (type) => {
      changeStep("edit");
      console.log(type);
    };

    const updateEmail = () => {
      console.log("test");
    };
    const updatePassword = (values) => {
      store.dispatch("auth/setNewPassword", {
        new_password: values.password,
        old_password: values.oldPassword,
      });
    };
    const updatePhone = () => {
      console.log("test");
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
    };
  },
};
</script>

<style lang="scss" scoped>
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
    background-position: center -440px;
    background-size: 155%;
    border-radius: 24px;
    mix-blend-mode: luminosity;
    z-index: 0;
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
    width: 547px;
    .profile-step__item {
      display: grid;
      grid-template-columns: 140px 1fr auto;
      gap: 20px;
    }
    .profile-step__item-form {
      display: grid;
      grid-template-columns: 140px 300px;
      gap: 20px;
      align-items: center;
    }
    .profile-step__item-button {
      display: grid;
      grid-template-columns: 140px 200px;
      gap: 20px;
      align-items: center;
    }
  }
}
</style>
