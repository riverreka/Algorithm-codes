/**
 * https://leetcode.com/problems/validate-binary-search-tree/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    let lres = null;
    let rres = null;
    if (root.right === null && root.left === null) 
        return true;
    if (root.left)
        if (root.val > root.left.val)
            lres = isValidBST(root.left);
        else
            return false;
    if (root.right)
        if (root.val < root.right.val)
            rres = isValidBST(root.right);
        else
            return false;
    return lres && rres;
};
