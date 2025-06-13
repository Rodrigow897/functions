function ehPrimo(num) {
    if(num <= 1) {
        return false;
    } 

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

let num = 11

if (ehPrimo(num)) {
    console.log(num, "é primo")
} else {
    console.log(num, "não é primo")
}