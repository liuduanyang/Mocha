//测试脚本
var add=require('../calc').add; //导入被测试的模块
var expect=require("chai").expect;  //导入断言库 expect是一种断言格式 还有should和assert

describe("加法函数的测试",function(){
    it('0+0=0',function(){
        expect(add(0,0)).to.be.equal(0);
    });
    it('0+1=1',function(){
        expect(add(0,1)).to.be.equal(1);
    });
});

//describe是测试套件(函数) 第一个参数是测试套件的名称 后面是一个函数
//在该函数内完成测试 it是一个块(测试用例) 一个测试套件内可包含多个测试用例
//it也是个函数 第一个参数是测试用例的名字 第二个参数是函数 完成实际的测试 
//expect(add(0,0)to.be.equal(0));期望add(0,0)的结果等于0 等于则通过测试

//一个测试脚本内可包含多个describe块 且describe块可嵌套 而每个describe块内可包含一个或多个it块 it块代表测试用例




