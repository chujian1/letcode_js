/**
 * Created by ly on 2018/8/25.
 * 插入排序
 * 待比较数据：7, 6, 9, 8, 5,1
 　　第一轮：指针指向第二个元素6，假设6左面的元素为有序的，将6抽离出来，形成7,_,9,8,5,1，从7开始，6和7比较，发现7>6。将7右移，形成_,7,9,8,5,1，6插入到7前面的空位，结果：6,7,9,8,5,1
 　　第二轮：指针指向第三个元素9，此时其左面的元素6,7为有序的，将9抽离出来，形成6,7,_,8,5,1，从7开始，依次与9比较，发现9左侧的元素都比9小，于是无需移动，把9放到空位中，结果仍为：6,7,9,8,5,1
 　　第三轮：指针指向第四个元素8，此时其左面的元素6,7,9为有序的，将8抽离出来，形成6,7,9,_,5,1，从9开始，依次与8比较，发现8<9，将9向后移，形成6,7,_,9,5,1，8插入到空位中，结果为：6,7,8,9,5,1
 　　第四轮：指针指向第五个元素5，此时其左面的元素6,7,8,9为有序的，将5抽离出来，形成6,7,8,9,_,1，从9开始依次与5比较，发现5比其左侧所有元素都小，5左侧元素全部向右移动，形成_,6,7,8,9,1，将5放入空位，结果5,6,7,8,9,1。
 　　第五轮：同上，1被移到最左面，最后结果：1,5,6,7,8,9。
 */
function insertSort(arr) {
    let length = arr.length;
    let item,index;
    for(let i =1 ; i < length ; i ++){
        item = arr[i];
        index = i;
        for(let j = i - 1 ; j >= 0 ; j --){
            if(item < arr[j]){
                arr[j+1] = arr[j];
                index = j;
            }
        }
        arr[index] = item;
    }
    return arr;
}
console.log(insertSort([14,51,7,18,4,35,29]));