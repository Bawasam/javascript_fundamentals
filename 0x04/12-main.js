#!/usr/bin/node
// calculator

import add from "./2-add.js";
import mul from "./3-mul.js";
import div from "./4-div.js";
import sub from "./13-sub.js";
import { stdin, stdout } from "process";
import readline from "readline";

const rl = readline.createInterface({
    input: stdin,
    output: stdout
})

rl.question("Enter the first number: ", (num1) => {
    rl.question("Enter the second number: ", (num2) => {
        rl.question("Enter an operator: ", (op) => {
            if (op == "+") {
                console.log(add(parseFloat(num1), parseFloat(num2)))
            } else if (op == "-"){
                console.log(sub(parseFloat(num1), parseFloat(num2)))
            } else if (op == "*") {
                console.log(mul(parseFloat(num1), parseFloat(num2)))
            } else if (op == "/") {
                console.log(div(parseFloat(num1), parseFloat(num2)))
            }
            rl.close()
        })
    }) 
})