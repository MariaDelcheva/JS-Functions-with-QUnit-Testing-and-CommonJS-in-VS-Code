const {isEven} = require ("./test_functions.js")

QUnit.module("isEven function tests", () => {
    QUnit.test("Even numbers", function (assert) {
        assert.ok (isEven (2), "Even number passed");
        assert.ok (isEven (4), "Even number passed");
        assert.ok (isEven (200), "Even number passed");
    })

    QUnit.test("Odd numbers", function(assert) {
        assert.notOk(isEven(3), "Odd number passed");
        assert.notOk(isEven(7), "Odd number passed");
        assert.notOk(isEven(71), "Odd number passed");
    })
    
    QUnit.test("Zero as input", function (assert) {
        assert.ok(isEven(0),"0 number passed") 
    })

    QUnit.test("Negative numbers",function (assert) {
        assert.ok(isEven(-2), "-2 negative odd  number passed")
        assert.ok(isEven(-10), "-10 negative odd  number passed")
        assert.ok(isEven(-222), "-222 negative odd  number passed")
    })
})