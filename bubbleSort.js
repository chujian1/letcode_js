/**
 * Created by ly on 2018/8/25.
 */
/*
冒泡排序
*/
function bubbleSort(arr) {
    let item = 0;
    let length = arr.length - 1;
    for(let i = length; i >=0 ;i --){
        for(let j = 0 ; j < i ; j ++){
            if(arr[j] > arr[j+1]){
                item = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = item;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([51,18,35,4,29,14,7]));