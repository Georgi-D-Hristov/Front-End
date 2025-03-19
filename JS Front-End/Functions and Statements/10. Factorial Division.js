function factorialCalc(number, devider){
   
   let num = factorial(number);
    let dev = factorial(devider);
    

    console.log((num/dev).toFixed(2));

    function factorial(num) {
        let result = 1;
        for (let i = num; i >= 1; i--) {
            result *= i;
        }
        return result;
    }
}

factorialCalc(1, 2);
factorialCalc(5, 2);