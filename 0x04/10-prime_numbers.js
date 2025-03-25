#!/ usr/bin/node
// a function to print prime numbers 
function printPrimes(n) {
    for (let i = 1; i <= n; i++) {
        let is_prime = true
        for (let y = 2; y < i; y++) {
            if (i % y == 0) {
                is_prime = false
                break
            }
        }
        if (i >= 2 && is_prime) console.log(i)
    }
}

printPrimes(100)