#!/usr/bin/node
// a function that filter a specific information

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const result = arr.filter((num) => num % 2 !== 0)
console.log(result)