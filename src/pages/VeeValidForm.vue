<template>
  <div class="tw-p-10">
    <form @submit="handleSubmit">
      <input class="tw-text-dark" type="text" v-model="val1" />
      <div>{{ err1 }}</div>
      <br />
      <br />
      <input class="tw-text-dark" type="text" v-model="val2" />
      <div>{{ err2 }}</div>
      <br />
      <br />
      {{ form.isSubmitting }}
      <button type="submit">submit</button>
    </form>
  </div>
</template>

<script>
import { useField, useForm } from "vee-validate";

export default {
  setup() {
    const scheme = {
      inp1: "required",
      inp2: "required",
    };

    const form = useForm({
      validationSchema: scheme,
      initialErrors: {
        inp1: "err 1",
      },
      initialDirty: {
        inp2: true,
      },
      initialTouched: {
        inp1: true,
      },
    });

    const inp1 = useField("inp1", "", { label: "поле 1" });
    const inp2 = useField("inp2", "", { label: "поле 2" });

    form.values;
    form.errors;
    form.meta;
    form.handleReset;
    form.resetForm;
    form.handleSubmit;
    form.submitForm;
    form.setErrors;
    form.submitCount;
    form.isSubmitting;

    const handleSubmit = form.handleSubmit((values, actions) => {
      return new Promise((res, rej) => {
        setTimeout(() => {
          if (Math.random() < 0.5) {
            res();
          } else {
            rej();
          }
        }, 1000);
      }).catch((e) => console.log(e));
    });

    return {
      val1: inp1.value,
      val2: inp2.value,
      err1: inp1.errorMessage,
      err2: inp2.errorMessage,
      form,
      handleSubmit,
    };
  },
};
</script>
