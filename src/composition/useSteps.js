import { reactive, provide, toRef, computed } from "vue";

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

  const next = ({ show }) => {
    const index = stepIndexMap.value[state.step.name];
    if (index >= state.steps.length) return;
    const nextStep = state.steps[index + 1];
    state.step = nextStep;

    if (show && nextStep.type === "AppRadioGroupStep") {
      nextStep.show(show);
    }
  };

  const prev = () => {
    const index = stepIndexMap.value[state.step.name];
    if (index <= 0) return false;
    const prevStep = state.steps[index - 1];
    state.step = prevStep;
  };

  provide("registrStep", registrStep);
  provide("setStep", setStep);
  provide("step", toRef(state, "step"));
  provide("prev", prev);

  return {
    state,
    next,
    prev,
    setStep,
  };
}
