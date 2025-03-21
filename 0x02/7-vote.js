#!/urs/bin/node
const {stdin, stdout} =require('process')
const readline = require('readline')

const rl = readline.createInterface({
    input: stdin,
    output: stdout

})
rl.question("Enter your age: ",(age) => {
    if (age < 18) {
        console.log("sorry u cant vote!");
    } else {
        console.log("Welcome u can vote!")
    }
    rl.close()
})
