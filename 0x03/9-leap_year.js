#!/usr/bin/node
// a program to allow a user to enter a psswd with only 3 attempt
for (let year = 1900; year <= 2100; year++) {
    if ((year % 4 === 0 && year % 100 !==0) || year % 400 === 0) {
        console.log(year)
    }
}