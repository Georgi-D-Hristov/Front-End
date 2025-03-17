function calculate(num1, num2, num3){
    return subtract(sum(num1, num2),num3);

    function sum(num1, num2){
        return num1 + num2;
    }
    
    function subtract(num1, num2){
        return num1 - num2;
    }
}




console.log(calculate(23, 6, 10));
console.log(calculate(1, 17, 30));
console.log(calculate(42, 58, 100));