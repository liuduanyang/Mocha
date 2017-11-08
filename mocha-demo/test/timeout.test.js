var expect=require('chai').expect;

describe('异步测试',function(){
    it('测试应该在 4000ms 后结束',function(done){
        var x=true;

        var f=function(){
            x=false;
            expect(x).to.be.not.ok;
            done();      //告诉mocha异步任务结束
        }

        setTimeout(f,4000);
        console.log("测试正在运行...");
    });
});

//会失败 mocha默认 异步任务2000ms内未完成则为失败 可通过参数设置
//解决办法： 运行命令：npm test --timeout 5000 test/timeout.test.js