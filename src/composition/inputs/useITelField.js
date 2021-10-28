import { mask } from "vue-the-mask";
import useInput from "./useInput";
import usePrefixDropdown from "src/composition/inputs/usePrefixDropdown";

export default function (name, rules, opts) {
  const { field, validationListeners } = useInput(name, rules, opts);
  const prefix = usePrefixDropdown({ errorMessage: field.errorMessage });

  return {
    field,
    mask,
    phoneMask: "(###) ###-##-##",
    prefix,
    validationListeners
  };
}
