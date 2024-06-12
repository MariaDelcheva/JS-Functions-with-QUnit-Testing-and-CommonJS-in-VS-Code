const {fibonacci} = require ("./test_functions")

QUnit.module("Fibonacci function tests" , () => {
    QUnit.test("Zero as input,returns an empty array", function (assert) {
        assert.deepEqual(fibonacci(0), [], "Zero as input,returns an empty array")
})

QUnit.test("1 as input, return an array with one element 0", function (assert) {
    assert.deepEqual(fibonacci(1), [0], "1 as input, return an array with one element 0")
})

QUnit.test("5 as input, return an array with 5 elements", function (assert) {
    assert.deepEqual(fibonacci(5), [0,1,1,2,3], "5 as input, return an array with 5 element")
})

QUnit.test("10 as input, return an array with 10 elements", function (assert) {
    assert.deepEqual(fibonacci(10), [0,1,1,2,3,5,8,13,21,34], "10 as input, return an array with 10 elements")
})




})
