var add=require('../calc').add; 
var expect=require("chai").expect;  

describe("加法函数的测试",function(){
    // it.only('0+0=0',function(){          //测试only时将我打开
    //     expect(add(0,0)).to.be.equal(0);
    // });
    it.skip('0+1=1',function(){
        expect(add(0,1)).to.be.equal(1);
    });
});

//整个test文件夹内将只执行带.only的这个it  其它的it或其它的describe都不会执行
//only可以给多个文件 比如 可将本文件内这两个或其他文件的it或describe都加上only方法

//与only不同的是 给it或describe加上skip方法时 测试时会跳过
