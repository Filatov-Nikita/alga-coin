<template>
  <form @submit="onSubmit">
    <keep-alive>
      <slot v-bind="{ goToPrev, isLastStep, hasPrevious }" />
    </keep-alive>
  </form>
</template>

<script>
import { useForm } from 'vee-validate';
import { ref, computed, provide, watch } from 'vue';

function defineProvides({
  stepCounter,
  currentStepIdx,
  currentStepName,
  pushStepName,
}) {
  provide('STEP_COUNTER', stepCounter);
  provide('CURRENT_STEP_INDEX', currentStepIdx);
  provide('CURRENT_STEP_NAME', currentStepName);
  provide('PUSH_STEP_NAME', pushStepName);
}

export default {
  name: 'FormWizard',
  emits: ['submit', 'update:modelValue'],
  props: {
    validationSchema: {
      type: Array,
      default() {
        return [];
      },
    },
    initialValues: {
      default: undefined,
      type: Object,
    },
    modelValue: {
      type: String,
    },
  },
  setup(props, { emit }) {
    const formData = ref({});
    const currentStepIdx = ref(0);
    const stepNames = ref([]);
    const stepCounter = ref(0);

    const currentStepName = computed(() => {
      if (props.modelValue && stepNames.value.includes(props.modelValue)) {
        return props.modelValue;
      }

      return stepNames.value[currentStepIdx.value];
    });

    watch(currentStepName, (newVal) => {
      currentStepIdx.value = stepNames.value.findIndex(
        (step) => step === newVal
      );
      emit('update:modelValue', newVal);
    });

    const pushStepName = (name) => {
      stepNames.push(name);
    };

    defineProvides({
      stepCounter,
      currentStepIdx,
      currentStepName,
      pushStepName,
    });

    const isLastStep = computed(() => {
      return currentStepIdx.value === stepCounter.value - 1;
    });

    const hasPrevious = computed(() => {
      return currentStepIdx.value > 0;
    });

    const currentSchema = computed(() => {
      return props.validationSchema[currentStepIdx.value];
    });

    const { resetForm, handleSubmit } = useForm({
      validationSchema: currentSchema,
      initialValues: props.initialValues,
    });

    const onSubmit = handleSubmit((values) => {
      formData.value = {
        ...formData.value,
        ...values,
      };

      resetForm({
        values: {
          ...formData.value,
        },
      });

      if (!isLastStep.value) {
        currentStepIdx.value++;
        return;
      }

      emit('submit', formData.value);
    });

    return {
      onSubmit,
      resetForm,
      hasPrevious,
      isLastStep,
      goToPrev,
    };
  },
  methods: {
    goToPrev() {
      if (this.currentStepIdx === 0) {
        return;
      }

      this.currentStepIdx--;
      this.resetForm({
        values: {
          ...this.formData,
        },
      });
    },
  },
};
</script>
