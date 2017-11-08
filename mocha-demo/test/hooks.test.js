var add=require('../calc').add; 
var expect=require("chai").expect;  

describe("加法函数的测试",function(){
    before(function(){
        console.log("before");
    });
    after(function(){
        console.log("after");
    });
    beforeEach(function(){
        console.log("beforeEach");
    });
    afterEach(function(){
        console.log("afterEach");
    });
    it('0+0=0',function(){     
        expect(add(0,0)).to.be.equal(0);
    });
    it('0+1=1',function(){
        expect(add(0,1)).to.be.equal(1);
    });
});

//注意查看运行结果

