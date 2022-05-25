function gcd(n1, n2) {
    let biggest = 0;
    let divisor = 0;

    if (n1 >= n2) {
        biggest = n1;
    } else {
        biggest = n2;
    }

    for (let i = 1; i < biggest; i++) {
        if (n1 % i == 0 && n2 % i == 0) {
            divisor = i;
        }       
    }
    console.log(divisor);
}

gcd(2154, 458)