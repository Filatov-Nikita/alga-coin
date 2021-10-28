import { watch } from "vue";

export default function (
  fieldVal,
  modelVal,
  handleChange = () => {},
  updateField = () => {}
) {

  if(modelVal.value !== undefined) {
    fieldVal.value = modelVal.value;
  }

  watch(fieldVal, (newVal) => {
    handleChange(newVal);
  });

  watch(modelVal, (newVal) => {
    if (fieldVal.value !== newVal) {
      updateField(newVal);
    }
  });
}
