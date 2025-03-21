#!/usr/bin/node
// write a function that create a copy of a string, remove the character at the possition n.
function remove_Char_at(str, n){
    let new_str = ""
    for (let num = 0; num < str.length; num++){
        if (num != n) new_str += str[num]
    }
    return new_str
}


console.log(remove_Char_at("javascript is amazing", 5))
