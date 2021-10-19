import {
  ref,
  watch,
  computed,
  getCurrentInstance,
  onMounted,
  onUnmounted,
} from "vue";

export default function (props, emit) {
  const self = getCurrentInstance();
  const dialog = self.appContext.config.globalProperties.$aDialog;
  const modelValue = computed(() => props.modelValue);

  function close() {
    innerValue.value = false;
  }

  const innerValue = ref(props.modelValue);

  onMounted(() => {
    dialog.bus.on("open", (name) => {
      if (props.name === name) innerValue.value = true;
    });

    dialog.bus.on("close", (name) => {
      if (props.name === name) innerValue.value = false;
    });
  });

  onUnmounted(() => {
    dialog.bus.off("open");
    dialog.bus.off("close");
  });

  watch(modelValue, (newVal) => {
    if (newVal === innerValue.value) return;
    innerValue.value = newVal;
  });

  watch(innerValue, (newVal) => {
    const scroll = self.appContext.config.globalProperties.$scroll;

    if (newVal) {
      scroll.stop(`modal ${self.uid}`);
    } else {
      scroll.start(`modal ${self.uid}`);
    }

    emit("update:modelValue", newVal);
  });

  return {
    close,
    innerValue,
  };
}
