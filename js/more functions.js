// returns a string with a message that contains the name of the person shopping, and
// the total amount they will pay
function calculateHEBDiscount(shopperName, groceryTotal, discountPercent){
    var price = 200;
    var discount = 100;
    var result;
if(groceryTotal>price){

    discountPercent = groceryTotal-discount;
    result=  shopperName + " amount before discount " + groceryTotal + " amount after discount " + discountPercent

}
else{
    result= shopperName + " No discount"

}
return result
}
  var yes= calculateHEBDiscount('bryan', 300, 500);

console.log(yes);
// will take in two strings, and randomly pick one of the two strings to return

function decideBetweenOptions(theFirstOption, theSecondOption) {

     var yes;
    (flipACoin===0)? yes=theFirstOption : yes=theSecondOption;
    return yes
}
var flipACoin = Math.floor(Math.random()* 2)
var  wow= decideBetweenOptions('great', 'its ok' )
console.log(wow);
// will take in a lucky number and a total, and return the new total
// applying a discount based on the lucky number (possibly none at all)
 function applyLuckyNumberDiscount (luckyNumber, totalBeforeDiscount) {
    var totalBeforeDiscount;
    var result;
    switch (luckyNumber) {

        case 0:
            afterdiscount = totalBeforeDiscount;
            result="you will have to pay: " + afterdiscount;
            break;

        case 1:
            discount = 0.1
            afterdiscount = totalBeforeDiscount-(totalBeforeDiscount*discount);
            result = "you will have to pay: " + afterdiscount;
            break;
        case 2:
            discount = 0.25
            afterdiscount = totalBeforeDiscount-(totalBeforeDiscount*discount);
            result = "you will have to pay: " + afterdiscount;
            break;

        case 4:
            discount = 0.4
            afterdiscount = totalBeforeDiscount-(totalBeforeDiscount*discount);
            result = "you will have to pay: " + afterdiscount;
            break;

        case 5:
            afterdiscount = 'nothing';
            result = "you will have to pay: " + afterdiscount;
            break;

        default:
            result = "There's nothing ";
    }
            return result
}

var luckyNumber = Math.floor(Math.random()* 6)
var priceAfterDiscount = applyLuckyNumberDiscount(luckyNumber, 60);
console.log( priceAfterDiscount);
// will take in a number and return a string that is the corresponding month name
function convertMonthNumberToName(Month) {
    var Month = Math.floor(Math.random()* 13)
    var result;
    switch (Month) {

        case 1:

            result = Month + " January";
            break;

        case 2:
            result = Month + " February";
            break;

        case 3:
            result = Month + " March";
            break;

        case 4:
            result = Month + " April";
            break;

        case 5:
            result = Month + " May";
            break;
        case 6:
            result = Month + " June";
            break;
        case 7:
            result = Month + " july";
            break;
        case 8:
            result = Month + " August";
            break;
        case 9:
            result = Month + " September";
            break;
        case 10:
            result = Month + " October";
            break;
        case 11:
            result = Month + " November";
            break;
        case 12:
            result = Month + " December";
            break;

        default:
            result = "Is not a month";
    }
    return result
}
var months = convertMonthNumberToName('Month');
console.log(months);
// will take in a starting number of cones and simulate customers coming and buying cones
var coneInventory = Math.floor(Math.random() * 50) + 50;
console.log(coneInventory);
function sellCones(coneInventory) {

    var conesToSell;
    var result;
    result = 'Yeah I sold all cones.';
    while (coneInventory > 0) {
        conesToSell = Math.floor(Math.random() * 5) + 1;
        if (conesToSell <= coneInventory) {
            result = 'Selling ' + conesToSell + ' cones...';
            coneInventory -= conesToSell;
        } else {
            result = 'I can\'t sell you ' + conesToSell + ', I only have ' + coneInventory;
        }
        return result
    }

}
var seller = sellCones('coneInventory');
console.log(seller);
// will take in a number and generate multiplication tables for it
function generateMultiplicationTables(Number){
    var Number = Math.floor(Math.random()* 11);
    var result;
    for (var i = 1; i < 11; i++) {
        result = Number + " x " + i + " = " + Number*i
        console.log(result);
    }
    return result
}
 generateMultiplicationTables(Number);

// will count down from the start number to the stop number
// by step
// console.log is okay here
// ex. countDown(6, 0, 2); output is below
//     6
//     4
//     2
//     0
function countDown(num1, num2, num3) {
    var num1 ;
    var num2 ;
    var num3 ;
    var result;
    if (num1 > (num2 && num3)) {
        if (num2 > num3) {
            result = num1 + ',' + num2 + ',' + num3
        }
        else{
            result =  num1 +',' + num3 + ',' + num2
        }

    }
        else if  (num2>(num1 && num3)) {
            if (num1 > num3) {
                result = num2 + ','+ num1 + ','+ num3
            }
            else {
                    result = num2 + ','+ num3 + ',' + num1
                }

            }
            else if (num3 > (num1 && num2)) {
                if (num1 > num2) {
                    result = num3 + ',' + num1 + ','+ num2
                }
                else {
                        result = num3 + ',' + num2 + ',' + num1
                    }
                }

                return result

            }

var resultnumber = countDown(12,3,27);
console.log(resultnumber);








