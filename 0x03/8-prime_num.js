#!/usr/bin/node
// a program that prints all prime numbers 1 to 50
for ( num = 1; num <= 50; num++) {
    let isPrime = true;
    for (let factor = 2; factor * factor <= num; factor++) {
        if (num % factor === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime && num > 1) {
        console.log(num);
    }
}