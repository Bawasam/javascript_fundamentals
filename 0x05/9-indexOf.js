#!/usr/bin/node
// a function that return the index of a file of an array

function arrayIndex(arr, item) {
    return arr.indexOf(item)
}
let food_item = ["rice", "beans", "bread", "semo", "eba", "fufu"]

const result = arrayIndex(food_item, "semo" )

console.log(result)