const calculation = require('../public/js/calculation');

describe('Unit-Tests für Funktionen ohne DOM und Benutzerinteraktion', () => {
  let initialTemperature;
  let initialMode;
  let initialLevel;

  beforeAll(() => {
    // Speichern Sie die Anfangswerte, um den Status der Funktionen zu überwachen
    initialTemperature = calculation.temperature;
    initialMode = calculation.mode;
    initialLevel = calculation.level;
  });

  beforeEach(() => {
    // Setzen Sie den Status auf die Anfangswerte zurück
    calculation.temperature = initialTemperature;
    calculation.mode = initialMode;
    calculation.level = initialLevel;
  });

  test('decreaseTemperature verringert die Temperatur um 1 Grad', () => {
    calculation.decreaseTemperature();
    expect(calculation.temperature).toBe(initialTemperature - 1);
  });

  test('increaseTemperature erhöht die Temperatur um 1 Grad', () => {
    calculation.increaseTemperature();
    expect(calculation.temperature).toBe(initialTemperature + 1);
  });

  test('levelChange ändert das Level der Klimaanlage', () => {
    calculation.levelChange();
    if (initialLevel < 3) {
      expect(calculation.level).toBe(initialLevel + 1);
    } else {
      expect(calculation.level).toBe(0);
    }
  });

  test('modeChange ändert den Modus', () => {
    calculation.modeChange();
    if (initialMode === 'summer') {
      expect(calculation.mode).toBe('winter');
    } else {
      expect(calculation.mode).toBe('summer');
    }
  });
});
