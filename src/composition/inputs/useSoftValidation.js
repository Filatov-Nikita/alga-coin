import { computed } from "vue";

export default function (handleChange, errorMessage, onInput = undefined) {
  const validationListeners = computed(() => {
    const handler = (e, shouldValidate = true) => {
      if (onInput) {
        onInput(e, (val) => handleChange(val, shouldValidate));
      } else {
        handleChange(e, shouldValidate);
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
    validationListeners,
  };
}
