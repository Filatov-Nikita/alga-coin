import { defineRule } from "vee-validate";
import { required, email, min } from "@vee-validate/rules";

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

function confirmed(value, [secondValue]) {
  if (value !== secondValue) return "Пароли не совпадают";
  return true;
}

function password(value) {
  if (typeof value === "string" && value.length > 6) return true;
  return "Пароль должен быть больше 6 знаков";
}

function walletAddress(value) {
  if (!value) return true;
  if (value.length !== 42 || !value.startsWith("0x"))
    return "Проверьте правильность ввода адреса кошелька";
  return true;
}

// глобальные правила
const rules = {
  required,
  email,
  min,
  decimal,
  cellphone,
  confirmed,
  password,
  walletAddress,
};

for (let ruleName in rules) {
  defineRule(ruleName, rules[ruleName]);
}
