/**
 * 从尾到头打印链表
 * Created by ly on 2018/9/4.
 */
function printListTailToHead(head) {
    let res = [];
    while(head){
        res.unshift(head.val);
        head = head.next;
    }
    return res;
}