const {validacionJugadores, transformar_nombre_jugador} = require("./tresenraya.js");
const assert = require('assert');

assert.strictEqual(validacionJugadores("", ""), false);
assert.strictEqual(validacionJugadores("jugador1", ""), false);
assert.strictEqual(validacionJugadores("aa", "aa"), false);
assert.strictEqual(validacionJugadores("aa", "bb"), true);
assert.strictEqual(validacionJugadores(" ", "bb"), false);
assert.strictEqual(validacionJugadores("  ", "bb"), false);
assert.strictEqual(validacionJugadores("a", "        "), false);
assert.strictEqual(validacionJugadores(" a ", " b "), true);

assert.strictEqual(transformar_nombre_jugador(" a "), "a");
assert.strictEqual(transformar_nombre_jugador("        a      "), "a");
assert.strictEqual(transformar_nombre_jugador("1        a      "), "1        a");
assert.strictEqual(transformar_nombre_jugador("paco"), "paco");
assert.strictEqual(transformar_nombre_jugador("   paco"), "paco");

console.log("Test OK");
