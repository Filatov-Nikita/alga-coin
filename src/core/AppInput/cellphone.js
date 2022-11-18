import { ref, resolveComponent, h, withDirectives, computed } from "vue";
import { mask } from "vue-the-mask";
import { useField } from "vee-validate";

function onMousedown(e) {
  e.preventDefault();
}

const NUMBER_FLAG = { "+7": "ru" };
const DEFAULT_PREFIX = { label: "+7", value: "+7" };
const OPTION_VALUES = ["+7"];

export default function (props, _c) {
  const isCellphone = computed(() => {
    return props.type === "tel" && props.withTelPrefix;
  });

  if (!props.withTelPrefix && props.type !== "tel") {
    return {
      selectShow: undefined,
      prefixVal: undefined,
      createSelect: undefined,
      createInput: undefined,
      isCellphone,
      inputCnf: {},
    };
  }

  const InlineSvg = resolveComponent("InlineSvg");
  const selectShow = ref(false);
  const telPrefixField = useField("telPrefix", "required", {
    initialValue: props.telPrefix || DEFAULT_PREFIX,
    validateOnValueUpdate: false,
    standalone: true,
  });

  const prefixVal = telPrefixField.value;

  function createSelect(errorMessage) {
    const dropDown = selectShow.value ? createDropdown() : null;

    const selectBtnChlildren = h("div", { class: "app-select__wrapper" }, [
      h(InlineSvg, {
        class: "app-select__flag",
        src: require("assets/" + NUMBER_FLAG[prefixVal.value.value] + ".svg"),
      }),
      h(InlineSvg, {
        class: [
          "app-select__arrow",
          { "app-select__arrow--up": selectShow.value },
        ],
        src: require("assets/select-arrow.svg"),
      }),
      h("div", { class: "app-select__prefix" }, prefixVal.value.label),
    ]);

    const select = h(
      "div",
      {
        role: "select",
        class: ["app-select", { "app-input__field--invalid": !!errorMessage }],
        onClick: (e) => {
          if (e.target.closest(".app-dropdown")) return;
          selectShow.value = !selectShow.value;
        },
        onMousedown,
      },
      [selectBtnChlildren, dropDown ? dropDown : null]
    );

    return select;
  }

  function createDropdown() {
    const options = OPTION_VALUES.map((number) => {
      const flag = h(InlineSvg, {
        class: "app-dropdown__flag",
        src: require("assets/" + NUMBER_FLAG[number] + ".svg"),
      });

      return h(
        "div",
        {
          class: "app-dropdown__option",
          onClick() {
            prefixVal.value = { value: number, label: number };
            props, _c.emit("update:telPrefix", prefixVal.value);
            selectShow.value = false;
          },
        },
        [flag, number]
      );
    });

    return h("div", { class: "app-dropdown" }, options);
  }

  function createInput(inputCnf) {
    return withDirectives(h("input", inputCnf), [[mask, "(###) ###-##-##"]]);
  }

  return {
    selectShow,
    telPrefixField,
    createSelect,
    createInput,
    isCellphone,
    inputCnf: {
      placeholder: props.placeholder || "(999) 999-99-99",
    },
  };
}
