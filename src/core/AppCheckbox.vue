<script>
import { h } from "vue";
import { useField, Field } from "vee-validate";

export default {
  props: {
    value: {
      default: true,
      type: Boolean,
    },
    label: {
      default: undefined,
      type: String,
    },
    name: {
      required: true,
      type: String,
    },
    labelClass: {
      default: "",
      type: String,
    },
    ...{ rules: Field.props.rules },
  },
  setup(props) {
    const { value: innerValue, errorMessage } = useField(
      props.name,
      props.rules,
      {
        initialValue: false,
      }
    );

    return { innerValue, errorMessage };
  },
  emits: ["update:modelValue"],
  render() {
    const {
      _: { uid: id },
    } = this;

    return h("div", [
      h("div", { class: "app-checkbox" }, [
        h(
          "label",
          { class: `app-checkbox__label ${this.labelClass}`, for: id },
          [this.$slots.default ? this.$slots.default() : this.label || ""]
        ),
        h("div", {
          id,
          role: "checkbox",
          class: [
            "app-checkbox__field",
            {
              "app-checkbox__field--active": this.innerValue,
              "app-checkbox__field--invalid": !!this.errorMessage,
            },
          ],
          onClick: () => {
            this.innerValue = !this.innerValue;
            this.$emit("update:modelValue", this.innerValue);
          },
        }),
      ]),

      this.errorMessage
        ? h("div", { class: "app-checkbox__error-message" }, this.errorMessage)
        : null,
    ]);
  },
};
</script>

<style scoped lang="scss">
.app-checkbox {
  @apply tw-flex tw-items-center;

  &__label {
    order: 1;
  }

  &__field {
    width: 16px;
    height: 16px;
    border: 2px solid theme("colors.green");
    border-radius: 4px;
    cursor: pointer;
    position: relative;
    margin-right: 24px;
    flex-shrink: 0;

    &--invalid {
      border-color: theme("colors.invalid");
    }

    &--active {
      &::before {
        content: url(~assets/checkbox-active.svg);
        display: block;
        position: absolute;
        top: -2px;
        left: -2px;
        line-height: 0;
      }
    }
  }

  &__error-message {
    @apply tw-w-full tw-text-invalid;
  }
}
</style>
