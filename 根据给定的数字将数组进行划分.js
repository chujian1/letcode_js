/**
 * 根据给定的数字将数组进行划分
 * Created by ly on 2018/9/4.
 * input:[1,2,3,4,5] 3
 * output:[[1,2,3],[4,5]]
 */
function chunk(arr,count) {
    let res = [];
    for(let i = 0 ,l = arr.length; i < l ; i+=count){
        res.push(arr.slice(i,count+i));
    }
    return res;
}
console.log(chunk([1,2,3,4,5],3));