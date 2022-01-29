<script>
import { h, resolveComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default {
  props: {
    message: {
      default: undefined,
      type: [String, Function],
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
  setup() {
    const { t } = useI18n();

    return {
      t,
    };
  },
  render() {
    const InlineSvg = resolveComponent('InlineSvg');

    let icon = null;
    icon = h(InlineSvg, {
      class: 'app-alert__icon',
      src: !this.icon
        ? this.type === 'positive'
          ? require('assets/icons/alert-success.svg')
          : this.type === 'negative'
          ? require('assets/icons/alert-error.svg')
          : this.type === 'neutral'
          ? require('assets/icons/alert-info.svg')
          : ''
        : this.icon,
    });

    const message =
      typeof this.message === 'function' ? this.message(this.t) : this.message;

    const alert = h('div', { class: `app-alert app-alert--${this.type}` }, [
      icon,
      message,
    ]);

    return alert;
  },
};
</script>

<style scoped lang="scss">
.app-alert {
  padding: 13px 17px;
  @apply tw-rounded-base tw-text-xxs tw-flex tw-items-center;

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
