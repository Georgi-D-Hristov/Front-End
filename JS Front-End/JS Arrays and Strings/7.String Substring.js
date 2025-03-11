function findSubstring(word, text){

    
    word = word.toLowerCase().trim();
    let words = text.toLowerCase().split(' ');

    if(words.includes(word)){
    console.log(word);
    }
    else{
    console.log(`${word} not found!`)
    }
}

findSubstring('javascript',
'JavaScript is the best programming language'
);

findSubstring('python',
'JavaScript is the best programming language'
);