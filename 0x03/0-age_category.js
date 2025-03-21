#!/usr/bin/node
 // a program that takes age as an input
 
  const {stdin, stdout} = require('process')
  const readline = require('readline')

  const rl = readline.createInterface({
    input: stdin,
    output: stdout
  })
  rl.question("Enter your age: ", (age) => {
    if (age < 13) {
        console.log("your are a child")
    }
    else if (age >= 13 <=  19) {
        console.log("you are a teneger")
    } else {
        console.log("you are an adult")
    }
    rl.close()
  })