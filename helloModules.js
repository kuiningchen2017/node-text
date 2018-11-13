let msg = 'hellomodule';
// 通过module.exports.xxx 和 exports.xxx 向外暴露方法或属性
// 在js文件模块中 还存在一个module对象 它代表的是模块自身
module.exports = {
  sum: function (a,b) {
    console.log(a+b);
    console.log(msg);
  }
};
console.log(module);
console.log(module.exports);
console.log(exports);
