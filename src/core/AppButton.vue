<script>
import { h, defineComponent, resolveComponent } from "vue";

export default defineComponent({
  name: "AppButton",
  props: {
    label: {
      default: undefined,
      type: String,
    },
    color: {
      default: "blue",
      type: String,
    },
    fullWidth: {
      default: false,
      type: Boolean,
    },
    icon: {
      default: undefined,
      type: String,
    },
    iconStg: {
      default() {
        return {};
      },
      type: Object,
    },
    size: {
      default: undefined,
      type: String,
    },
    design: {
      default: "standart",
      type: String,
    },
    textClass: {
      type: String,
    },
    to: {
      default: undefined,
    },
  },
  render() {
    const RouterLink = resolveComponent("router-link");

    const createIcon = () => {
      const InlineSvg = resolveComponent("InlineSvg");
      return h(InlineSvg, {
        class: { "app-button__icon": this.design !== "round" },
        src: this.icon,
        ...this.iconStg,
      });
    };

    let prepend = null;

    if (this.$slots.prepend) {
      prepend = h(
        "div",
        { class: { "app-button__icon": this.design !== "round" } },
        this.$slots.prepend()
      );
    } else if (this.icon) {
      prepend = createIcon();
    }

    const isLink = this.to !== undefined;
    const children = [
      prepend,
      h("div", this.$slots.default ? this.$slots.default() : this.label),
    ];

    return h(
      isLink ? RouterLink : "button",
      {
        class: [
          `app-button app-button--${this.design}`,
          this.classes,
          { "app-button--full-width": this.fullWidth },
        ],
        ...(isLink ? { to: this.to } : {}),
      },
      isLink ? () => children : children
    );
  },
  computed: {
    classes() {
      return `
        ${this.textClass || "tw-text-base"}
        ${
          this.size && this.design === "round"
            ? `app-button--round-${this.size}`
            : ""
        }
      `;
    },
  },
});
</script>

<style scoped lang="scss">
//$

.app-button {
  @apply tw-flex tw-justify-center tw-items-center tw-text-white;

  &--full-width {
    width: 100%;
  }

  &--standart {
    border-radius: 14px;
    padding: 21px 16px;
    @apply tw-bg-green;

    @include screen-xl {
      &:hover {
        @apply tw-bg-blue-hover;
      }
    }
    &:active {
      @apply tw-bg-primary;
    }
  }

  &--round {
    border-radius: 50%;
    width: 30px;
    height: 30px;
    line-height: 30px;
    @apply tw-bg-blue tw-text-center;

    & > * {
      @apply tw-inline-block;
    }
  }

  &--round-lg {
    width: 48px;
    height: 48px;
  }

  &--flat {
    @apply tw-p-2 tw-rounded tw-inline-flex;

    @include screen-xl {
      &:hover {
        @apply tw-bg-blue-hover tw-bg-opacity-50;
      }
    }

    &:active {
      @apply tw-bg-primary tw-bg-opacity-50;
    }
  }

  &__icon {
    margin-right: 10px;
  }
}
</style>
