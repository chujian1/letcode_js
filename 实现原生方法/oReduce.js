/**
 * Created by ly on 2018/8/27.
 * 实现数组reduce方法
 */
Array.prototype.oReduce =  function oReduce(fn,initValue) {
    let initArr = this;
    let arr = initArr.concat();
    let index = 0,newValue;
    if(initValue){
        arr.unshift(initValue);
        index = 1;
    }
    while(arr.length > 1){
        newValue = fn.call(null,arr[0],arr[1],index,initArr);
        index++;
        arr.splice(0,2,newValue);
    }
    return newValue;
};
    let arr = [1,2,3,4,5];
    console.log(arr.oReduce((prev,cur,index,arr)=>{
        return prev+cur;
    },10));
