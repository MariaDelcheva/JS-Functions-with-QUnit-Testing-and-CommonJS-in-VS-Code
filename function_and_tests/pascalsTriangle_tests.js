const {generatePascalsTriangle} = require ("./test_functions")

QUnit.module("generatePascalsTriangle function tests", () => {

        QUnit.test("Zero as input , return an empty jagged array ", function (assert) {
        assert.deepEqual(generatePascalsTriangle(0), [],"Zero as input , return an empty jagged array" )
      })

      QUnit.test("1 as input , return a jagged array with value 1", function (assert) {
        assert.deepEqual(generatePascalsTriangle(1), [[1]],"1 as input , return a jagged array with value 1" )
      })

      QUnit.test("5 as input , return  5 jagged arrays", function (assert) {
        assert.deepEqual(generatePascalsTriangle(5), [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]],"5 as input , return  5 jagged arrays" )
      })

      QUnit.test("8 as input , return  8 jagged arrays", function (assert) {
        assert.deepEqual(generatePascalsTriangle(8), [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1], [1, 5, 10, 10, 5, 1], [1, 6, 15, 20, 15, 6, 1], [1, 7, 21, 35, 35, 21, 7, 1]] ,"8 as input , return  8 jagged arrays" )
      })
})