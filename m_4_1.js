//Mocha的基本用法

//Mocha命令行的基本用法
//mocha命令后可跟多个测试脚本 用空格隔开
//例如：mocha的目录/mocha 脚本目录/脚本a.js 脚本目录/脚本b.js 脚本目录/脚本c.js

//mocha会默认执行test文件夹内的所有测试脚本
//即当脚本都在test目录内时 上面例如那 可简写为 mocha的目录/mocha

//创建一个date.js模块
//然后修改index.js  将date.js引入

//为date.js创建一个自动化测试脚本  在test文件夹内

//如果test文件夹下有子文件夹 则直接运行mocha时 子文件夹内的脚本不会执行
//解决办法 命令行：mocha目录/mocha --recursive

//mocha命令行支持一些通配符 例如shell的或node的

//mocha测试框架负责具体组织的 包括结果显示 运行命令 识别describe it 等
//而 chai是断言库 作用是负责断言即 expect那一套 