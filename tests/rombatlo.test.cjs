const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const ts = require('typescript');
const source = fs.readFileSync(require('node:path').join(__dirname, '../src/app/rombatlo/rombatlo.math.ts'), 'utf8');
const code = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
const math = { exports: {} };
new Function('exports', 'module', code)(math.exports, math);
const { calcArea } = math.exports;
test('egész és tört átlók, valamint felcserélt átlók', () => {
  assert.equal(calcArea(10, 8), 40);
  assert.equal(calcArea(8, 10), 40);
  assert.equal(calcArea(2.5, 4), 5);
});
test('hibás hosszúságok elutasítása', () => {
  for (const bad of [0, -1, NaN, Infinity, -Infinity]) {
    assert.throws(() => calcArea(bad, 8), RangeError);
    assert.throws(() => calcArea(8, bad), RangeError);
  }
});
test('számábrázolási korlátok kezelése', () => {
  assert.equal(calcArea(1e308, 2), 1e308);
  assert.throws(() => calcArea(1e308, 1e308), RangeError);
  assert.throws(() => calcArea(Number.MIN_VALUE, Number.MIN_VALUE), RangeError);
});
