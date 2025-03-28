#!/usr/bin/node
// a function  that takes a list numbers as input, return the sum of all numbers in the list
function sumList(numbers) {
    return numbers.reduce((a, b) => a + b, 0)
}
const result = sumList([2, 4, 6, 8])
console.log(result)