<template>
  <div class="tw-flex tw-flex-col tw-overflow-hidden tw-relative">
    <div class="tw-mb-10 xl:tw-mb-30">
      <h2 class="">{{ t("title") }}</h2>
    </div>

    <Form @submit="sendAppeal" v-slot="{ isSubmitting }" class="support-form">
      <div class="tw-flex tw-flex-col tw-gap-5 tw-mb-7.5">
        <div class="tw-flex tw-flex-col xl:tw-flex-row tw-gap-7">
          <label class="support-form__label" for="topic">{{
            t("topic.label")
          }}</label>
          <AppInput
            id="topic"
            name="title"
            placeholder=""
            rules="required"
            class="tw-flex-grow"
          />
        </div>
        <div class="tw-flex tw-flex-col xl:tw-flex-row tw-gap-7">
          <label class="support-form__label" for="question">{{
            t("question.label")
          }}</label>
          <AppInput
            id="question"
            rules="required"
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
          <div
            class="xl:tw-ml-42 tw-flex tw-flex-col xl:tw-flex-row xl:tw-justify-between tw-gap-5"
          >
            <div
              @click="uploadFile.click()"
              class="upload__btn tw-cursor-pointer tw-text-purple-light tw-flex tw-gap-3.5 tw-items-center"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.8496 2.09812C10.3167 0.633962 7.82057 0.633962 6.28936 2.09812L2.04232 6.15174C2.01466 6.17816 2.00002 6.21391 2.00002 6.25121C2.00002 6.28852 2.01466 6.32427 2.04232 6.35069L2.64277 6.92423C2.67021 6.95033 2.70736 6.96498 2.74609 6.96498C2.78482 6.96498 2.82198 6.95033 2.84942 6.92423L7.09646 2.8706C7.62367 2.36701 8.325 2.09034 9.07027 2.09034C9.81553 2.09034 10.5169 2.36701 11.0425 2.8706C11.5697 3.3742 11.8593 4.0441 11.8593 4.75442C11.8593 5.46629 11.5697 6.13464 11.0425 6.63824L6.71406 10.7711L6.01273 11.441C5.35696 12.0674 4.29114 12.0674 3.63537 11.441C3.31806 11.1379 3.14395 10.7354 3.14395 10.3064C3.14395 9.8774 3.31806 9.47484 3.63537 9.17175L7.92959 5.0715C8.03861 4.96891 8.18181 4.9114 8.33477 4.9114H8.33639C8.48935 4.9114 8.63092 4.96891 8.73832 5.0715C8.84734 5.17564 8.90592 5.31242 8.90592 5.45852C8.90592 5.60307 8.84571 5.73985 8.73832 5.84243L5.22841 9.19196C5.20075 9.21838 5.1861 9.25413 5.1861 9.29143C5.1861 9.32874 5.20075 9.36448 5.22841 9.39091L5.82885 9.96445C5.8563 9.99055 5.89345 10.0052 5.93218 10.0052C5.97091 10.0052 6.00806 9.99055 6.03551 9.96445L9.54379 6.61337C9.8676 6.30406 10.045 5.89372 10.045 5.45697C10.045 5.02021 9.86598 4.60832 9.54379 4.30056C8.875 3.66174 7.78802 3.6633 7.11924 4.30056L6.70267 4.70002L2.82664 8.40082C2.56357 8.65062 2.35504 8.94784 2.21314 9.27521C2.07124 9.60259 1.9988 9.95362 2.00002 10.3079C2.00002 11.0276 2.29454 11.7037 2.82664 12.212C3.37827 12.7373 4.10075 13 4.82324 13C5.54572 13 6.2682 12.7373 6.8182 12.212L11.8496 7.40917C12.5899 6.70041 13 5.75695 13 4.75442C13.0016 3.75034 12.5916 2.80688 11.8496 2.09812Z"
                  fill="#BEC3FF"
                />
              </svg>
              {{ t("file-text") }} (pdf, doc, jpeg, zip, rar)
            </div>
            <div v-if="file">
              {{ file.name }}
            </div>
          </div>
        </div>
      </div>
      <base-button
        type="submit"
        class="tw-w-full xl:tw-w-auto xl:tw-ml-42"
        :disabled="isSubmitting"
        >{{ t("send") }}</base-button
      >
    </Form>
    <!-- popup -->
    <Transition
      appear
      mode="out-in"
      enter-active-class="animated zoomIn"
      leave-active-class="animated zoomOut"
    >
      <div
        v-show="isPopup"
        data-popup
        class="card card__border-line tw-absolute tw-w-full tw-top-1/2"
        ref="popup"
      >
        <div class="tw-text-center tw-w-full">{{ t("popup-text") }}</div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
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
      "popup-text":
        "Спасибо, ваша заявка принята. Мы обработаем её в течение суток",
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
      "popup-text":
        "Thank you, your application has been accepted. We will process within a day",
    },
    de: {
      title: "Support",
      topic: {
        label: "Thema",
      },
      question: {
        label: "Frage",
      },
      "file-text": "Dateianhang",
      send: "Senden",
      "popup-text":
        "Vielen Dank, Ihr Antrag wurde angenommen. Wir werden sie innerhalb von 24 Stunden bearbeiten.",
    },
    "zh-CN": {
      title: "支持",
      topic: {
        label: "话题",
      },
      question: {
        label: "问题",
      },
      "file-text": "附上文件",
      send: "发送",
      "popup-text": "谢谢，您的申请已被接受。 我们将在一天内处理",
    },
  },
};
const store = useStore();
const { t } = useI18n(i18n);
const uploadFile = ref(null);
const file = ref(null);
const isPopup = ref(false);
const scollWindow = (e) => {
  if (isPopup.value) {
    isPopup.value = false;
  }
};

const targetClick = (e) => {
  if (isPopup.value) {
    isPopup.value = false;
  }
};
onMounted(() => {
  window.addEventListener("scroll", scollWindow);

  window.addEventListener("click", targetClick);
});
onUnmounted(() => {
  window.removeEventListener("scroll", scollWindow);
  window.removeEventListener("click", targetClick);
});

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
    isPopup.value = true;
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
