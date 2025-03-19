function isPerfectNumber(number){
    const perfectNumberMessage = 'We have a perfect number!';
    const noPerfectNumberMessage = 'It\'s not so perfect.';

    let sum = 0;

    if(number<=1){
        console.log(noPerfectNumberMessage);
        return;
    }

    for(let i = 1; i <= number/2; i++){
        if(number % i ==0){
            sum += i;
        }
    }

    if(sum==number){
        console.log(perfectNumberMessage);
    }
    else{
        console.log(noPerfectNumberMessage);
    }
}

isPerfectNumber(6);
isPerfectNumber(28);
isPerfectNumber(2020);