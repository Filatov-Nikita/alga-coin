import { useField } from "vee-validate";

export default function (name, rules, opts) {
  const field = useField(name, rules, opts);
  return field;
}
