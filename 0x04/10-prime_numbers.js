#!/ usr/bin/node
// a function to print prime numbers 
function printPrimes(n) {
    for (let i = 2; i <= n; i++) {
        if ([... Array(Math.floor (Math.sqrt(i)) + 1).keys()].skice(2).every(j => i % j !== 0)) {
            console.log(i)
        }
    }
}