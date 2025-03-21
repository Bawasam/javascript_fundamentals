#!/usr/bin/node
// a program that compares to nnumber and display the biggest 

const {stdin, stdout} = require('process')
const readline = require('readline')

const rl = readline.createInterface({
    input: stdin,
    output: stdout
})
rl.question("Enter any number: ", (num1) => {
    rl.question("Enter any number: ",(num2) =>{
        if (parseInt(num1) > parseInt(num2)) {
            console.log(num1)
        } else {
            console.log(num2)
        }
        rl.close()
    })
})