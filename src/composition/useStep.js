import { ref, provide } from "vue";

export default function (initialStep = "") {
  const step = ref(initialStep);
  const changeStep = (stepName) => (step.value = stepName);

  provide("step", step);

  return {
    step,
    changeStep,
  };
}
