import { useField } from "vee-validate";
import useSoftValidation from "./useSoftValidation";

export default function (name, rules, opts, onInput = undefined) {
  const field = useField(name, rules, {
    ...opts,
    validateOnValueUpdate: false,
  });

  const { validationListeners } = useSoftValidation(
    field.handleChange,
    field.errorMessage,
    onInput
  );
  return { field, validationListeners };
}
