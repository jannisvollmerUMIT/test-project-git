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

test('Fahrenheit in Celsius umwandeln (32 Grad Fahrenheit)', () => {
  const result = auxiliaryAPI.fahrenheitToCelcius(32);
  expect(result).toBe(0); // 32 °F entsprechen 0 °C
});

test('Fahrenheit in Celsius umwandeln (100 Grad Fahrenheit)', () => {
  const result = auxiliaryAPI.fahrenheitToCelcius(100);
  expect(result).toBe(37.77777777777778); // 100 °F entsprechen etwa 37.78 °C (gerundet)
});

test('Fahrenheit in Celsius umwandeln (-40 Grad Fahrenheit)', () => {
  const result = auxiliaryAPI.fahrenheitToCelcius(-40);
  expect(result).toBe(-40); // -40 °F entsprechen -40 °C
});
