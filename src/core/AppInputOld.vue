<script>
import { h, defineComponent, getCurrentInstance, computed, ref } from 'vue';
import { Field } from 'vee-validate';
import useCellphone from './AppInput/cellphone-old';
import usePassword from './AppInput/password-old';
import useInput from './AppInput/input-old';

export default defineComponent({
  name: 'AppInput',
  inheritAttrs: false,
  props: {
    label: {
      required: true,
      type: String,
    },
    placeholder: {
      type: String,
    },
    type: {
      default: 'text',
      type: String,
    },
    withTelPrefix: {
      default: false,
      type: Boolean,
    },
    modelValue: {
      default: '',
      type: String,
    },
    telPrefix: {
      default: undefined,
      validator(value) {
        return value.value && value.label;
      },
    },
    name: {
      type: String,
    },
    ...{ rules: Field.props.rules },
  },
  setup(props, { emit, attrs, slots }) {
    const id = getCurrentInstance().uid;
    const input = ref(null);

    const { errorMessage, value, validationListeners } = useInput(props, {
      emit,
      attrs,
    });

    const {
      isCellphone,
      createSelect,
      createInput: createCellphoneInput,
      inputCnf: cellphoneCnf,
    } = useCellphone(props, { emit });

    const { createEye, isPassword, showPassword } = usePassword(props, {
      emit,
    });

    const hasPrepend = computed(() => {
      return !!slots.prepend;
    });

    const hasAppend = computed(() => {
      return !!slots.append;
    });

    return () => {
      const inputCnf = {
        id,
        ref: input,
        class: [
          'app-input__field app-input__field--standart',
          {
            'app-input__field--has-prepend': hasPrepend.value,
            'app-input__field--has-append': hasAppend.value,
            'app-input__field--invalid': !!errorMessage.value,
            'app-input__field--valid': false,
          },
        ],
        placeholder: props.placeholder || props.label,
        type: isPassword.value && showPassword.value ? 'text' : props.type,
        value: value.value,
        ...validationListeners.value,
        ...cellphoneCnf
      };

      return h('div', { class: 'app-input' }, [
        createLabel(),
        isCellphone.value ? createSelect(errorMessage.value) : null,
        createFieldWrapper(
          isCellphone.value
            ? createCellphoneInput(inputCnf)
            : createInput(inputCnf)
        ),
        errorMessage.value ? createErrorMessage() : null,
      ]);
    };

    function createInput(inputCnf) {
      return h('input', inputCnf);
    }

    function createFieldWrapper(children) {
      const prepend = hasPrepend.value
        ? h('div', { class: 'app-input__prepend' }, slots.prepend())
        : null;

      const append = hasAppend.value
        ? h('div', { class: 'app-input__append' }, slots.append())
        : null;

      return h(
        'div',
        {
          class: [
            'app-input__field-wrapper',
            { 'app-input__field-wrapper--tel': props.type === 'tel' },
          ],
          onClick: () => {
            input.value.focus();
          },
        },
        [append, children, prepend, isPassword.value ? createEye() : null]
      );
    }

    function createLabel() {
      return h('label', { class: 'app-input__label', for: id }, [props.label]);
    }

    function createErrorMessage() {
      return h(
        'div',
        { class: 'app-input__error-message' },
        errorMessage.value
      );
    }
  },
  emits: ['update:modelValue', 'update:telPrefix', 'update:cellphone'],
});
</script>

<style scoped lang="scss" src="./AppInput/style.scss"></style>
