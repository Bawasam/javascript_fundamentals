#!/usr/bin/node
// a function to vount vowels 
function countVowels(str) {
   return (`${str}`.match(/[aeiou]/gi) || []).length
}


let result = countVowels("programming")
console.log(result)