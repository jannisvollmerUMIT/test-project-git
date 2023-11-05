const calculation = require('../public/js/calculation');

// Mock für globale Variablen
let isOn = true;
let temperature = 25;
let level = 2;
let mode = 'summer';

describe('Funktionen für die Steuerung', () => {

  test('decreaseTemperature verringert die Temperatur um 1 Grad', () => {
    const initialTemperature = temperature;
    decreaseTemperature();
    expect(temperature).toBe(initialTemperature - 1);
    // Erwartetes Verhalten: Die Temperatur sollte um 1 Grad verringert werden.
  });

  test('increaseTemperature erhöht die Temperatur um 1 Grad', () => {
    const initialTemperature = temperature;
    increaseTemperature();
    expect(temperature).toBe(initialTemperature + 1);
    // Erwartetes Verhalten: Die Temperatur sollte um 1 Grad erhöht werden.
  });

  test('levelChange ändert das Lüfterlevel', () => {
    const initialLevel = level;
    levelChange();
    if (initialLevel < 3) {
      expect(level).toBe(initialLevel + 1);
    } else {
      expect(level).toBe(0);
    }
    // Erwartetes Verhalten: Das Level sollte geändert werden (von 0 bis 3).
  });

  test('modeChange ändert den Modus', () => {
    const initialMode = mode;
    modeChange();
    if (initialMode === 'summer') {
      expect(mode).toBe('winter');
    } else {
      expect(mode).toBe('summer');
    }
    // Erwartetes Verhalten: Der Modus sollte geändert werden (von "summer" zu "winter" oder umgekehrt).
  });
});
