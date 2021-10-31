import { mask } from "vue-the-mask";
import useInput from "./useInput";

export default function (name, rules, opts) {
  const { field, validationListeners } = useInput(name, rules, opts);
  return {
    field,
    validationListeners,
    mask,
    creditCardMask: "#### #### #### ####",
  };
}
