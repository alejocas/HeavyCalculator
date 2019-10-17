/**
 * The BASE_SYSTEM constant define the numeric system,
 * actually is constant, but can be mutated in the future
 * for experimentation purposes like play with binary, octal or hex system.
 */
const BASE_SYSTEM = 10;

/**
 * The unit function U(n); is unique purpose is to
 * retrieve the units of a number, i.e.:
 * 
 * U(10) = 0
 * U(6) = 6
 * U(1313891) = 1
 * @param {Number} number 
 */
function U(number){
    return parseInt(number) % BASE_SYSTEM;
}

/**
 * The carriage function C(n); is unique purpose is to
 * retrieve the carry of a given number, dropping the units, i.e.:
 * 
 * C(7) = 0
 * C(35) = 3
 * C(8712) = 871
 * @param {Number} number 
 */
function C(number){
    number = parseInt(number);
    return (number - (number%BASE_SYSTEM))/BASE_SYSTEM
}