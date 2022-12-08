/**
 * https://leetcode.com/problems/climbing-stairs/
 * @param {number} n
 * @return {number}
 */

const factor = function (num) {
  let result = num;
  if (num === 0 || num === 1) 
    return 1; 
  while (num > 1) { 
    num--;
    result *= num;
  }
  return result;
}

const climbStairs = function(n) {
    let result = 0;
    for (let twos=0; twos <= Math.floor(n/2); twos++) {
        let ones = n - twos * 2;
        result += factor(ones+twos) / ( factor(ones) * factor(twos) )
    }
    return result;
};
