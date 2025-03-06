
function printEveryNth(array, number){
    let result = [];
    const arrayLength = array.length;
    for(i = 0; i<arrayLength; i = i + number){
        result.push(array[i]);
    }
    
    return result;
}
console.log(printEveryNth(['5', '20', '31', '4', '20'], 2));

console.log(printEveryNth(['dsa','asd','test','tset'], 2));