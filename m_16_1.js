//mocha和代码覆盖率工具整合

/*
衡量覆盖率的指标
行覆盖率(line coverage)：是否每一行都执行了？
函数覆盖率(function coverage)：是否每个函数都调用了？
分支覆盖率(branch coverage)：是否每个if代码块都执行了？
语句覆盖率(statement coverage)：是否每个语句都执行了？

用来测试代码覆盖率的软件：Istanbul
安装 Istanbul：npm install istanbul -D
*/

//创建 simple.js 填入内容

//命令行：node_modules/.bin/istanbul cover simple.js

//设置覆盖率门槛 (即 指定项覆盖率达不到门槛时报错)
//命令行：node_modules/.bin/istanbul check-coverage --statement 90
//即 执行测试脚本 并 设置statement(行覆盖率指标)的门槛为90% 不达到90%则报错
//达到指标则不报错 只测试statement
//会生成网页形式的报表 存放在mocha-demo目录下的coverage文件夹(执行完自动创建)内

//对calc进行修改 添加了if语句..

//结合mocha和istanbul来测试calc
//命令行：node_modules/.bin/istanbul cover node_modules/.bin/_mocha -- test/calc.test.js
//               运行istanbul               运行mocha                 运行测试脚本 

//如果不成功 是因为test目录下有个mocha.opts文件 编辑文件 删除第四行内容

//在浏览器中二者也是可以结合使用的