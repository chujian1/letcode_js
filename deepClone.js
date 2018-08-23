/**
 * Created by ly on 2018/8/23.
 */
// 深拷贝
function deepClone(obj) {
    let O = obj.push ? [] : {};
    for(let attr in obj){
        if(typeof obj[attr] === "object"){
            O[attr] = deepClone(obj[attr]);
        }
        else
            O[attr] = obj[attr];
    }
    return O;
}

/*
浅拷贝
Object.assign(target,source1,source2....)
*/
console.log(deepClone([1,2,[3,4,[5,6],7],8]));