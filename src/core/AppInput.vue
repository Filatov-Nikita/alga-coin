<script>
import { h, defineComponent, withDirectives, resolveComponent } from 'vue';
import { mask } from 'vue-the-mask';

function onMousedown(e) {
  e.preventDefault();
}

export default defineComponent({
  name: 'AppInput',
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
  },
  data() {
    return {
      showPassword: false,
      selectShow: false,
      selected: { label: '+7', value: '+7' },
    };
  },
  render() {
    const InlineSvg = resolveComponent('InlineSvg');

    const {
      _: { uid: id },
    } = this;

    const numberFlag = { '+7': 'ru', '+1': 'ru', '+3': 'ru' };

    const createDropdown = () => {
      const optionValues = ['+7', '+1', '+3'];

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
      const isPhone = this.type === 'phone';
      const isPassword = this.type === 'password';

      let select, passwordEye;

      if (isPhone) {
        select = createSelect();
      } else if (isPassword) {
        passwordEye = createPasswordEye();
      }

      const inputCnf = {
        id,
        class: 'app-input__field app-input__field--standart',
        placeholder: this.placeholder,
        type: isPassword && this.showPassword ? 'text' : this.type,
      };

      const input = isPhone
        ? withDirectives(h('input', inputCnf), [[mask, '(###) ###-##-##']])
        : h('input', inputCnf);

      return [isPhone ? select : null, input, isPassword ? passwordEye : null];
    };

    const label = h('label', { class: 'app-input__label', for: id }, [
      this.label,
    ]);

    return h('div', { class: 'app-input' }, [label, ...createInput()]);
  },
});
</script>

<style scoped lang="scss">
%field {
  min-height: 50px;
  @apply tw-rounded-base tw-bg-dark-blue;
}

.app-input {
  @apply tw-text-white tw-flex tw-flex-wrap tw-text-xs tw-relative;

  &__label {
    margin-bottom: 7px;
    line-height: 1.4;
    @apply tw-w-full;
  }

  &__field {
    @extend %field;

    &--standart {
      padding: 0 21px;
      @apply tw-w-full;
    }

    &[type='phone'] {
      width: calc(100% - 111px - 10px);
    }

    &::placeholder {
      @apply tw-text-primary;
    }
  }

  &__pass-eye {
    position: absolute;
    right: 17px;
    bottom: 12px;
    width: 24px;
    height: 24px;
    line-height: 24px;
    @apply tw-cursor-pointer tw-text-center;

    svg {
      @apply tw-inline-block;
    }
  }
}

.app-select {
  @extend %field;
  flex-basis: 111px;
  margin-right: 10px;
  transition: background-color 0.1s;
  @apply tw-relative;

  &__wrapper {
    padding: 0 13px;
    @apply tw-flex tw-items-center tw-cursor-pointer tw-rounded-base tw-h-full;

    &:hover {
      @apply tw-bg-secondary;
    }

    &:active {
      @apply tw-bg-primary;
    }
  }

  &__flag {
    width: 24px;
    margin-right: 6px;
  }

  &__arrow {
    margin-right: 7px;

    &--up {
      transform: rotateX(180deg);
    }
  }

  &__prefix {
    width: 41px;
    line-height: 41px;
    @apply tw-text-center;
  }
}

.app-dropdown {
  position: absolute;
  width: 100%;
  bottom: 6px;
  left: 0;
  transform: translateY(100%);
  @apply tw-bg-dark-blue tw-rounded-b-base;

  &__option {
    padding: 10px;
    cursor: pointer;
    @apply tw-flex tw-text-xxs tw-items-center;

    & + & {
      border-top: 1px solid theme('colors.dark-blue');
    }

    &:last-child {
      @apply tw-rounded-b-base;
    }

    &:hover {
      @apply tw-bg-blue-hover;
    }

    &:active {
      @apply tw-bg-primary;
    }
  }

  &__flag {
    width: 24px;
    margin-right: 10px;
  }
}
</style>
