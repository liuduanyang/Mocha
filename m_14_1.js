//技术细节二
//测试前端代码

//在mocha-demo目录下创建一个文件夹 browser
//将mocha的用于测试前端代码的脚手架代码放到browser文件夹下
//命令行：npm test init browser/
//mocha会在browser文件夹内创建四个文件
//我们用到的文件有:index.html tests.js（其它的 mocha.css是index的样式 mocha.js是主程序）

//在browser目录下创建被测模块 add.js
//在browser目录下修改自动化测试脚本 tests.js(初始化时自动创建)

//修改index.html文件 引入 add.js 以及 chai断言库

//将所有代码打包放到window环境下执行

//打开index.html 执行测试 并显示结果  单击结果可显示具体代码