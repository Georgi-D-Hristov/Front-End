function totalPriceCalc (peopleCount, groupType, day){
    const totalPrice = 0;
    const multiplier = 0;
    
    if(groupType=="Students"){
        if(day=="Friday"){
            multiplier = 8.45;
        }
        else if(day=="Saturday"){
            multiplier = 9.80;
        }
        else if (day == "Sunday") {
            multiplier=10.46;
        }

        totalPrice = multiplier * peopleCount;

        if(peopleCount>=30){
            totalPrice = totalPrice - (totalPrice*0.15);
        }

        console.log("Total price: ${totalPrise:f2}");
    }
}

totalPriceCalc(30, "Student", "Sunday")
totalPriceCalc(40, "Regular", "Saturday")