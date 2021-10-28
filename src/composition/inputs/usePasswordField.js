import useInput from "./useInput";
import { ref, resolveComponent, h } from "vue";

function createEye(ctx) {
  const InlineSvg = resolveComponent("InlineSvg");
  const { showPassword } = ctx;
  const eye = !showPassword.value ? "hidden" : "visible";
  const icon = h(InlineSvg, {
    src: require("assets/password-" + eye + ".svg"),
  });

  return h(
    "div",
    {
      class: "app-input__pass-eye",
      onClick: () => {
        showPassword.value = !showPassword.value;
      },
    },
    icon
  );
}

export default function (name, rules, opts) {
  const { field, validationListeners } = useInput(name, rules, opts);
  const showPassword = ref(false);
  return {
    field,
    showPassword,
    validationListeners,
    createEye: () => createEye({ showPassword }),
  };
}
