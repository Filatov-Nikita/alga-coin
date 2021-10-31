<script>
import _useInput from 'src/composition/inputs/useInput';
import _useTelField from 'src/composition/inputs/useITelField';
import _useFileField from 'src/composition/inputs/useFileField';
import _usePasswordField from 'src/composition/inputs/usePasswordField';
import _useCreditCardField from 'src/composition/inputs/useCreditCardField';
import _useCurrencyField from 'src/composition/inputs/useCurrencyField';
import useAppend from 'src/composition/inputs/useAppend';
import useModel from 'src/composition/inputs/useModel';
import { Field } from 'vee-validate';
import {
  h,
  withDirectives,
  ref,
  getCurrentInstance,
  defineComponent,
  toRef,
} from 'vue';
import {
  createErrorMessage,
  createLabel,
  createFieldWrapper,
} from './AppInput/helpers';

export default defineComponent({
  name: 'AppInput',
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
      default: 'text',
      type: String,
    },
    placeholder: {
      default: '',
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
    ...{ rules: Field.props.rules },
  },
  emits: ['update:modelValue'],
  setup(props, { slots, emit, attrs }) {
    const { label, name, type, rules, creditCard, currency } = props;
    const inputRef = ref(null);
    const { hasAppend, hasPrepend } = useAppend(slots.prepend, slots.append);
    const compId = getCurrentInstance().uid;

    let field;
    let opts = null;

    if (type === 'tel') {
      ({ field, ...opts } = _useTelField(name, rules, { label }));
    } else if (type === 'password') {
      ({ field, ...opts } = _usePasswordField(name, rules, { label }));
    } else if (type === 'file') {
      field = _useFileField(name, rules, { label });
    } else if (type === 'text' && creditCard) {
      ({ field, ...opts } = _useCreditCardField(name, rules, { label }));
    } else if (type === 'text' && currency) {
      ({ field, ...opts } = _useCurrencyField(name, rules, { label }));
    } else {
      ({ field, ...opts } = _useInput(name, rules, { label }, attrs.onInput));
    }

    const modelValueRef = toRef(props, 'modelValue');
    const modelValueEmit = (val) => {
      emit('update:modelValue', val);
    };
    const changeVal = (val) => {
      field.setValue(val);
    };
    useModel(field.value, modelValueRef, modelValueEmit, changeVal);

    return () => {
      const isTel = props.type === 'tel';
      const isPassword = props.type === 'password';
      const isCreditCard = props.type === 'text' && props.creditCard;
      const isCurrency = props.type === 'text' && props.currency;

      const inpAttrs = {
        id: compId,
        ref: inputRef,
        class: [
          'app-input__field app-input__field--standart',
          {
            'app-input__field--has-prepend': hasPrepend.value,
            'app-input__field--has-append': hasAppend.value,
            'app-input__field--invalid': !!field.errorMessage.value,
            'app-input__field--valid': false,
          },
        ],
        placeholder: props.placeholder,
        type:
          props.type === 'password' && opts.showPassword.value
            ? 'text'
            : props.type,
        value: field.value.value,
        ...(isCurrency
          ? { onInput: opts.handleChange }
          : opts.validationListeners && opts.validationListeners.value
          ? opts.validationListeners.value
          : { onInput: field.handleChange }),
      };

      return h('div', { class: 'app-input' }, [
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
            ? withDirectives(h('input', inpAttrs), [
                [opts.mask, opts.phoneMask],
              ])
            : isCreditCard
            ? withDirectives(h('input', inpAttrs), [
                [opts.mask, opts.creditCardMask],
              ])
            : h('input', inpAttrs)
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
