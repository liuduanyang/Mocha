//主程序

var add=require("./calc").add;
var today=require('./date').today;

var x=0;
var y=0;
var z=add(x,y);

console.log('x+y='+z);
console.log(today());