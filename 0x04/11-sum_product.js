#!/usr/bin/node
// a function thta takes two numbers as argument, return both their sum and product as a tuple

function sum_and_product(a, b) {
    return [a + b, a * b] 
}
let result = sum_and_product(3, 4)
console.log(result) 