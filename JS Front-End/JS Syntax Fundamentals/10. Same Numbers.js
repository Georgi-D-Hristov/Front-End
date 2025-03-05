function sameNumbers(number){
    let isSame = true;
    let sumOfDigits = 0;
    let firstNumber = number%10;

    while(number%10>0){
        if(firstNumber==(number%10)){
            isSame *=true;
        }
        else{
            isSame *=false;
        }
        sumOfDigits += number%10;
        number = Math.trunc(number/10);
    }

    if(isSame==1){
        console.log('true')
    }
    else{
    console.log('false')
    }
    console.log(sumOfDigits)
}

sameNumbers(555);