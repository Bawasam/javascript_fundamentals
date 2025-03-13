#!/usr/bin/node
// a program that devide two numbers 

const {stdin,stdout} = require('process')
const readline = require('readline')

const rl = readline.createInterface({
    input: stdin,
    output: stdout
})

rl.question("Enter any number: ", (num1) => {
    rl.question("Enter any number: ", (num2) =>{
        let div = parseInt(num1) / parseInt(num2)
        console.log(div)
        rl.close()

    })
})