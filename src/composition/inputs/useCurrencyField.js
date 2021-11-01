import { computed, ref } from "vue";
import useInput from "src/composition/inputs/useInput";

export default function (name, props, opts) {
  const display = ref("");
  const prevVal = ref("");
  const prettyCurrency = computed(() => {
    return this.currency.toUpperCase();
  });

  const { field, validationListeners } = useInput(name, props, opts);
  return {
    field,
    prettyCurrency,
    validationListeners,
    handleChange: (e) => handleChange(e, field.handleChange, prevVal, display),
  };
}

function setCursor(el, position = 0) {
  if (!el) return;

  if (el === document.activeElement) {
    el.setSelectionRange(position, position);

    setTimeout(function () {
      el.setSelectionRange(position, position);
    }, 0);
  }
}

// !!! не учтены случаи вставки в произвольное место строки когда удаляется 2 или более пробела.
function calcPosition(prevVal = "", val = "", currentPos) {
  // если при удалении символа удалился еще и один разделяющий пробел
  if (prevVal.length - val.length === 2) {
    // if(val.length === ) return currentPos;
    // сдвинуть позицию курсора, но не свдигать, если курсор уже дошел до конца
    currentPos = Math.max(0, --currentPos);
  }
  // если при добавлении символа добавился один разделяющий пробел
  else if (val.length - prevVal.length === 2) {
    currentPos += 1;
  }

  return currentPos;
}

function cleanValue(value) {
  if (value === "") return "";

  // убирает символы кроме цифр и точек
  let cleanedVal = value.replace(/[^\d\.]/g, "");
  // убирает точку вначале
  cleanedVal = cleanedVal.replace(/^\./g, "");
  // все дублирующиеся точки делает одной
  cleanedVal = cleanedVal.replace(/\.{2,}/g, ".");
  // уюирает лишние точки
  cleanedVal = cleanedVal.replace(/(?<normal>\d+\.\d+)\./g, "$<normal>");

  return cleanedVal;
}

function prettyValue(val) {
  if (val === "") return "";

  // убирает точку в конце строки если есть
  val = val.replace(/\.$/, "");

  // берет целую и дробную часть числа
  const parts = val.match(/(?<point>\d+)(\.(?<decimal>\d+))?/);
  const { point = "", decimal = "" } = parts.groups || {};
  // собирает массив из разбитого целого числа на трехзначные числа
  const pointParts = point.match(/\d{1,3}(?=(\d{3})*$)/g);

  // склеивает трехзначные числа и добавляет дробную часть если есть
  return `${pointParts.join(" ")}${decimal ? `.${decimal}` : ""}`;
}

function updateValue(el, display, unmaskedVal, sign, handleChange) {
  // prettyValue убирает точку в конце поэтому ее нужно добавить
  const hasEndDot = /\.$/.test(unmaskedVal);

  const withSignVal = (sign ? sign : "") + prettyValue(unmaskedVal);

  display.value = el.value = withSignVal + (hasEndDot ? "." : "");

  // запускает проверку внутри AppInput и сохраняет внутреннее значение
  handleChange(display.value);
}

function handleChange(e, handleChangeNative, prev, display) {
  const el = e.target;

  if (el.value === "") return;

  let currentPos = el.selectionEnd;

  // проверяет есть ли знак в начале строки, если есть сохранит в переменную
  let sign;
  if (/^[\+\-]/.test(el.value)) {
    sign = el.value[0];
  }

  const unmaskedVal = cleanValue(el.value);

  updateValue(el, display, unmaskedVal, sign, handleChangeNative);

  // расчитать новое положение курсора
  currentPos = calcPosition(prev.value, display.value, currentPos);
  // задать курсор элементу
  setCursor(el, currentPos);

  prev.value = display.value;
}
