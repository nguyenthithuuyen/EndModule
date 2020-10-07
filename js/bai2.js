function isFibonacci(number) {
    let x = 0;
    let y = 1;
    let temp = 0;
    let flag = false;
    while (temp <= number) {
        if (temp == number) {
            flag = true;
            break;
        } else {
            temp = x+y;
            x = y;
            y = temp;
        }
    }
    return flag;
}
let a = 13 ;
let result = isFibonacci(a);
document.write(result);
