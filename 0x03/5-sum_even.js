#!/usr/bin/node
// a program to calculate the sum of even number between 1 to 100 using loop
let sum = 0
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        sum = sum + i
    }
}
console.log(sum)