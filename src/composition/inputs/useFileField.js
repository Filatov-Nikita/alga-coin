import { useField } from "vee-validate";
import { resolveComponent, h } from "vue";

function createLoadFile() {
  const InlineSvg = resolveComponent("InlineSvg");
  const fileIcon = h(InlineSvg, {
    src: require("assets/icons/load-file.svg"),
  });

  return h("div", { class: "app-input__file" }, [fileIcon]);
}

export default function (name, rules, opts) {
  const field = useField(name, rules, opts);
  return { field, createLoadFile };
}
