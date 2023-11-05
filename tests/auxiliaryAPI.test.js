// Dieses Testskript nutzt Jest als Framework zum Testen
const auxiliaryAPI = require('../public/js/auxiliaryAPI');

// Tests für die Umwandlung von Celsius nach Fahrenheit
// Input: 0 Grad Celsius
// erwarteter Output: 32 Grad Fahrenheit
test('Umwandlung von Celsius in Fahrenheit (0 Grad Celsius)', () => {
  const result = auxiliaryAPI.celsiusToFahrenheit(0);
  expect(result).toBe(32);
});

// Input: 100 Grad Celsius
// erwarteter Output: 212 Grad Fahrenheit
test('Umwandlung von Celsius in Fahrenheit (100 Grad Celsius)', () => {
  const result = auxiliaryAPI.celsiusToFahrenheit(100);
  expect(result).toBe(212);
});

// Input: -40 Grad Celsius
// erwarteter Output: -40 Grad Fahrenheit
test('Umwandlung von Celsius in Fahrenheit (-40 Grad Celsius)', () => {
  const result = auxiliaryAPI.celsiusToFahrenheit(-40);
  expect(result).toBe(-40);
});

// Tests für die Umwandlung von Fahrenheit nach Celsius
// Input: 32 Grad Fahrenheit
// erwarteter Output: 0 Grad Celsius
test('Fahrenheit in Celsius umwandeln (32 Grad Fahrenheit)', () => {
  const result = auxiliaryAPI.fahrenheitToCelcius(32);
  expect(result).toBe(0);
});

// Input: 100 Grad Fahrenheit
// erwarteter Output: 37.78 Grad Celsius
test('Fahrenheit in Celsius umwandeln (100 Grad Fahrenheit)', () => {
  const result = auxiliaryAPI.fahrenheitToCelcius(100);
  expect(result).toBe(37.77777777777778);
});

// Input: -40 Grad Fahrenheit
// erwarteter Output: -40 Grad Celsius
test('Fahrenheit in Celsius umwandeln (-40 Grad Fahrenheit)', () => {
  const result = auxiliaryAPI.fahrenheitToCelcius(-40);
  expect(result).toBe(-40);
});


// Mock für den aktuellen Zeitpunkt (myDate)
const mockDate = new Date('2022-01-01 08:00'); // beispielhaftes setzen der Uhrzeit auf 8:00 Uhr morgens

describe('getGreetingDependOnTime', () => {
  beforeAll(() => {
    // Vor allen Tests die Date-Funktion mocken
    global.Date = class extends Date {
      constructor() {
        super();
        return mockDate;
      }
    };
  });

  afterAll(() => {
    // Nach allen Tests die Date-Funktion wiederherstellen
    global.Date = Date;
  });

  test('Begrüßung am Morgen (zwischen 6 und 21 Uhr)', () => {
    // Uhrzeit ist hier auf 8 Uhr gestellt (siehe oben)
    const result = auxiliaryAPI.getGreetingDependOnTime(mockDate);
    expect(result).toBe('Guten Morgen');
  });

  test('Begrüßung am Abend (nach 21 Uhr)', () => {
    // Aktualisieren der mockDate auf eine Uhrzeit nach 21 Uhr
    mockDate.setHours(22);
    const result = auxiliaryAPI.getGreetingDependOnTime(mockDate);
    expect(result).toBe('Guten Abend');
  });

  test('Begrüßung am Abend (vor 6 Uhr)', () => {
    // Aktualisieren der mockDate auf eine Uhrzeit vor 6 Uhr
    mockDate.setHours(5);
    const result = auxiliaryAPI.getGreetingDependOnTime(mockDate);
    expect(result).toBe('Guten Abend');
  });
});