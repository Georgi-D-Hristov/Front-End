function listOfNames(array){
    array.sort((a, b) => a.localeCompare(b));

    let num = 1;
    array.forEach(element => {
        console.log(`${num}.${element}`);
        num++;
    });
}

listOfNames(["John", "Bob", "Christina", "Ema"]); 