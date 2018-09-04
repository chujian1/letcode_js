/**
 * 两个栈实现一个队列
 * Created by ly on 2018/9/4.
 */
let arr1 = [],arr2 = [];
function push(node) {
    arr1.push(node);
}
function pop() {
    if(arr2.length === 0){
        while(arr1.length !== 0){
            arr2.push(arr1.pop());
        }
    }
    return arr2.pop();
}
module.exports = {
    push:push,
    pop:pop
};