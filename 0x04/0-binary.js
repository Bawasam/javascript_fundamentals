#!/usr/bin/node
// a program to convert numbers into binary 
function binary(decimal) {
   let rem = []
    while (decimal > 0) {
        rem.unshift(decimal % 2)
        decimal = Math.floor(decimal / 2)
    }
    return rem.join('')
}
console.log(binary(8))