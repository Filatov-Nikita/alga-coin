<script>
import { h, defineComponent, resolveComponent } from 'vue';

export default defineComponent({
  name: 'AppButton',
  props: {
    label: {
      default: undefined,
      type: String,
    },
    color: {
      default: 'blue',
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
    design: {
      default: 'standart',
      type: String,
    },
    textClass: {
      type: String,
    },
  },
  render() {
    const createIcon = () => {
      const InlineSvg = resolveComponent('InlineSvg');

      return h(InlineSvg, {
        class: 'app-button__icon',
        src: this.icon,
      });
    };

    let prepend = null;

    if (this.$slots.prepend) {
      prepend = h('div', { class: 'app-button__icon' }, this.$slots.prepend());
    } else if (this.icon) {
      prepend = createIcon();
    }

    return h(
      'button',
      {
        class: [
          `app-button app-button--${this.design}`,
          this.classes,
          { 'app-button--full-width': this.fullWidth },
        ],
      },
      [
        prepend,
        h('div', this.$slots.default ? this.$slots.default : this.label),
      ]
    );
  },
  computed: {
    classes() {
      return this.textClass === undefined ? 'tw-text-base' : this.textClass;
    },
  },
});
</script>

<style scoped lang="scss">
//$

.app-button {
  @apply tw-flex tw-justify-center tw-items-center;

  &--full-width {
    width: 100%;
  }

  &--standart {
    border-radius: 8px;
    padding: 21px 16px;
    @apply tw-bg-blue;

    @include screen-xl {
      &:hover {
        @apply tw-bg-blue-hover;
      }
    }
    &:active {
      @apply tw-bg-primary;
    }
  }

  &--flat {
    @apply tw-p-2 tw-rounded;

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
