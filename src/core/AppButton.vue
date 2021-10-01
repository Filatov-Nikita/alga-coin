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
  },
  render() {
    const createIcon = () => {
      const InlineSvg = resolveComponent('InlineSvg');

      return h(InlineSvg, {
        class: 'app-button__icon',
        src: this.icon,
      });
    };

    return h(
      'button',
      { class: ['app-button', { 'app-button--full-width': this.fullWidth }] },
      [
        this.icon ? createIcon() : null,
        h('div', this.$slots.default ? this.$slots.default : this.label),
      ]
    );
  },
});
</script>

<style scoped lang="scss">
.app-button {
  border-radius: 8px;
  padding: 21px 16px;
  @apply tw-bg-blue tw-text-white tw-text-base tw-flex tw-justify-center;

  &--full-width {
    width: 100%;
  }

  &:hover {
    @apply tw-bg-blue-hover;
  }

  &:active {
    @apply tw-bg-primary;
  }

  &__icon {
    margin-right: 10px;
  }
}
</style>
