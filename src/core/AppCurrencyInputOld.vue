<template>
  <AppInput
    v-bind="$props"
    type="text"
    :value="display"
    @input="onInput"
    rules="decimal"
  >
    <template #append>
      <span class="tw-text-secondary">{{ prettyCurrency }}</span>
    </template>
  </AppInput>
</template>

<script>
import AppInput from './AppInput';

export default {
  created() {
    this.oldValue = '';
  },
  props: {
    currency: {
      required: true,
      type: String,
    },
    ...AppInput.props,
  },
  data() {
    return {
      display: '',
    };
  },
  emits: ['update:modelValue'],
  computed: {
    prettyCurrency() {
      return this.currency.toUpperCase();
    },
  },
  methods: {
    setCursor(el, position = 0) {
      if (!el) return;

      if (el === document.activeElement) {
        el.setSelectionRange(position, position);

        setTimeout(function () {
          el.setSelectionRange(position, position);
        }, 0);
      }
    },
    // !!! не учтены случаи вставки в произвольное место строки когда удаляется 2 или более пробела.
    calcPosition(oldVal = '', val = '', currentPos) {
      // если при удалении символа удалился еще и один разделяющий пробел
      if (oldVal.length - val.length === 2) {
        // if(val.length === ) return currentPos;
        // сдвинуть позицию курсора, но не свдигать, если курсор уже дошел до конца
        currentPos = Math.max(0, --currentPos);
      }
      // если при добавлении символа добавился один разделяющий пробел
      else if (val.length - oldVal.length === 2) {
        currentPos += 1;
      }

      return currentPos;
    },
    cleanValue(value) {
      if (value === '') return '';

      // убирает символы кроме цифр и точек
      let cleanedVal = value.replace(/[^\d\.]/g, '');
      // убирает точку вначале
      cleanedVal = cleanedVal.replace(/^\./g, '');
      // все дублирующиеся точки делает одной
      cleanedVal = cleanedVal.replace(/\.{2,}/g, '.');
      // уюирает лишние точки
      cleanedVal = cleanedVal.replace(/(?<normal>\d+\.\d+)\./g, '$<normal>');

      return cleanedVal;
    },
    prettyValue(val) {
      if (val === '') return '';

      // убирает точку в конце строки если есть
      val = val.replace(/\.$/, '');

      // берет целую и дробную часть числа
      const parts = val.match(/(?<point>\d+)(\.(?<decimal>\d+))?/);
      const { point = '', decimal = '' } = parts.groups || {};
      // собирает массив из разбитого целого числа на трехзначные числа
      const pointParts = point.match(/\d{1,3}(?=(\d{3})*$)/g);

      // склеивает трехзначные числа и добавляет дробную часть если есть
      return `${pointParts.join(' ')}${decimal ? `.${decimal}` : ''}`;
    },
    updateValue(el, unmaskedVal, sign, handleChange) {
      // prettyValue убирает точку в конце поэтому ее нужно добавить
      const hasEndDot = /\.$/.test(unmaskedVal);

      const withSignVal = (sign ? sign : '') + this.prettyValue(unmaskedVal);

      this.display = el.value = withSignVal + (hasEndDot ? '.' : '');

      // запускает проверку внутри AppInput и сохраняет внутреннее значение
      handleChange(this.display);

      this.$emit('update:modelValue', unmaskedVal);
    },
    onInput(e, handleChange) {
      const el = e.target;

      if (el.value === '') return;

      let currentPos = el.selectionEnd;

      // проверяет есть ли знак в начале строки
      let sign;
      if (/^[\+\-]/.test(el.value)) {
        sign = el.value[0];
      }

      const unmaskedVal = this.cleanValue(el.value);

      this.updateValue(el, unmaskedVal, sign, handleChange);

      // расчитать новое положение курсора
      currentPos = this.calcPosition(this.oldValue, this.display, currentPos);
      // задать курсор элементу
      this.setCursor(el, currentPos);

      this.oldValue = this.display;
    },
  },
  watch: {
    value: {
      handler(val) {
        // this.display = this.prettyValue(val);
      },
      immediate: true,
    },
  },
};
</script>
