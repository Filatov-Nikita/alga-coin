<script>
import { h, resolveComponent } from 'vue';

export default {
  props: {
    message: {
      default: undefined,
      type: String,
    },
    icon: {
      default: undefined,
      type: String,
    },
    type: {
      default: 'positive',
      type: String,
    },
  },
  render() {
    const InlineSvg = resolveComponent('InlineSvg');

    let icon = null;
    if (this.icon) {
      icon = h(InlineSvg, { class: 'app-alert__icon', src: this.icon });
    }

    const alert = h('div', { class: `app-alert app-alert--${this.type}` }, [
      icon,
      this.message,
    ]);

    return alert;
  },
};
</script>

<style scoped lang="scss">
.app-alert {
  padding: 13px 17px;
  @apply tw-rounded-base tw-text-xxs;

  &--positive {
    @apply tw-bg-valid tw-bg-opacity-80;
  }

  &--negative {
    @apply tw-bg-invalid tw-bg-opacity-80;
  }

  &--neutral {
    background: rgba(0, 21, 56, 0.8);
  }

  &__icon {
    margin-right: 14px;
  }
}
</style>
