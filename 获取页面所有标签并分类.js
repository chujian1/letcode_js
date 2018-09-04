/**
 * 获取页面所有标签并分类
 * Created by ly on 2018/9/4.
 */
let tags = document.getElementsByClassName("*");
let arr = [];
for(let i = 0 , l = tags.length; i < l ; i++){
    arr.push((tags[i].tagName).toLowerCase());
}
let obj = {};
for(let i = 0 , l = arr.length;i < l ; i++){
    if(!obj[arr[i]]){
        obj[arr[i]] = 1;
    }
    else
        obj[arr[i]]++;
}
console.log(obj);

