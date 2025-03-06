function sortNumbers(array){
    let result = [];
   array.sort((a, b)=>a-b);
   let reverseArr = array.sort((a, b)=>b-a);
   while(array.length>0){
        result.push(array.pop());
        result.push(array.shift());
        
   }
    return result;
}

console.log(sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));