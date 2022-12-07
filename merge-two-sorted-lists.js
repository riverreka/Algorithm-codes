/**
 * https://leetcode.com/problems/merge-two-sorted-lists/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 
var mergeTwoLists = function(list1, list2) {
    console.log(JSON.stringify(list1), JSON.stringify(list2));
};
*/

const mergeTwoLists = (list1, list2) => {
    console.log(list1, list2);
    const sortedList = {};
    if (list1 === null) {
        return list2;
    } else if (list2 === null) {
        return list1;
    }
    if (list1.val <= list2.val) {
        sortedList.val = list1.val;
        list1=list1.next;
    } else {
        sortedList.val = list2.val;
        list2=list2.next;
    }
    sortedList.next=mergeTwoLists(list1, list2);
    return sortedList;
};
