//
function isPrime(num) {
    if (num < 2) return false

    for (var i = 2; i < num; i++) {
        if (num % i == 0)
            return false
    }
    return true
}

for (var i = 0; i < 10000; i++) {
    if(isPrime(i)) document.write(i + ',')
}