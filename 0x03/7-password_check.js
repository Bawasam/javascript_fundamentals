#!/usr/bin/node
// a program that ask a user for pasword 
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdouts
})
function checkPassword(password) {
if (password.length < 8){
    return "password must be at least 8 characters long."
}
if (!/\d/.test(password)) {
    return "password must contain at least one digit."
    return""
}
if (!/ [A-Z]/.test(password)){
    return "password must contain at least one uppercase letter."
}
return ""

}
while (true) {
    const password = window.Prompt("Enter a password:")
    const errorMessage = checkPassword(password)
    if (errorMessage === ""){
        console.log("password is valid!")
        break
    }

    console.log(errorMessage)
}

