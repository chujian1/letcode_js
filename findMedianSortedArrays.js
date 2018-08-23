/**
 * Created by ly on 2018/8/23.
 */
/*
给定两个大小为 m 和 n 的有序数组 nums1 和 nums2 。
请找出这两个有序数组的中位数。要求算法的时间复杂度为 O(log (m+n)) 。
你可以假设 nums1 和 nums2 不同时为空。
input:[1,3][2]
output:2.0
input:[1,3][2,4]
output:2.5
*/
var findMedianSortedArrays = function(nums1, nums2) {
    let arr = nums1.concat(nums2).sort((a,b)=>{return a-b;});
    let l = arr.length/2;
    let m = Math.floor(l) == l ? (arr[l-1] + arr[l])/2 : arr[Math.floor(l)];
    console.log(m);
};
findMedianSortedArrays([1,3],[2]);