function printCharsBetween(char1, char2){
    const asciiNumber1 = char1.charCodeAt(0);
    const asciiNumber2 = char2.charCodeAt(0);

    if(asciiNumber1 > asciiNumber2){
        const result = getChars(asciiNumber2, asciiNumber1);
        console.log(result.join(' '));
    }
    else{
        const otherResult = getChars(asciiNumber1, asciiNumber2);
        console.log(otherResult.join(' '));
    }

    function getChars(asciiNumber1, asciiNumber2){
        let chars = [];
        for(let i = asciiNumber1+1; i <asciiNumber2; i++){
            chars.push(asciiToChar(i));
        }
        return chars;
    }
    
    function getAsciiNumber(ch){
        return ch.charCodeAt(0);
    }
    
    function asciiToChar(number){
        return String.fromCharCode(number);
    }
}



printCharsBetween('a', 'd');