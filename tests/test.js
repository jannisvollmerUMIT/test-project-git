const auxiliaryAPI = require('../public/js/auxiliaryAPI');
const assert = require('assert');

// Testfall 1
const result1 = auxiliaryAPI.celsiusToFahrenheit(0);
assert.strictEqual(result1, 32);

// Testfall 2
const result2 = auxiliaryAPI.celsiusToFahrenheit(100);
assert.strictEqual(result2, 212);

// Testfall 3
const result3 = auxiliaryAPI.celsiusToFahrenheit(-40);
assert.strictEqual(result3, -40);

console.log('Alle Tests erfolgreich durchgeführt.');
