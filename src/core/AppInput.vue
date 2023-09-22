<script>
import _useInput from "src/composition/inputs/useInput";
import _useTextarea from "src/composition/inputs/useTextarea";
import _useTelField from "src/composition/inputs/useITelField";
import _useFileField from "src/composition/inputs/useFileField";
import _usePasswordField from "src/composition/inputs/usePasswordField";
import _useCreditCardField from "src/composition/inputs/useCreditCardField";
import _useCurrencyField from "src/composition/inputs/useCurrencyField";
import useAppend from "src/composition/inputs/useAppend";
import useModel from "src/composition/inputs/useModel";
import { Field } from "vee-validate";
import {
  h,
  withDirectives,
  ref,
  watch,
  getCurrentInstance,
  defineComponent,
  toRef,
} from "vue";
import {
  createErrorMessage,
  createLabel,
  createFieldWrapper,
} from "./AppInput/helpers";

export default defineComponent({
  name: "AppInput",
  inheritAttrs: false,
  props: {
    name: {
      required: true,
      type: String,
    },
    label: {
      required: true,
      type: String,
    },
    type: {
      default: "text",
      type: String,
    },
    placeholder: {
      default: "",
      type: String,
    },
    modelValue: {
      default: undefined,
    },
    creditCard: {
      default: undefined,
      type: Boolean,
    },
    currency: {
      default: undefined,
      type: Boolean,
    },
    inputClass: {
      default: "",
      type: String,
    },
    rootAttrs: {
      type: Object,
      default: { disabled: false },
    },
    ...{ rules: Field.props.rules, standalone: Field.props.standalone },
  },
  emits: ["update:modelValue", "isError"],
  setup(props, { slots, emit, attrs, expose }) {
    const { label, name, type, rules, creditCard, currency, rootAttrs } = props;
    const inputRef = ref(null);
    const { hasAppend, hasPrepend } = useAppend(slots.prepend, slots.append);
    const compId = getCurrentInstance().uid;

    let field;
    let opts = null;

    const fieldStg = { label, standalone: props.standalone, ...rootAttrs };
    if (type === "tel") {
      ({ field, ...opts } = _useTelField(name, rules, fieldStg));
    } else if (type === "password") {
      ({ field, ...opts } = _usePasswordField(name, rules, fieldStg));
    } else if (type === "file") {
      ({ field, ...opts } = _useFileField(name, rules, {
        ...fieldStg,
        initialValue: null,
      }));
    } else if (type === "text" && creditCard) {
      ({ field, ...opts } = _useCreditCardField(name, rules, fieldStg));
    } else if (type === "text" && currency) {
      ({ field, ...opts } = _useCurrencyField(name, rules, fieldStg));
    } else if (type === "textarea") {
      ({ field, ...opts } = _useTextarea(name, rules, fieldStg));
    } else {
      ({ field, ...opts } = _useInput(name, rules, fieldStg, attrs.onInput));
    }

    expose(field);

    const modelValueRef = toRef(props, "modelValue");
    const modelValueEmit = (val) => {
      emit("update:modelValue", val);
    };
    const changeVal = (val) => {
      field.setValue(val);
    };

    watch(field.errors, (val) => {
      emit("isError", !val[0] ? true : false);
    });
    useModel(field.value, modelValueRef, modelValueEmit, changeVal);

    return () => {
      const isTel = props.type === "tel";
      const isPassword = props.type === "password";
      const isCreditCard = props.type === "text" && props.creditCard;
      const isCurrency = props.type === "text" && props.currency;
      const isTextarea = props.type === "textarea";
      const isFile = props.type === "file";

      const inpAttrs = {
        ...attrs,
        ...rootAttrs,
        id: compId,
        ref: inputRef,
        class: [
          "app-input__field app-input__field--standart",
          {
            "app-input__field--has-prepend": hasPrepend.value,
            "app-input__field--has-append": hasAppend.value,
            "app-input__field--invalid": !!field.errorMessage.value,
            "app-input__field--valid": false,
            "app-input__field--textarea": isTextarea,
            "app-input__field--file": isFile,
          },
          props.inputClass,
        ],
        placeholder: props.placeholder,
        type:
          props.type === "password" && opts.showPassword.value
            ? "text"
            : props.type,
        value: field.value.value,
        ...(isCurrency
          ? { onInput: opts.handleChange }
          : opts && opts.validationListeners && opts.validationListeners.value
          ? opts && opts.validationListeners.value
          : { onInput: field.handleChange }),
      };

      return isFile
        ? h("div", { class: "tw-relative app-row items-center" }, [
            opts.createLoadFile(),
            h(
              "label",
              {
                class: [
                  "tw-py-2",
                  { "tw-text-invalid": !!field.errorMessage.value },
                ],
                id: compId,
              },
              Array.isArray(field.value.value)
                ? field.value.value[0].name
                : props.label
            ),
            h("input", {
              type: "file",
              onChange: field.handleChange,
              class:
                "tw-absolute tw-left-0 tw-top-0 tw-w-full tw-h-full tw-opacity-0",
            }),
            field.errorMessage.value
              ? h(
                  "div",
                  { class: "tw-text-invalid tw-w-full" },
                  field.errorMessage.value
                )
              : null,
          ])
        : h("div", { class: ["app-input", attrs.class] }, [
            createLabel({ id: compId, label: props.label }),
            isTel ? opts.prefix.createSelect() : null,
            createFieldWrapper(
              {
                hasAppend,
                hasPrepend,
                prependSlot: slots.prepend,
                appendSlot: slots.append,
                isTel,
                isPassword,
                opts,
                inputRef,
              },
              isTel
                ? withDirectives(h("input", inpAttrs), [
                    [opts.mask, opts.phoneMask],
                  ])
                : isCreditCard
                ? withDirectives(h("input", inpAttrs), [
                    [opts.mask, opts.creditCardMask],
                  ])
                : isTextarea
                ? h("textarea", { ...inpAttrs, type: "", rows: "6" })
                : isFile
                ? h("input", inpAttrs)
                : h("input", inpAttrs)
            ),
            field.errorMessage.value
              ? createErrorMessage({ errorMessage: field.errorMessage })
              : null,
          ]);
    };
  },
});
</script>

<style scoped lang="scss" src="./AppInput/style.scss"></style>
