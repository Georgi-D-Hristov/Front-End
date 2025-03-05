function cooking(num, ...options){
    
    for(i=0; i<5; i++){
        if(options[i]=='chop'){
            console.log(num/2);
            num = num/2;
        }
        else if(options[i] == 'dice'){
            console.log(Math.sqrt(num));
            num = Math.sqrt(num);
        }
        else if(options[i] == 'spice'){
            console.log(num + 1);
            num++;
        }
        else if(options[i]=='bake'){
            console.log(num*3);
            num = 3 * num;
        }
        else if(options[i] =='fillet'){
            
            console.log(num - num*0.2);
            num = num - num*0.2;
        }
    }
}

cooking(32, 'chop', 'chop', 'chop', 'chop', 'chop');
console.log('----------------');
cooking(9, 'dice', 'spice', 'chop', 'bake', 'fillet');
console.log('----------------');
console.log((6-6*0.2));