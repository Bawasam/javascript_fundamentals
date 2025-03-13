#!/usr/bin/node
// a program to multiply two numbers 

const {stdin,stdout} = require('process')
const readline = require('readline')

const rl = readline.createInterface({
    input: stdin,
    output: stdout  
})

rl.question("Enter any number: ", (num1) => {
    rl.question("Enter any number: ", (num2) =>{
        let mult = parseInt(num1) * parseInt(num2)
        console.log(mult)
        rl.close()
    })
})