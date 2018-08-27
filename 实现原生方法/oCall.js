/**
 * Created by ly on 2018/8/27.
 * 实现call方法
 * 返回的是函数运算结果
 * 原理：
 * let o = {
    fn:function(){
        console.log(this);
    }
}
 o.fn() //  Object {fn: function}
 */
Function.prototype.oCall = function(obj){
    obj._fn_ = this;  //在obj上添加_fn_属性，值是this
    obj._fn_(...arguments);       //在obj上调用函数,那函数的this值就是obj.
    delete obj._fn_; // 再删除obj的_fn_属性,去除影响.
    //_fn_ 只是个属性名 你可以随意起名，但是要注意可能会覆盖obj上本来就有的属性
};
let Cat = {
    say: function() {
        console.log(this.content);
    },
    content: 'miao~'
};
let Dog = { content: 'wang~' };
Cat.say.oCall(Dog);