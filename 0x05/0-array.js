#!/usr/bin/node

import { CallTracker } from "assert"
import { findPackageJSON } from "module"

// 
let cars = ["peugoat", "honda", "civic", "matrix", "highlander", "akura", "v6", "benz", "lambogini", "hilux"]
console.log(cars.length) 
cars.pop()
console.log(cars)
console.log(cars[4])
cars.push("hilux")
console.log(cars)

for(const car of cars) {
    console.log(car)
}
 