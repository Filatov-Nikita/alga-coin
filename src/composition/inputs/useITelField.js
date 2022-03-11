import { watchEffect } from "vue";
import { mask } from "vue-the-mask";
import useInput from "./useInput";
import { useField } from "vee-validate";
import usePrefixDropdown from "src/composition/inputs/usePrefixDropdown";

export default function (name, rules, opts, rootAttrs) {
  
  const { field, validationListeners } = useInput(name, rules, opts);
  const unmaskedFiled = useField(`${name}Full`, "", {
    validateOnValueUpdate: false,
  });
  const disabled = opts?.disabled
  const prefix = usePrefixDropdown({ errorMessage: field.errorMessage }, disabled);
  
  watchEffect(() => {
    const fieldVal = field.value;
    
    if (typeof fieldVal.value !== "string") return;
    
    const prefixVal = prefix.fieldPrefix.value;
    const unmaskedVal = unmaskedFiled.value;
    const cleanVal = fieldVal.value.replace(/[^\d]/g, "");
    unmaskedVal.value = `${prefixVal.value}${cleanVal}`;
    
  });

  return {
    field,
    mask,
    phoneMask: "(###) ###-##-##",
    prefix,
    validationListeners,
  };
}
