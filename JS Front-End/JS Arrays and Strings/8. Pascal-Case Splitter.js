function pascalCaseSpliter(input){
    let result = [];
    const pattern = /[A-Z]{1}[a-z]*/gm;

    result = input.match(pattern).join(', ');

    console.log(result);
}

pascalCaseSpliter('SplitMeIfYouCanHaHaYouCantOrYouCan');