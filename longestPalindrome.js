/**
 * Created by ly on 2018/8/24.
 */
/*
给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为1000。
input："babad"
output:"bab" || "aba"
input:"cbbd"
output:"bb"
*/
var longestPalindrome = function(s) {
    if(s.length < 1 || s.length > 1000)
        return s;
    let l = 0;
    let index = 0;
    let arr = s.split("");
    let result = [];
    result.push(arr[0]);
    function isHw(s) {
        let arr = s.split("");
        let l = arr.length;
        let j = l - 1;
        for(let i = 0 ; i < Math.floor(l/2) ; i ++){
            if(arr[i] == arr[j]){
                j--;
            }
            else{
                return false;
            }
        }
        return true;
    };
    for(let i = 0 ; i < arr.length ; i ++){
        for(let j = i + 2 ; j <= arr.length ; j ++){
            let str = arr.slice(i,j).join("");
            if(isHw(str)){
                result.push(str);
            }
        }
    }
    for(let i in result){
        if(l < result[i].length){
            l = result[i].length;
            index = i;
        }
    }
    return result[index];
};

console.log(longestPalindrome("sac"));
//console.log(isHw("abba"));