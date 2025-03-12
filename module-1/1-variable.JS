#!/usr/bin/node
/**
 * a file that contain how to create variables 
 */

// using const
const firstName = "John" // carmel case 
const first_name = "Doe" // snake case
const firstname = "Elijah" // sentence case


console.log(firstName, first_name, firstname)

// using let with assignment loccal scope
let lastname = 23                        // not assigned
let lastName = "sammy"                  // assigned 

console.log(lastname, lastName)


// using var global scode
var a
var b = 3
console.log(a, b)

a=5
console.log(a)
