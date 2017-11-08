import calc from '../calc';
import chai from 'chai';

let add=calc.add;
let expect=chai.expect;

describe('ES6版 加法函数的测试',function(){
    it('0+0=0',function(){
        expect(add(0,0)).to.be.equal(0);
    });

    it('0+1=1',function(){
        expect(add(0,1)).to.be.equal(1);
    });
});