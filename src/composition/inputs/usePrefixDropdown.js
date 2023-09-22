import { resolveComponent, h, ref } from "vue";
import { useField } from "vee-validate";

const NUMBER_FLAG = { "+7": "ru" };
const OPTION_VALUES = ["+7"];
const DEFAULT_PREFIX = "+7";

function createSelect(ctx) {
  const { selectShow, fieldPrefix, errorMessage, disabled } = ctx;
  const InlineSvg = resolveComponent("InlineSvg");

  const dropDown = selectShow.value ? createDropdown(ctx) : null;

  const selectBtnChlildren = h("div", { class: "app-select__wrapper" }, [
    h(InlineSvg, {
      class: "app-select__flag",
      src: require("assets/" + NUMBER_FLAG[fieldPrefix.value.value] + ".svg"),
    }),
    h(InlineSvg, {
      class: [
        "app-select__arrow",
        { "app-select__arrow--up": selectShow.value },
      ],
      src: require("assets/select-arrow.svg"),
    }),
    h("div", { class: "app-select__prefix" }, fieldPrefix.value.value),
  ]);

  const select = h(
    "div",
    {
      role: "select",
      class: [
        "app-select",
        {
          "app-input__field--invalid": !!errorMessage.value,
          "app-inut__disabled": disabled,
        },
      ],
      onClick: (e) => {
        if (e.target.closest(".app-dropdown")) return;
        if (!disabled) selectShow.value = !selectShow.value;
      },
    },
    [selectBtnChlildren, dropDown ? dropDown : null]
  );

  return select;
}

function createDropdown(ctx) {
  const { fieldPrefix, selectShow } = ctx;
  const InlineSvg = resolveComponent("InlineSvg");

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
          fieldPrefix.value.value = number;
          selectShow.value = false;
        },
      },
      [flag, number]
    );
  });

  return h("div", { class: "app-dropdown" }, options);
}

export default function ({ errorMessage }, disabled) {
  const selectShow = ref(false);
  const fieldPrefix = useField("telPrefix", "", {
    standalone: true,
    initialValue: DEFAULT_PREFIX,
  });

  return {
    fieldPrefix,
    createSelect: () =>
      createSelect({ selectShow, fieldPrefix, errorMessage, disabled }),
  };
}
