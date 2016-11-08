var luckyNumber = Math.floor(Math.random()* 6)
var Month = Math.floor(Math.random()* 13)
var receipt = 60;
switch (luckyNumber) {

    case 0:
        afterdiscount = receipt;
        console.log("you will have to pay: " + afterdiscount);
        break;

    case 1:
        discount = 0.1
        afterdiscount = receipt-(receipt*discount);
        console.log("you will have to pay: " + afterdiscount);
        break;
    case 2:
        discount = 0.25
        afterdiscount = receipt-(receipt*discount);
        console.log("you will have to pay: " + afterdiscount);
        break;

    case 4:
        discount = 0.4
        afterdiscount = receipt-(receipt*discount);
        console.log("you will have to pay: " + afterdiscount);
        break;

    case 5:
        afterdiscount = 'nothing';
        console.log("you will have to pay: " + afterdiscount);
        break;

    default:
        console.log("There's nothing ") ;
}
switch (Month) {

    case 1:

        console.log( Month + " January");
        break;

    case 2:
        console.log(Month + " February");
        break;

    case 3:
        console.log(Month + " March");
        break;

    case 4:
        console.log(Month + " April");
        break;

    case 5:
        console.log(Month + " May");
        break;
    case 6:
        console.log(Month + " June");
        break;
    case 7:
        console.log(Month + " july");
        break;
    case 8:
        console.log(Month + " August");
        break;
    case 9:
        console.log(Month + " September");
        break;
    case 10:
        console.log(Month + " October");
        break;
    case 11:
        console.log(Month + " November");
        break;
    case 12:
        console.log(Month + " December");
        break;

    default:
        console.log("Is not a month");
}

/*Another method
 // statements
 // switch -- special case of if
 // like a big if-else chain
 // beware of *falling through*

 if (number == 1) {
 console.log('First thou pullest the Holy Pin');
 } else if (number == 2) {
 console.log('neither shalt thou count two, excepting that thou then proceedeth to three');
 } else if (number == 3) {
 console.log('Three shall be the number of the counting and the number of the counting shall be three')
 } else {
 console.log('this is the default case')
 }

 var number = '1';

 switch (number) {
 case '1':
 console.log('First thou pullest the Holy Pin');
 break;
 case 2:
 console.log('neither shalt thou count two, excepting that thou then proceedeth to three');
 break;
 case 3:
 console.log('Three shall be the number of the counting and the number of the counting shall be three')
 break;
 case 4:
 console.log('Four shalt thou not count');
 break;
 case 5:
 console.log('Five is right out');
 break;
 default:
 console.log('The number ' + number + ' has no relevance to the holy hand grenade of antioch');
 }*/
var luckyNumber = Math.floor(Math.random()* 6);
var total = 60;
var discountPercent;
var discount;

switch(luckyNumber) {
    case 1:
        discountPercent = 0.1;
        break;
    case 2:
        discountPercent = 0.25;
        break;
    case 4:
        discountPercent = 0.5;
        break;
    case 5:
        discountPercent = 1;
        break;
    default:
        discountPercent = 0;
}

// apply the discountPercent
discount = total * discountPercent;

console.log('Your original price: ' + total);
console.log('Your lucky number is: ' + luckyNumber);
console.log('You get a discount of ' + (discountPercent * 100) + '%.')
console.log('You saved $' + discount + '.');
console.log('You will pay $' + (total - discount) + '.');
