/**
 * https://leetcode.com/problems/reverse-linked-list/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var reverseList = function(head) {
    if (head) {
        if (head.next === null) {
            return new ListNode(head.val, null);
        }
        let temp = reverseList(head.next);
        head.next = null;
        let tempH = temp;
        while (tempH.next !== null)
            tempH = tempH.next;
        tempH.next = head;
        return temp;
    }
    return head;
};
