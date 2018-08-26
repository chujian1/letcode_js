/**
 * Created by ly on 2018/8/26.
 * 睡眠排序
 */
function sleepSort(arr) {
    for(let i = 0 ,length = arr.length;i < length; i++){
        setTimeout(()=>console.log(arr[i]),arr[i])
    }
}
sleepSort([5,2,3,9,8,6,1,7,4]);