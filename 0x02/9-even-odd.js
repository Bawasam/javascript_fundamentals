#!/usr/bin/node
// a program to get even or odd number 

const {stdin, stdout} = require('process')
const readline = require('readline')
 
const rl = readline.createInterface({
    input: stdin,
    output: stdout
})
 rl.question("Enter any number: ", (num) => {
    if (parseInt(num) %2 == 0) {
        console.log("even")
    } else {
        console.log("odd")
    }
    rl.close()
 })