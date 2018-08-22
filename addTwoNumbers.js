/**
 * Created by ly on 2018/8/22.
 */
/*
给定两个非空链表来表示两个非负整数。
位数按照逆序方式存储，它们的每个节点只存储单个数字。
将两数相加返回一个新的链表。
你可以假设除了数字 0 之外，这两个数字都不会以零开头。
 input :[2,4,3],[5,6,4]
 output:[7,0,8]
*/
var addTwoNumbers = function(l1, l2) {
    let num1 = parseInt(l1.reverse().join(""));
    let num2 = parseInt(l2.reverse().join(""));
    let sum = (num1 + num2).toString().split("").reverse();
    let arr = [];
    for(let item of sum){
        arr.push(parseInt(item));
    }
    console.log(arr);
};

addTwoNumbers([2,4,3],[5,6,4]);