//命令行参数

/*
简化 目录/mocha 该命令

将package.json文件内的scripts属性内的值(对象)的test属性的值改为"mocha"
在命令行直接 npm test    即可自动运行mocha程序 当然可以自己加参数

运行时 要在test所在目录下运行  即mocha-demo目录下运行
*/

/*
参数详解
注：mocha 为调用mocha的命令 可能为npm test等

--reporter
用来设置报告格式(运行结果的显示)
默认的格式等同于 mocha --reporter spec
查看报告支持的格式  mocha --reporters
应用格式：mocha --reporter 格式名

推荐一个好看的报告格式 需要安装
npm install mochawesome -D
然后 mocha --reporter mochawesome 即可
特点：会生成一个html格式的网页版报告
*/

/*
--watch 
用来自动监视测试脚本
当脚本发生变化时 监视变化并自动打印变化后的报告
*/

/*
--bail 
当遇到失败的测试案例时 测试会终止
*/

/*
--grep
用来进行匹配 会匹配测试套件(describe)的名字和测试案例的名字(it) 匹配成功执行 不成功的则不执行
匹配到测试套件的名字 则执行整个测试套件
匹配到测试案例的名字 则执行该案例
例如：
mocha --grep 加法 
会对 加法 进行匹配(即包含 加法)

mocha --grep "=2"
会对 =2   进行匹配
*/

/*
--invert
用来执行非匹配的   和--grep相反
用法：
mocha --grep 加法 -i
-i即为--Invert的缩写
*/

/*
--recursive
详情见 w_4_1.js
*/

/*
需要添加多个参数时 参数间用空格隔开
例如：
mocha --recursive --reporter tap --bial
*/

/*
配置文件 mocha.opts

打开该配置文件 添加(只是个例子)下面信息
--recursive
--reporter tap
--bial

然后当需要执行时 直接 mocha 即可 也就是说参数(上面设置的参数)都直接带上了
*/