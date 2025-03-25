#!/usr/bin/node
// a function that calculatess the factorial of a given integer usiing recursion

function factorial(n) {
    return n <= 1 ? 1 : n * factorial(n - 1)
}
let result = factorial(5)
console.log(result)