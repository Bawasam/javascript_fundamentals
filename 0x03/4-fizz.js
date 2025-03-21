#!/usr/bin/node
// a program that prints from 1 to 50
// if anumber is divisible by 3 print fizz if divisible by 5 print buzz
// if divisible by both 3 and 5 print fizzbuzz

for (let num = 1; num <= 50; num++ ){
    
    if (num % 3 == 0 && num % 5 == 0){
        console.log("fizzbuzz")
    }
    else if (num % 5 == 0){
        console.log("buzz")
    }
    else if (num % 3 == 0){
        console.log("fizz")
    }
    else{
        console.log(num)
    }
}