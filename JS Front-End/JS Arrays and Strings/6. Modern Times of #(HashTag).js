function takeHashTags(input){
    const pattern = /#[A-z,a-z]*/gm;

    const matches = input.match(pattern);

    for(let match of matches){
        if(match.length>1){
            console.log(match.substring(1, match.length));
        }
        
    }
}

takeHashTags('Nowadays everyone uses # to tag a #special word in #socialMedia');
takeHashTags('The symbol # is known #variously in English-speaking #regions as the #number sign');