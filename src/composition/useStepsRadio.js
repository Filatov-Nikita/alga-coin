import { reactive, provide, inject, toRef, computed, nextTick } from "vue";

export default function () {
  const state = reactive({
    steps: [],
    step: "",
  });

  const registrStep = ({ type, name, ...opts }) => {
    const value = { type, name, ...opts };
    if (!state.step) setStep(value);
    state.steps.push(value);
  };

  const setStep = (value) => {
    state.step = value;
  };

  const stepIndexMap = computed(() => {
    return state.steps.reduce((acc, step, index) => {
      acc[step.name] = index;
      return acc;
    }, {});
  });

  const show = (name) =>
    nextTick(() => {
      const index = stepIndexMap.value[name];
      const step = state.steps[index];
      state.step = step;
    });

  provide("registrStep", registrStep);
  provide("setStep", setStep);
  provide("step", toRef(state, "step"));

  return {
    state,
    show,
  };
}
