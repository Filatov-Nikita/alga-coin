<template>
  <div class="tw-space-y-4-1">
    <AppInput
      name="name"
      label="ФИО"
      placeholder="Иванов Иван Иванович"
      rules="required"
    />
    <AppInput
      name="email"
      rules="required|email"
      type="email"
      label="E-mail"
      placeholder="ivanov@domain.ru"
    />
    <AppInput
      rules="required"
      type="tel"
      name="cellphone"
      withTelPrefix
      label="Телефон"
      :telPrefix="{ label: '+1', value: '+1' }"
      placeholder="(999) 999-99-99"
    />
  </div>
  <AppCheckbox
    rules="required"
    name="Условия обслуживания"
    class="tw-text-left tw-mt-6"
  >
    Я ознакомился(ась) и соглашаюсь с
    <AppLink to="#"> Условиями обслуживания </AppLink>
    AlgaCoin
  </AppCheckbox>
  <AppButton
    class="tw-mt-7-1"
    label="Зарегистрироваться"
    fullWidth
    type="submit"
  />
  <p class="tw-mt-6">
    Уже зарегистрированы?
    <AppLink to="#"> Войти </AppLink>
  </p>
</template>

<script>
export default {

};
</script>

<style>
</style>
