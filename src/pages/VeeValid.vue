<template>
  <div class="tw-p-10">
    <div class="tw-mb-10">

    </div>
    {{ meta1.dirty }}
    {{ meta1.touched }}
    <input class="tw-text-dark-blue" type="text" v-model="val1" @blur="blur1" />
    <div>{{ err1 }}</div>
    <div>{{ errs1 }}</div>
    <button
      @click="
        reset1({
          errors: ['test error', 'err 2'],
          value: 'reset val',
          touched: true,
        })
      "
    >
      reset
    </button>
    <br />
    <button @click="handleReset1">reset 2</button>
  </div>
</template>

<script>
import { useField, useForm } from 'vee-validate';

export default {
  setup() {
    const form = useForm({});

    const asyncRuleEmail = () => {
      return new Promise((res) => {
        setTimeout(() => {
          const random = Math.random();
          if (random < 0.5) {
            res(true);
          } else {
            res('email уже существует');
          }
        }, 1000);
      });
    };
    const rulesStr = 'min:3|email';
    const rulesObj = { required: true, min: 3 };

    const inp1 = useField('inp1', rulesStr, {
      label: 'Имя поля',
      initialValue: 'test',
      bails: false,
    });

    inp1.setState({
      // touched: true,
      // value: '123',
      errors: ['state err1', 'state err 2'],
    });

    inp1.setTouched(false);
    inp1.setValue('1234');
    inp1.setErrors(['set err 1']);

    return {
      val1: inp1.value,
      err1: inp1.errorMessage,
      errs1: inp1.errors,
      reset1: inp1.resetField,
      handleReset1: inp1.handleReset,
      meta1: inp1.meta,
      blur1: inp1.handleBlur,
    };
  },
};
</script>
