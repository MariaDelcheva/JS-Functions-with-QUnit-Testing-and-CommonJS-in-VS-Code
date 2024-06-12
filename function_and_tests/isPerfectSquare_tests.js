const {isPerfectSquare} = require ("./test_functions")

QUnit.module("isPerfectSquare function tests", () => {
    QUnit.test("1 as input , return true", function (assert) {
        assert.ok(isPerfectSquare(1), "1 as input , return true")
    })

    QUnit.test("4 as input , return true", function (assert) {
        assert.ok(isPerfectSquare(4), "4 as input , return true")
    })

    QUnit.test("9 as input , return true", function (assert) {
        assert.ok(isPerfectSquare(9), "9 as input , return true")
    })

    QUnit.test("16 as input , return true", function (assert) {
        assert.ok(isPerfectSquare(16), "16 as input , return true")
    })

    QUnit.test("2 as input , return false", function (assert) {
        assert.notOk(isPerfectSquare(2), "2 as input , return false")
    })

    QUnit.test("15 as input , return false", function (assert) {
        assert.notOk(isPerfectSquare(15), "15 as input , return false")
    })
})