const {nthPrime} = require ("./test_functions")

QUnit.module("nthPrime function tests", () => {
   QUnit.test("The 1th prime number is 2", function (assert) {
    assert.equal(nthPrime(1), 2 , "The 1th prime number is 2")
   })


   QUnit.test("The 5th prime number is 11", function (assert) {
    assert.equal(nthPrime(5), 11 , "The 5th prime number is 11")
   })

   QUnit.test("The 11th prime number is 29", function (assert) {
    assert.equal(nthPrime(11), 29 , "The 11th prime number is 29")
   })




})