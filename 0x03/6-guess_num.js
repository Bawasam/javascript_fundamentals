#!/usr/bin/node
// a program that generate a random number  1 to 20
const {stdin, stdout} = require('process')
const readline = require('readline')
const rl = readline.createInterface({
    input: stdin,
    output: stdout
})

const secretNumber = Math.floor(Math.random() * 20) + 1
rl.question("Guess a number between 1 and 20:", (userGuess) => {
    while (true) {
        if (userGuess === null) {
            console.log("okay, goodbye")
            break
        }
        const guess = parseInt(userGuess)
        if (isNaN(guess) || guess < 1 || guess > 20) {
            console.log("Invalid guess! please try again")
            continue
        }
        if (guess === secretNumber) {
            console.log("congratulations, you guessed it!")
            break
        }
        if (guess < secretNumber) {
            console.log("too low! try again.")
            break
        } else {
            console.log("too high! try again.")
            break
        }
    }
    rl.close()
})