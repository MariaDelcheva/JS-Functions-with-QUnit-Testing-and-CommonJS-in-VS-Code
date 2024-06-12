const {isPalindrom} = require ("./test_functions")

QUnit.module("isPalindrom function tests", () => {
    QUnit.test("Single palindrom word" , function (assert) {
        assert.ok(isPalindrom("racecar"), "Single palindrom word")
    })

    QUnit.test("Multi words palindrom", function (assert) {
        assert.ok(isPalindrom("A man, a plan, a canal, Panama!"), "Multi words palindrom")
    })

    QUnit.test("Single word non palindrom", function (assert) {
        assert.notOk(isPalindrom("hello") ,"Single word non palindrom" )
    })

    QUnit.test("Еmpty string as input is not a palindrom", function (assert) {
        assert.notOk(isPalindrom(""), "Еmpty string as input is not a palindrom")
    })
})