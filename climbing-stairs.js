/**
 * https://leetcode.com/problems/climbing-stairs/
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let result = 0;
    for (let twos=0; twos <= Math.floor(n/2); twos++) {
        let ones = n-twos*2;
        let places = ones+1;
        let factorial = 1;
        while (places > places-twos && places > 1) { 
            factorial = places;
            places--;
            factorial *= places;
        }
        result += factorial;
    }
    return result;
};
