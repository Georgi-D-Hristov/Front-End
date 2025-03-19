function checkIfNumbersArePalindrome(input) {

    for (let num of input) {
        let numStr = num.toString(); 
        let reversedNum = numStr.split('').reverse().join(''); 
        
        console.log(numStr === reversedNum); 
    }
}

checkIfNumbersArePalindrome([123,323,421,121]);
checkIfNumbersArePalindrome([32,2,232,1010]);