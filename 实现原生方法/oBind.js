/**
 * Created by ly on 2018/8/27.
 * 手动实现bind方法
 */
Function.prototype.oBind = function(obj) {
    //因为this不能作为左值被赋值，所以借助apply将this更改
    return arguments => this.apply(obj, arguments);
};
let Cat = {
    say: function() {
        console.log(this.content);
    },
    content: 'miao~'
};
let Dog = { content: 'wang~' };
Cat.say.oBind(Dog)();
