<template>
  <div class="tw-flex tw-flex-col tw-overflow-hidden">
    <div class="tw-mb-30">
      <h2 class="">{{ t("title") }}</h2>
    </div>

    <Form @submit="sendAppeal" v-slot="{ isSubmitting }" class="support-form">
      <div class="tw-flex tw-flex-col tw-gap-5 tw-mb-7.5">
        <div class="tw-flex tw-gap-7">
          <label class="support-form__label" for="topic">{{
            t("topic.label")
          }}</label>
          <AppInput
            id="topic"
            name="title"
            placeholder=""
            rules=""
            class="tw-flex-grow"
          />
        </div>
        <div class="tw-flex tw-gap-7">
          <label class="support-form__label" for="question">{{
            t("question.label")
          }}</label>
          <AppInput
            id="question"
            rules=""
            name="body"
            type="textarea"
            class="tw-flex-grow"
          />
        </div>

        <div>
          <input
            hidden
            name="file"
            type="file"
            ref="uploadFile"
            accept=".pdf,.doc,.jpeg,.zip,.rar"
            @change="fileSelect($event)"
          />
          <div class="tw-ml-42 tw-flex tw-justify-between">
            <div
              @click="$refs.uploadFile.click()"
              class="upload__btn tw-cursor-pointer tw-text-purple-light"
            >
              {{ t("file-text") }} (pdf, doc, jpeg, zip, rar)
            </div>
            <div v-if="file">
              {{ file.name }}
            </div>
          </div>
        </div>
      </div>
      <base-button type="submit" class="tw-ml-42" :disabled="isSubmitting">{{
        t("send")
      }}</base-button>
    </Form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import { useI18n } from "vue-i18n";
const i18n = {
  messages: {
    "ru-RU": {
      title: "Поддержка",
      topic: {
        label: "Тема",
      },
      question: {
        label: "Вопрос",
      },
      "file-text": "Прикрепить файл",
      send: "Отправить",
    },
    "en-US": {
      title: "Support",
      topic: {
        label: "Topic",
      },
      question: {
        label: "Question",
      },
      "file-text": "Attach the file",
      send: "Send",
    },
  },
};
const { t } = useI18n(i18n);
const store = useStore();
const uploadFile = ref(null);
const file = ref(null);
const fileSelect = (e) => {
  file.value = e.target.files[0];
};
const sendAppeal = async (values, { resetForm }) => {
  const formData = new FormData();
  for (let key in values) {
    formData.append(key, values[key]);
  }
  if (file.value !== null) formData.append("file", file.value);
  try {
    await store.dispatch("profile/sendMessageSupport", formData);
    console.log(values);
    resetForm();
    file.value = null;
  } catch (e) {
    throw e;
  }
};
</script>

<style lang="scss" scoped>
.support-form {
  &__label {
    width: 140px;
  }
}
</style>
