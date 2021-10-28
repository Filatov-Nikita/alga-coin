import { defineRule, configure } from "vee-validate";
import { required, email, min } from "@vee-validate/rules";
import { localize, setLocale } from "@vee-validate/i18n";
import ru from "@vee-validate/i18n/dist/locale/ru.json";

// создает сообщения для правил на русском
configure({
  generateMessage: localize({ ru }),
});

// переключает режим отображения ошибок на русский
setLocale("ru");

// function cellphone(value) {}

function decimal(value) {
  // паттерн для чисел со знаком, дробная часть опциональна
  const pattern = /^[\+,\-]?[\d\s]+(\.\d+)?$/;

  if (!pattern.test(value)) {
    return "Число должно быть целым или дробным";
  }

  return true;
}

function cellphone(value) {
  // паттерн для чисел со знаком, дробная часть опциональна
  const pattern = /^\(\d{3}\)\s\d{3}\-\d{2}\-\d{2}$/;

  if (!pattern.test(value)) {
    return "Номер телефона введен некорректно";
  }

  return true;
}

// глобальные правила
const rules = { required, email, min, decimal, cellphone };

for (let ruleName in rules) {
  defineRule(ruleName, rules[ruleName]);
}
