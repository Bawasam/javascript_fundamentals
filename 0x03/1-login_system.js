#!/usr/bin/node
// a program that ask a user to enter usernam and pssword 
// if the username is admin and the password is 12345 print login successful
//  otherwise invalid credentials

const {stdin, stdout} = require('process')
const readline = require('readline')

const rl = readline.createInterface({
    input: stdin,
    output: stdout
})

rl.question("Enter your username: ", (usrname) => {
    rl.question("Enter your password: ",(pswd) => {
        if (usrname == "admin" && pswd == "12345") { 
            console.log("login successful")
        } else {
            console.log("Invalid credentials")
        }
        rl.close()
    })
    
})