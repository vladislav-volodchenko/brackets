module.exports = function check(str, bracketsConfig) {
 	let stack = [],
    	brackets = Object.fromEntries(bracketsConfig);
    for (let val of str.split('')) {
        if (stack[0] === val) {
            stack.shift();
        } else if (brackets[val]) {
            stack.unshift(brackets[val]);
        } else {
            return false;
        }
    }
    return stack.length === 0;
}

//https://js-algorithms.tutorialhorizon.com/2015/11/16/justify-if-a-string-consists-of-valid-parentheses/
