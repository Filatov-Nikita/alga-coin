<script>
import { h, toRefs, watch } from 'vue';
import { useField } from 'vee-validate';

export default {
  props: {
    modelValue: {
      default: '',
      type: String,
    },
  },
  emit: ['update:modelValue'],
  setup(props, { emit }) {
    const { name, rules, modelValue: initialValue } = toRefs(props);

    const { value, errorMessage, handleChange } = useField(name, rules, {
      initialValue,
      validateOnValueUpdate: false,
    });

    watch(initialValue, (newVal) => {
      if (value.value !== newVal.value) {
        value.value = newVal;
      }
    });

    return () => {
      return h('div', [
        h('input', {
          value: value.value,
          onInput(e) {
            handleChange(e);
            emit('update:modelValue', e.target.value);
          },
        }),
      ]);
    };
  },
};
</script>
<style scoped>
input {
  color: black;
}
</style>
