#!/usr/bin/node
// a function that takes array as input, returns the array reversed without usung reverse.method

function reverseList(arr) {
    let reversedArr = []
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i])
    }
    return reversedArr
}
const result = reverseList([1, 2, 3, 4, 5])
console.log(result)