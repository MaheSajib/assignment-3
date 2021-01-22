// https://github.com/MaheSajib/assignment-3


// This is problem no 1 kilometerToMeter
function kilometerToMeter(kilometer) {
    if (typeof kilometer == ("number") && 0 <= kilometer) {
        var meter = kilometer * 1000; /**we know 1000 meter = 1 kilometer*/
    }
    else {
        console.log(kilometer, "This is not Proper Integer")
    }
    return meter;
}


// Problem 2 budgetCalculator

function budgetCalculator(watch, mobile, laptop) {
    var watchPrice = 50;  /**Here watch price is fixed*/
    var mobilePrice = 100;  /**Here mobile price is fixed*/
    var laptopPrice = 500;  /**Here laptop price is fixed*/
    var totalWatch = watch * watchPrice;
    var totalMobile = mobile * mobilePrice;
    var totalLaptop = laptop * laptopPrice;
    var totalBudget = totalWatch + totalMobile + totalLaptop;
    return totalBudget;
}

// Problem 3 hotelCost

function hotelCost(days) {
    var cost = 0;
    if (days <= 10) {
        cost = days * 100;
    }
    else if (days <= 20) {
        var firstOffer = 10 * 100;
        var remaining = days - 10;
        var secondOffer = remaining * 80;
        cost = firstOffer + secondOffer;
    }
    else {
        var firstOffer = 10 * 100;
        var secondOffer = 10 * 80;
        var remaining = days - 20;
        var thirdOffer = remaining * 50;
        cost = firstOffer + secondOffer + thirdOffer;
    }
    return cost;
}

// Problem 4 megaFriend

function megaFriend(str) {
    var names = str.split(" ");
    var largeName = "";

    for (var name of names) {
        if (name.length > largeName.length) largeName = name;
    }
    return largeName;
}

var result = megaFriend('rohim korimaa salma jalma');