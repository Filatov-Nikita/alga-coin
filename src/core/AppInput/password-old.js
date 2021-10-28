import { ref, resolveComponent, computed, h } from "vue";

function onMousedown(e) {
  e.preventDefault();
}

export default function (props) {
  const isPassword = computed(() => {
    return props.type === "password";
  });

  if (props.type !== "password") {
    return {
      showPassword: undefined,
      createEye: undefined,
      isPassword,
    };
  }

  const InlineSvg = resolveComponent("InlineSvg");
  const showPassword = ref(false);

  function createEye(_c) {
    const eye =
      props.type === "password" && !showPassword.value ? "hidden" : "visible";

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
        onMousedown,
      },
      icon
    );
  }

  return {
    showPassword,
    createEye,
    isPassword,
    inputCnf: {
      placeholder: props.placeholder || 'Пароль'
    }
  };
}
