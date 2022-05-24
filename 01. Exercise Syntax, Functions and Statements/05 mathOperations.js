function mathOperations(a, b, c) {
    let res;
    switch (c){
        case '+': res = a + b; break;
        case '-': res = a - b; break;
        case '/': res = a / b; break;
        case '*': res = a * b; break;
        case '%': res = a % b; break;
        case '**': res = a ** b; break;
    }
    console.log(res);
}