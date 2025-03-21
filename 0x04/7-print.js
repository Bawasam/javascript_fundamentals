#!/usr/bin/node
// a function to print a character 
function print_Char_at(str, n) {
        let new_str = ""
        for (let num = 0; num < str.length; num++){
            if (num == n) {
                new_str += str[num]
                break
            }
        }
        return new_str
    }
    
    
    console.log(print_Char_at("javascript is amazing", 9))
    
