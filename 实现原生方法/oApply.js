/**
 * Created by ly on 2018/8/27.
 * 实现apply函数
 * 返回的是函数运算结果
 */
//使用到oCall方法
Function.prototype.oCall = function(obj){
    obj._fn_ = this;
    obj._fn_(...arguments);
    delete obj._fn_;
};
Function.prototype.oApply = function(obj,arr){
    let arg = [];
    for(let i = 0 ; i < arr.length; i++){
        arg.push(arr[i]);
    }
    return this.oCall(obj,...arg);

};
/*Function.prototype.Apply = function(obj,arr){
    let args = [];
    let val ;
    for(let i = 0 ; i<arr.length ; i++){
        args.push( 'arr[' + i + ']' ) ;
    }
    obj._fn_ = this;
    val = eval( 'obj._fn_(' + args + ')' );
    delete obj._fn_;
    return val
};*/
let Cat = {
    say: function() {
        console.log(this.content);
    },
    content: 'miao~'
};
let Dog = { content: 'wang~' };
Cat.say.oApply(Dog,[]);

