import { useField } from "vee-validate";
import { computed, watch, toRefs } from "vue";

export default function (props, { emit, attrs }) {
  const { errors, value, errorMessage, handleChange, resetField } = useField(
    props.name || props.label,
    props.rules,
    {
      initialValue: props.modelValue,
      validateOnValueUpdate: false,
      label: props.label,
    }
  );

  props = toRefs(props);

  watch(props.modelValue, (newVal) => {
    if (newVal !== value.value) {
      resetField({ value: newVal });
    }
  });

  watch(errors, (val) => {});
  const validationListeners = computed(() => {
    const handler = (e, shouldValidate = true) => {
      if (attrs.onInput) {
        attrs.onInput(
          e,
          (val) => handleChange(val, shouldValidate),
          () => emit("update:modelValue", value.value)
        );
      } else {
        handleChange(e, shouldValidate);
        emit("update:modelValue", value.value);
      }
    };

    if (!errorMessage.value) {
      // ленивая проверка
      return {
        onChange: handleChange,
        onBlur: handleChange,
        onInput: (e) => {
          handler(e, false);
        },
      };
    }

    // агрессивная проверка
    return {
      onInput: (e) => {
        handler(e);
      },
      onBlur: handleChange,
      onChange: handleChange,
    };
  });

  return {
    errorMessage,
    validationListeners,
    value,
  };
}
