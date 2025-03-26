#!/usr/bin/node
// a function thats takes array as input, returns the new array with all duplicate removed 

function removeDuplicates(arr) {
    return arr.filter((value, index,self) => self.indexOf(value) === index)
}
const result = removeDuplicates([1, 2, 2, 3, 4, 4, 5])
console.log(result)