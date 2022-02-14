/**
 * @jest-environment jsdom
 */


const { render, fireEvent} = require('@testing-library/vue');
const AppInput = require('../src/core/AppInput.vue').default;

test("Ввод валюты в инпут", async () => {
  const { getByLabelText } = render(AppInput, {
    props: {
      name: "тест",
      label: "тест инпут",
      currency: true,
    },
  });

  const input = getByLabelText('тест инпут');

  await fireEvent.update(input, 'qa');

  expect(input.value).toBe('1');
});
