/**
 * Created by ly on 2018/8/26.
 * 快排
 * “二分”思想
 */
function quickSort(arr,left,right){
    if(left > right)
        return;
    let temp = arr[left], i = left, j = right;
    while(i!==j){
        while(arr[j]>=temp && i<j){
            j--;
        }
        while(arr[i]<=temp && i<j){
            i++
        }
        if(i<j) {
            let t = arr[i];
            arr[i] = arr[j];
            arr[j] = t;
        }
    }
    arr[left] = arr[i];
    arr[i] = temp;

    quickSort(arr,left,i-1);
    quickSort(arr,i+1,right);
    return arr;
}
let arr = [1,5,9,6,3,8,4,7,2];
console.log(quickSort(arr,0,arr.length-1));