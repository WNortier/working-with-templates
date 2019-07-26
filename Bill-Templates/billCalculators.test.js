describe('bill calculator' , function(){
    
    it("Should take an array of strings consisting of 'call and sms' and return 'the total cost of calls and sms's'.", function(){
        var factoryVariable = billCalculators();
        assert.deepEqual(12.5, factoryVariable.calculate("call, sms, call, call, sms, call"));
    });


})

describe('bill calculator with adjustable settings' , function(){
    
    it("Should calculate the total call cost", function(){
        var factoryVariable = billCalculators();
        assert.deepEqual(5, factoryVariable.call("call", 5));
    });

    it("Should calculate the total sms cost", function(){
        var factoryVariable = billCalculators();
        assert.deepEqual(2, factoryVariable.sms("sms", 2));
    });

    it("Should calculate the combined total cost for sms's and calls", function(){
        var factoryVariable = billCalculators();
        assert.deepEqual(7, factoryVariable.total(5, 2));
    });



})