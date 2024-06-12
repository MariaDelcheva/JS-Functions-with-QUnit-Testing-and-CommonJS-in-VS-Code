const {factorial} = require ("./test_functions.js")

QUnit.module("Factorial function tests" , () => {
    QUnit.test("Possitive number", function (assert) {
        assert.equal(factorial(5), 120 , "Possitive number")
    })

    QUnit.test("Zero as input", function (assert) {
        assert.equal(factorial(0), 1 ,"Zero as input")
    })

    QUnit.test("Negative as input" , function (assert) {
        assert.equal(factorial(-1), 1 , "Negative as input ")
    })

})