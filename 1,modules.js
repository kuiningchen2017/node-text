/* 模块化简介
* 在node中已经为我们内置了许多可以直接使用的模块，所有并不是所有的模块都需要下载
*/
// 引入fs（file system）文件系统的模块
// const 变量名 = require（‘模块名’）
const fs = require('fs');
console.log(fs);
const hm = require('./helloModules');
hm.sum(1,2);
hm.sum(3,4);
hm.sum(5,6);
/*
* 在node中，模块分为三类，一类是底层由C++编写的内建模块，一类是node提供的核心模块 比如fs文件系统的模块
* 还有一类就是用户编写的模块 称为文件模块 自定义模块
* */
