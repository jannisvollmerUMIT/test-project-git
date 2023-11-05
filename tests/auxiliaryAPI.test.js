const auxiliaryAPI = require('../public/js/auxiliaryAPI');

test('Umwandlung von Celsius in Fahrenheit (0 Grad Celsius)', () => {
  const result = auxiliaryAPI.celsiusToFahrenheit(0);
  expect(result).toBe(32);
});

test('Umwandlung von Celsius in Fahrenheit (100 Grad Celsius)', () => {
  const result = auxiliaryAPI.celsiusToFahrenheit(100);
  expect(result).toBe(212);
});

test('Umwandlung von Celsius in Fahrenheit (-40 Grad Celsius)', () => {
  const result = auxiliaryAPI.celsiusToFahrenheit(-40);
  expect(result).toBe(-40);
});
