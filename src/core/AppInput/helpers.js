import { h } from "vue";

export function createFieldWrapper(ctx, field) {
  const { hasAppend, hasPrepend, prependSlot, appendSlot, isTel, isPassword, opts, inputRef } =
    ctx;

  const prependBlock = hasPrepend.value
    ? h("div", { class: "app-input__prepend" }, prependSlot())
    : null;

  const appendBlock = hasAppend.value
    ? h("div", { class: "app-input__append" }, appendSlot())
    : null;

  return h(
    "div",
    {
      class: [
        "app-input__field-wrapper",
        { "app-input__field-wrapper--tel": isTel },
      ],
      onClick: () => {
        inputRef.value.focus();
      },
    },
    [appendBlock, field, prependBlock, isPassword ? opts.createEye() : null]
  );
}

export function createLabel(ctx) {
  const { id, label } = ctx;
  return h("label", { class: "app-input__label", for: id }, [label]);
}

export function createErrorMessage(ctx) {
  const { errorMessage } = ctx;
  return h("div", { class: "app-input__error-message" }, errorMessage.value);
}
