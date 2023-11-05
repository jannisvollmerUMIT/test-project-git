const calculation = require('../public/js/calculation');

describe('Unit-Tests für Funktionen ohne DOM und Benutzerinteraktion', () => {
  let initialTemperature;

  test('decreaseTemperature verringert die Temperatur um 1 Grad', () => {
    calculation.decreaseTemperature();
    expect(calculation.temperature).toBe(initialTemperature - 1);
  });

  test('increaseTemperature erhöht die Temperatur um 1 Grad', () => {
    calculation.increaseTemperature();
    expect(calculation.temperature).toBe(initialTemperature + 1);
  });
});
