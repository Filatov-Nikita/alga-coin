<script>
import { useField } from "vee-validate";
import { defineComponent, h } from "vue";

const KEYCODES = {
  backspace: 8,
  left: 37,
  up: 38,
  right: 39,
  down: 40,
};

export default defineComponent({
  name: "AppCodeInput",
  props: {
    length: {
      default: 4,
      type: [Number, String],
    },
    label: {
      required: true,
      type: String,
    },
  },
  setup(props) {
    const { errorMessage, setErrors, handleChange } = useField(
      "code",
      "required",
      {
        label: props.label,
        validateOnValueUpdate: false,
      }
    );

    return {
      setErrors,
      errorMessage,
      handleChange,
    };
  },
  data() {
    return {
      values: [],
      inputs: [],
    };
  },
  beforeUpdate() {
    this.inputs = [];
  },
  watch: {
    length: {
      handler(val) {
        const length = this.parseLength(val);
        const values = [];

        for (let i = 0; i < length; i++) {
          values.push("");
        }

        this.values = values;
      },
      immediate: true,
    },
    code(val) {
      this.handleChange(val);
      if (val.length === this.values.length) {
        this.$emit("update:code", val);
      }
    },
  },
  emits: ["update:code"],
  methods: {
    parseLength(length) {
      length = parseInt(length);

      if (isNaN(length)) length = 0;

      return Math.max(0, length);
    },
    setRefInput(input) {
      if (!input) return;
      this.inputs.push(input);
    },
  },
  computed: {
    code() {
      return this.values.join("");
    },
  },
  render() {
    const {
      _: { uid: id },
    } = this;

    const createErrorMessage = () => {
      return h(
        "div",
        { class: "app-code-input__error-message" },
        this.errorMessage
      );
    };

    const createLabel = () => {
      return h(
        "label",
        { class: "app-code-input__label", for: id },
        this.label
      );
    };

    const createInput = (id, value, dataIndex, onInputCB) => {
      const inputCnf = {
        id,
        "data-index": dataIndex,
        class: [
          "app-code-input__field",
          { "app-code-input__field--invalid": !!this.errorMessage },
        ],
        type: "tel",
        autocomplete: "one-time-code",
      };

      return h("input", {
        ref: this.setRefInput,
        value,
        ...inputCnf,
        onInput: [
          (e) => {
            let value = e.target.value.replace(/[^\d]/gi, "");

            const onPaste = (value) => {
              const values = value.substring(0, this.values.length).split("");
              this.values = values;
            };

            if (value.length === this.values.length) {
              return onPaste(value);
            }

            const index = parseInt(e.target.dataset.index);
            if (isNaN(index)) return;

            const prevIndex = index - 1;
            const nextIndex = index + 1;
            const prev = this.inputs[prevIndex];
            const next = this.inputs[nextIndex];

            // берем первый элемент - цифру
            [value = ""] = value;

            // запрещаем обновлять поле, так как если поле было 1, затем стало 12, value будет 1 и vDom не обновит поле, а при этом в самом инпуте будет 12
            e.target.value = value;

            onInputCB(value);

            if (value.length <= 0) return;

            if (next) {
              next.focus();
            }
          },
        ],
        onKeydown: (e) => {
          const index = parseInt(e.target.dataset.index);
          if (isNaN(index)) return;

          const prevIndex = index - 1;
          const nextIndex = index + 1;
          const prev = this.inputs[prevIndex];
          const next = this.inputs[nextIndex];

          switch (e.keyCode) {
            case KEYCODES.backspace: {
              e.preventDefault();

              const vals = [...this.values];
              vals[index] = "";
              this.values = vals;

              if (prev) {
                prev.focus();
              }

              break;
            }
            case KEYCODES.right: {
              if (next) {
                next.focus();
              }

              break;
            }
            case KEYCODES.left: {
              if (prev) {
                prev.focus();
              }

              break;
            }
          }
        },
      });
    };

    const length = this.parseLength(this.length);
    const inputs = [];

    for (let i = 0; i < length; i++) {
      const onInputCB = (value) => {
        this.values[i] = value;
      };

      inputs.push(
        createInput(i === 0 ? id : null, this.values[i], i, onInputCB)
      );
    }

    return h("div", { class: "app-code-input" }, [
      createLabel(),
      ...inputs,
      this.errorMessage ? createErrorMessage() : null,
    ]);
  },
});
</script>

<style scoped lang="scss">
//$

.app-code-input {
  @apply tw-flex tw-flex-wrap;
  justify-content: center;

  &__field {
    width: 40px;
    height: 40px;
    @apply tw-rounded-base  tw-text-sm tw-text-center;
    background: #232323;

    &--invalid {
      outline: 2px solid theme("colors.invalid") !important;
    }

    @include screen-xl {
      width: 50px;
      height: 50px;
      @apply tw-text-md2;
    }

    & + & {
      margin-left: 9px;

      @include screen-xl {
        margin-left: 8px;
      }
    }

    &:focus {
      outline: 2px solid theme("colors.green");
    }

    // отмена стилей автокомплита
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      transition: background-color 5000000s ease-in-out 0s,
        color 5000000s ease-in-out 0s;
    }
  }

  &__label {
    margin-bottom: 6px;
    @apply tw-w-full;
  }

  &__error-message {
    @apply tw-text-invalid tw-w-full tw-mt-2;
  }
}
</style>
