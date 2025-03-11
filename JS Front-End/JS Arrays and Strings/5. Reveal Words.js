function revalWords(wordArray, tamplate){
    
    let words = wordArray.split(', ');
    const pattern = /\*+/gm;
    
    const matches = tamplate.match(pattern);
    
    for(i = 0; i < words.length; i++){
        for(j = 0; j < matches.length; j++){
            if(matches[j].length==words[i].length){
              tamplate = tamplate.replace(matches[j], words[i]);
            }
        }
    }
    return tamplate;
}

console.log( revalWords('great',
'softuni is ***** place for learning new programming languages'
));
console.log(revalWords('great, learning',
'softuni is ***** place for ******** new programming languages'
));