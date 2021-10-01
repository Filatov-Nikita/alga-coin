<script>
import {
  h,
  defineComponent,
  withDirectives,
  resolveComponent,
  computed,
} from 'vue';
import { useField, Field } from 'vee-validate';
import { mask } from 'vue-the-mask';

function onMousedown(e) {
  e.preventDefault();
}

export default defineComponent({
  name: 'AppInput',
  inheritAttrs: false,
  props: {
    label: {
      required: true,
      type: String,
    },
    placeholder: {
      required: true,
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
    ...{ rules: Field.props.rules },
    value: {
      default: '',
      type: String,
    },
  },
  setup(props, { emit, attrs }) {
    const { value, errorMessage, handleChange } = useField(
      props.label,
      props.rules,
      {
        initialValue: props.value,
        validateOnValueUpdate: false,
      }
    );

    const validationListeners = computed(() => {
      const handler = (e, shouldValidate = true) => {
        if (attrs.onInput) {
          attrs.onInput(
            e,
            (val) => handleChange(val, shouldValidate),
            () => emit('update:modelValue', value.value)
          );
        } else {
          handleChange(e, shouldValidate);
          emit('update:modelValue', value.value);
        }
      };

      if (!errorMessage.value) {
        // ленивая проверка
        return {
          onChange: handleChange,
          onBlue: handleChange,
          onInput: (e) => {
            handler(e, false);
          },
        };
      }

      // агрессивная проверка
      return {
        onInput: (e) => {
          handler(e);
        },
        onBlue: handleChange,
        onChange: handleChange,
      };
    });

    return {
      innerValue: value,
      errorMessage,
      validationListeners,
    };
  },
  data() {
    return {
      showPassword: false,
      selectShow: false,
      selected: { label: '+7', value: '+7' },
    };
  },
  emits: ['update:modelValue'],
  computed: {
    hasPrepend() {
      return !!this.$slots.prepend;
    },
    hasAppend() {
      return !!this.$slots.append;
    },
  },
  render() {
    const InlineSvg = resolveComponent('InlineSvg');

    const {
      _: { uid: id },
    } = this;

    const numberFlag = { '+7': 'ru', '+1': 'ru', '+3': 'ru' };

    const createErrorMessage = () => {
      return h('div', { class: 'app-input__error-message' }, this.errorMessage);
    };

    const createDropdown = () => {
      const optionValues = [
        '+7',
        '+1',
        '+3',
        '+7',
        '+1',
        '+3',
        '+7',
        '+1',
        '+3',
      ];

      const options = optionValues.map((number) => {
        const flag = h(InlineSvg, {
          class: 'app-dropdown__flag',
          src: require('assets/' + numberFlag[number] + '.svg'),
        });

        return h(
          'div',
          {
            class: 'app-dropdown__option',
            onClick: () => {
              this.selected = { value: number, label: number };
              this.selectShow = false;
            },
          },
          [flag, number]
        );
      });

      return h('div', { class: 'app-dropdown' }, options);
    };

    const createPasswordEye = () => {
      const eye =
        this.type === 'password' && !this.showPassword ? 'hidden' : 'visible';

      const icon = h(InlineSvg, {
        src: require('assets/password-' + eye + '.svg'),
      });

      return h(
        'div',
        {
          class: 'app-input__pass-eye',
          onClick: () => {
            this.showPassword = !this.showPassword;
          },
          onMousedown,
        },
        icon
      );
    };

    const createSelect = () => {
      let dropDown;
      if (this.selectShow) {
        dropDown = createDropdown();
      }

      const selectBtnChlildren = h('div', { class: 'app-select__wrapper' }, [
        h(InlineSvg, {
          class: 'app-select__flag',
          src: require('assets/' + numberFlag[this.selected.value] + '.svg'),
        }),
        h(InlineSvg, {
          class: [
            'app-select__arrow',
            { 'app-select__arrow--up': this.selectShow },
          ],
          src: require('assets/select-arrow.svg'),
        }),
        h('div', { class: 'app-select__prefix' }, this.selected.label),
      ]);

      const select = h(
        'div',
        {
          role: 'select',
          class: 'app-select',
          onClick: (e) => {
            if (e.target.closest('.app-dropdown')) return;
            this.selectShow = !this.selectShow;
          },
          onMousedown,
        },
        [selectBtnChlildren, dropDown ? dropDown : null]
      );

      return select;
    };

    const createInput = () => {
      const isPhone = this.type === 'tel' && this.withTelPrefix;
      const isPassword = this.type === 'password';

      let select, passwordEye;

      if (isPhone) {
        select = createSelect();
      } else if (isPassword) {
        passwordEye = createPasswordEye();
      }

      const inputCnf = {
        id,
        ref: 'input',
        class: [
          'app-input__field app-input__field--standart',
          {
            'app-input__field--has-prepend': this.hasPrepend,
            'app-input__field--has-append': this.hasAppend,
            'app-input__field--invalid': !!this.errorMessage,
            'app-input__field--valid': false,
          },
        ],
        placeholder: this.placeholder,
        type: isPassword && this.showPassword ? 'text' : this.type,
        value: this.innerValue,
        ...this.validationListeners,
      };

      const input = isPhone
        ? withDirectives(h('input', inputCnf), [[mask, '(###) ###-##-##']])
        : h('input', inputCnf);

      let prepend;
      if (this.hasPrepend) {
        prepend = h(
          'div',
          { class: 'app-input__prepend' },
          this.$slots.prepend()
        );
      }

      let append;
      if (this.hasAppend) {
        append = h('div', { class: 'app-input__append' }, this.$slots.append());
      }

      return [
        isPhone ? select : null,
        h(
          'div',
          {
            class: [
              'app-input__field-wrapper',
              { 'app-input__field-wrapper--tel': this.type === 'tel' },
            ],
            onClick: () => {
              this.$refs.input.focus();
            },
          },
          [
            prepend ? prepend : null,
            input,
            append ? append : null,
            isPassword ? passwordEye : null,
          ]
        ),
      ];
    };

    const label = h('label', { class: 'app-input__label', for: id }, [
      this.label,
    ]);

    return h('div', { class: 'app-input' }, [
      label,
      ...createInput(),
      this.errorMessage ? createErrorMessage() : null,
    ]);
  },
});
</script>

<style scoped lang="scss" src="./AppInput/style.scss"></style>
