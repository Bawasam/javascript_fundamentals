#!/usr/bin/node
// a program to check password 
let password = prompt(str = "please enter your password:")
if (password === "secret") {
    console.log("Password correct!")
} else {
    console.log("password incorrect. Try again")
}
console.log("your entered:", password)