//技术细节二
//ES6测试脚本

//在test目录下创建测试脚本并写入内容 ES6.test.js
//安装转码的工具babel 将ES6代码转为ES5
//命令行：npm install babel-core babel-preset-es2015 -D

//在browser目录下 编辑 .babelrc 文件

//执行测试脚本 命令：
//npm test --compilers js:babel-core/register test/ES6.test.js