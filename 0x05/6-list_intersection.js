#!/usr/bin/node
// function that takes 2 array as input, returns new array containing element that appear in both list
function listIntersection(arr1, arr2) {
    return arr1.filter(value => arr2.includes(value))
}
const result = listIntersection([1, 2, 3, 4], [3, 4, 5, 6])
console.log(result)