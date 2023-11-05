
const calculation = require('../public/js/calculation');

// Mock für DOM-Elemente
let powerButton;
let temperatureObj;
let levelObj;
let modusObj;

beforeEach(() => {
  // Erstellen Sie DOM-Elemente für Ihre Tests
  document.body.innerHTML = `
    <button id="on-off-button">Power</button>
    <p id="temperature"></p>
    <p id="level"></p>
    <p id="modus"></p>
  `;

  powerButton = document.getElementById('on-off-button');
  temperatureObj = document.getElementById('temperature');
  levelObj = document.getElementById('level');
  modusObj = document.getElementById('modus');
});

describe('Unit-Tests für Funktionen ohne DOM und Benutzerinteraktion', () => {
  test('decreaseTemperature verringert die Temperatur um 1 Grad', () => {
    const initialTemperature = calculation.temperature;
    calculation.decreaseTemperature();
    expect(calculation.temperature).toBe(initialTemperature - 1);
  });

  test('increaseTemperature erhöht die Temperatur um 1 Grad', () => {
    const initialTemperature = calculation.temperature;
    calculation.increaseTemperature();
    expect(calculation.temperature).toBe(initialTemperature + 1);
  });

  test('levelChange ändert das Level der Klimaanlage', () => {
    const initialLevel = calculation.level;
    calculation.levelChange();
    if (initialLevel < 3) {
      expect(calculation.level).toBe(initialLevel + 1);
    } else {
      expect(calculation.level).toBe(0);
    }
  });

  test('modeChange ändert den Modus', () => {
    const initialMode = calculation.mode;
    calculation.modeChange();
    if (initialMode === 'summer') {
      expect(calculation.mode).toBe('winter');
    } else {
      expect(calculation.mode).toBe('summer');
    }
  });
});
