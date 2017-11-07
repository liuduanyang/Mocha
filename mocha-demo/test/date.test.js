var today=require('../date').today;
var expect=require('chai').expect;

describe('today函数的测试',function(){
    it('今天是 2017-11-07',function(){
        expect(today()).to.be.equal('2017-11-07');
    });
});