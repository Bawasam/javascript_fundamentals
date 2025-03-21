#!/usr/bin/node
// a program that perform modulus operation

const {stdin, stdout} = require('process')
    const readline = require('readline')

    const rl = readline.createInterface({
        input: stdin,
        output: stdout
    })

    rl.question("Enter any number: ",(num1) => {
        rl.question("Enter any number: ", (num2) => {
            let mod = parseInt(num1) % parseInt(num2)
            console.log(mod)
            rl.close()

        })

    })