#!/usr/bin/node
// a function that reduces a list 

const arr = [2, 3, 5, 8]


const result = arr.reduce((a, b) => a + b, 0)
console.log(result)