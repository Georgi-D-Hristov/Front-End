function leap(year){
    if((year % 400) == 0 || (year % 4 == 0 && year % 100 != 0)){
        console.log("yes");
    }
    else{
        console.log("no");
    }
}

leap(2000)
