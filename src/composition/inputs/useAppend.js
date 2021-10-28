import { computed } from "vue";

export default function (prependSlot, appendSlot) {
  const hasPrepend = computed(() => {
    return !!prependSlot;
  });

  const hasAppend = computed(() => {
    return !!appendSlot;
  });

  return {
    hasAppend,
    hasPrepend
  };
}
