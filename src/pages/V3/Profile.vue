<template>
  <section class="profile">
    <h2 class=" tw-mb-15">
        My Profile    
    </h2>
    <div class="card-big">
    </div>
    <div class=" tw-flex tw-flex-col tw-items-center tw-gap-7.5 profile-header">
        <img class="profile-header__icon" :src="require('assets/icons/index-directive/indg-1.png')" alt="">
        <h4>Constantine</h4>
    </div>

    <AppStep name="profile">
        <div class="profile-step profile-step1">
            <div class="profile-step__item tw-mb-5">
                <div class=" tw-text-purple-dark">
                    E-mail
                </div>
                <div>
                    example@mail.com
                </div>
                <div @click="edit('email')" class="  tw-text-purple-light">
                    Edit
                </div>
            </div>
            <div class="profile-step__item tw-mb-5">
                <div class=" tw-text-purple-dark">
                    Password
                </div>
                <div>
                    ••••••••
                </div>
                <div @click="edit('password')" class="  tw-text-purple-light">
                    Edit
                </div>
            </div>
            <div class="profile-step__item">
                <div class=" tw-text-purple-dark">
                    Phone number
                </div>
                <div>
                    7 (917) 481-94-57
                </div>
                <div @click="edit('phone')" class="  tw-text-purple-light">
                    Edit
                </div>
            </div>

        <Form
          @submit="updateEmail"
          class="app-auth__form"
        >
            <AppInput
                name="email"
                rules="required|email"
                type="email"
                placeholder="ivanov@domain.ru"
                @isError="isErrorEmail"
            />
            <base-button type="submit" :design="!isSubmittingEmail?'border-line': 'green'" :disabled="!isSubmittingEmail">Change E-mail</base-button>
        </Form>
        <Form
          @submit="updatePassword"
          class="app-auth__form"
        >
            <AppInput
                name="email"
                rules="required|email"
                type="email"
                placeholder="ivanov@domain.ru"
                @isError="isErrorPassword"
            />
            <base-button type="submit" :design="!isSubmittingPassword&&'border-line'" :disabled="!isSubmittingPassword">Change Password</base-button>
        </Form>
        <Form
          @submit="updatePhone"
          class="app-auth__form"
        >
            <AppInput
                name="email"
                rules="required|email"
                type="email"
                placeholder="ivanov@domain.ru"
                @isError="isErrorPhone"
            />
            <base-button type="submit" :design="!isSubmittingPhone&&'border-line'" :disabled="!isSubmittingPhone">Send the code</base-button>
        </Form>
        </div>
    </AppStep>
    <AppStep name="edit">
        Тестирование2
    </AppStep>
  </section>
</template>

<script>
import useStep from "src/composition/useStep";
import BaseButton from 'src/core/V3/BaseButton.vue';
import {ref} from "vue";
export default {
  components: { BaseButton },
    setup(){
        const { changeStep, step } = useStep("profile");

        const edit = (type)=>{
            changeStep('edit')
            console.log(type)
        }

        const updateEmail = () => {
            console.log('test')
        }
        const updatePassword = () => {
            console.log('test')
        }
        const updatePhone = () => {
            console.log('test')
        }

        const simpleSchema = ()=>{

        }

        const isSubmittingEmail = ref(false);
        const isSubmittingPassword = ref(false);
        const isSubmittingPhone = ref(false);

        const isErrorEmail = (val) => {
            console.log(val)
            isSubmittingEmail.value = val
        }
        const isErrorPassword = (val) => {
            isSubmittingPassword.value = val
        }
        const isErrorPhone = (val) => {
            isSubmittingPhone.value = val
        }
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
            isSubmittingPhone
        }
    }
}
</script>

<style lang="scss" scoped>
.card-big {
  @apply tw-flex tw-flex-col tw-py-10 tw-px-6 
  xl:tw-flex-row xl:tw-items-end xl:tw-justify-between 
  xl:tw-py-10;
  border-radius: 24px;
  padding: 40px 25px;
  position: relative;

  background: radial-gradient(93.33% 93.33% at 50% 50%, #0F1359 0%, #000320 100%);
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
    background: url('src/assets/icons/touch.svg');
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
            grid-template-columns:  140px 1fr auto;
            gap: 20px;
        }
    }
}
</style>