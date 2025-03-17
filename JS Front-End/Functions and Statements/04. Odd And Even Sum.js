function getSums(number){
    let oddSum = 0;
    let evenSum = 0;

    calculateSums();

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

    function calculateSums() {
        while (number > 0) {
            let digit = number % 10;
            if (digit % 2 == 0) {
                evenSum += digit;
            }
            else {
                oddSum += digit;
            }
            number = Math.trunc(number / 10);
        }
    }
}

getSums(1000435);
getSums(3495892137259234);