/**
 * Created by ly on 2018/8/23.
 */
/*
* 给定一个字符串，找出不含有重复字符的最长子串的长度。
* input: "abcabcbb"
* output:3-->"abc"
* intput: "bbbbb"
* output: 1-->"b"
* input: "pwwkew"
* output:3-->"kew"
*/
var lengthOfLongistSubstring = function (s) {
    var length = 0;
    var arr = [] ;
    for(let i = 0 ; i < s.length ; i ++){
        arr.push(s[i]);
        for(let j = i + 1 ; j < s.length ; j ++){
            if(arr.includes(s[j])){
                break;
            }
            else
                arr.push(s[j]);
        }
        length = length>arr.length ? length : arr.length;
        arr = [];
    }
    console.log(length);
};
lengthOfLongistSubstring("pwwkew");