function loadingBar(number){

    let numberPercent = `${number}% `;

    if(number==100){
        console.log('100% Complete!');
        console.log(printStatusBar());
    }
    else{
        let result = numberPercent.concat(printStatusBar());
        console.log(result);
        console.log('Still loading...');
    }


    function printStatusBar() {
        return(`[${Array(number / 10).fill('%').join('')}${Array(10-(number/10)).fill('.').join('')}]`);
    }
}

loadingBar(50);