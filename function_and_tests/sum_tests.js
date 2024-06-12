const {sum} = require ("./test_functions.js")    

QUnit.module ("sum function tests", () => {
    QUnit.test ("Adding two possitive numbers", function (assert){
        assert.equal(sum(2,3),5, "Adding two possitive numbers")
    })

    QUnit.test ("Adding possitive and negative numbers", function (assert){
        assert.equal(sum(5,-3),2, "Adding possitive and negative numbers")
    })

    QUnit.test ("Adding two negative numbers", function(assert) {
        assert.equal(sum(-2,-3),-5, "Adding two negative numbers")
    })
    
    QUnit.test("Adding two floating-point numbers", function(assert) {
        assert.equal (Math.floor(sum(0.2, 0.3)*10), 5, "Adding two floating-point numbers")
        
    })

})