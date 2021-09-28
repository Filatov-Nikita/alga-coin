<script>
import { h, defineComponent } from 'vue';

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
  },
  render() {
    return h(
      'button',
      { class: ['app-button', { 'app-button--full-width': this.fullWidth }] },
      this.$slots.default ? this.$slots.default : this.label
    );
  },
});
</script>

<style scoped>
.app-button {
  border-radius: 8px;
  padding: 21px 16px;
  @apply tw-bg-blue tw-text-white tw-text-base tw-flex tw-justify-center;
}

.app-button--full-width {
  width: 100%;
}

.app-button:hover {
  @apply tw-bg-blue-hover;
}

.app-button:active {
  @apply tw-bg-primary;
}
</style>
