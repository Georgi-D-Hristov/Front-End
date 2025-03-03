function totalPriceCalc (peopleCount, groupType, day){
    let totalPrice = 0;
    let multiplier = 0;

    if(peopleCount<=0){
        return;
    }

    if(groupType == "Students"){
        if(day == "Friday"){
            multiplier = 8.45;
        }
        else if(day == "Saturday"){
            multiplier = 9.80;
        }
        else if (day == "Sunday") {
            multiplier = 10.46;
        }

        totalPrice = multiplier * peopleCount;

        if(peopleCount>=30){
            totalPrice = totalPrice - (totalPrice*0.15);
        }

        console.log(`Total price: ${totalPrice.toFixed(2)}`);
    }

    if(groupType == "Business"){
        if(day == "Friday"){
            multiplier = 10.90;
        }
        else if(day == "Saturday"){
            multiplier = 15.6;
        }
        else if (day == "Sunday") {
            multiplier = 16;
        }

        totalPrice = multiplier * peopleCount;

        if(peopleCount >= 100){
            totalPrice = multiplier * (peopleCount - 10);
        }

        console.log(`Total price: ${totalPrice.toFixed(2)}`);
    }

    if(groupType == "Regular"){
        if(day == "Friday"){
            multiplier = 15;
        }
        else if(day == "Saturday"){
            multiplier = 20;
        }
        else if (day == "Sunday") {
            multiplier = 22.50;
        }

        totalPrice = multiplier * peopleCount;

        if(peopleCount >= 10 && peopleCount <= 20){
            ttotalPrice = totalPrice - (totalPrice*0.05);
        }

        console.log(`Total price: ${totalPrice.toFixed(2)}`);
    }
}

/*totalPriceCalc(30, "Students", "Sunday")
totalPriceCalc(40, "Regular", "Saturday")*/
totalPriceCalc(-100, "Business", "Sunday")