function sum(number){
    let sumOfDigits = 0;
    while(number%10>0){
        sumOfDigits += number%10;
        number = Math.trunc(number/10);
    }
    console.log(sumOfDigits);
}

sum(245678);
sum(97561);
sum(543);