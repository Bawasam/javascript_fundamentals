#!/usr/bin/node
// a function that takes an array of numbers as input, returns the largest number in the array

function findMax(arr) {
    return Math.max(...arr)
}
const result = findMax([10, 25, 5, 30, 15])
console.log(result)