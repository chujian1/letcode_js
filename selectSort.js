/*
 * Created by ly on 2018/8/25.
 * 选择排序
 */
function selectSort(arr) {
    let length = arr.length;
    let min,item;
    for(let i = 0 ; i < length ; i ++){
        min = i;
        for(let j = i + 1; j < length ; j ++){
            min = (arr[j] < arr[min]) ? j : min;
        }
        if(min !== i){
            item = arr[min];
            arr[min] = arr[i];
            arr[i] =item;
        }
    }
    return arr;
}
console.log(selectSort([14,51,7,18,7,35,29]));