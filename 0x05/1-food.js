#!/usr/bin/node
// a program to ask a user to enter food of their chioce 

const {stdin, stdout} = require('process')
const readline = require('readline')

const rl = readline.createInterface({
    input: stdin,
    output: stdout
})
rl.question("Enter any food of your choice:", (food) => {
    let fooditem = []
    fooditem.push(food)
    console.log(fooditem)
    rl.close()
}) 