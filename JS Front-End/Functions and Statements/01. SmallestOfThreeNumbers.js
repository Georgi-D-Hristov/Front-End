function getSmalestNumber(num1, num2, num3){
    
    let min = 0;
    min = num1;
   
    if(num2 < min){
        min = num2;
    }
    if(num3 < min){
        min = num3;
    }

    console.log(min);
}

getSmalestNumber(1,2,3);