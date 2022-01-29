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
  return pattern.test(value);
}

function confirmed(value, [secondValue]) {
  return value === secondValue;
}

function password(value) {
  return typeof value === "string" && value.length > 6;
}

function walletAddress(value) {
  if (!value) return true;
  if (value.length !== 42 || !value.startsWith("0x")) return false;
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
