#!/usr/bin/node
// a function to vount vowels 
function countVowels(str) {
   return ("programming".match(/[aeiou]/gi) || []).length
}
let result = countVowels()
console.log(countVowels(result))