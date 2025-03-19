function generateMatrix(number){
    for(let i = 0; i < number; i++){
        console.log(Array(number).fill(number).join(' '));
    }
}

generateMatrix(7);
generateMatrix(2);