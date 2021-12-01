<template>
  <q-page class="tw-pt-6 tw-pb-16">
    <div class="tw-container">
      <h1 class="tw-text-sm xl:tw-text-md1 tw-text-center">
        Оставьте заявку <br />
        на рассмотрение <br />
        инвестиционного проекта
      </h1>
      <Form
        class="tw-space-y-4-1 xl:tw-w-1/2 xl:tw-mx-auto"
        @submit="createOffer"
        v-slot="{ isSubmitting }"
      >
        <AppInput rules="required" name="name" placeholder="Имя" label="Имя" />
        <AppInput
          rules="required"
          name="email"
          placeholder="E-mail"
          label="E-mail"
        />
        <AppInput
          rules="required"
          type="tel"
          name="cellphone"
          placeholder="Телефон"
          label="Номер телефона"
        />
        <AppInput
          rules="required"
          name="description"
          placeholder="Коротко опишите идею проекта ..."
          label="Описание"
          type="textarea"
        />

        <AppInput
          rules="required"
          name="doc"
          label="Прикрепите файл (pdf, doc, jpeg, zip, rar)"
          type="file"
        />

        <AppCheckbox
          rules="required"
          name="service"
          class="tw-text-xxs-2 tw-w-2/3"
          >Я ознакомился(ась) и соглашаюсь с
          <AppLink :to="$app.links.serviceInfo">
            Условиями обслуживания</AppLink
          >
          AlgaCoin</AppCheckbox
        >
        <AppButton
          :disabled="isSubmitting"
          type="submit"
          fullWidth
          label="Оставить заявку"
        />
      </Form>
      <AppModal
        name="success"
        v-slot="{ close }"
        contentClass="tw-p-6 tw-py-16 tw-relative"
      >
        <img
          class="tw-mx-auto tw-mb-3"
          src="~assets/images/logo.svg"
          alt="logo"
        />
        <p class="tw-text-xs tw-text-center">
          Спасибо, ваш проект принят на рассмотрение!
        </p>
        <AppButton
          class="tw-absolute tw-right-3 tw-top-3"
          design="flat"
          @click="close"
        >
          <span class="tw-text-xxs-2">Закрыть</span>
        </AppButton>
      </AppModal>
    </div>
  </q-page>
</template>

<script>
import { useStore } from 'vuex';
import { useDialog } from 'src/plugins/app-dialog';

export default {
  setup() {
    const store = useStore();
    const appDialog = useDialog();

    const createOffer = async (values, { setErrors, resetForm }) => {
      values.file = values.doc[0];
      values.cellphone = values.cellphoneFull;

      const formData = new FormData();
      for (let key in values) {
        formData.append(key, values[key]);
      }

      try {
        await store.dispatch('landing/createOffer', formData);
        resetForm();
        appDialog.open('success');
      } catch (e) {
        if (!e.response) throw e;
        if (e.response.status === 422) {
          const { errors } = await e.response.json();
          setErrors(errors);
        } else throw e;
      }
    };

    return {
      createOffer,
    };
  },
};
</script>

<style>
</style>
