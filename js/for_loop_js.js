var Number = Math.floor(Math.random()* 11);

for (var i = 1; i < 11; i++) {
    console.log( + Number + " x " + i + " = " + Number*i )

}

for ( var i = 1; i < 11; i++) {
    var num = Math.floor(Math.random() * 180) + 20;
    if(num%2===0){
        console.log(num + " is even ")

    }
else{console.log(num + " is odd")}
}
for(var i = 100; i>=5;i-=5)
    console.log(i);
// // generate a number between one and ten
// var startNumber = Math.floor(Math.random() * 10) + 1;
// // display the multiplication tables for that number
// for (var i = 1; i <= 10; i += 1) {
//     var result = i * startNumber;
//     console.log(startNumber + ' times ' + i + ' is ' + result);
// }





// ---------------------------------------------------------------------

// // generate 10 random numbers
// // each random number should be between 20 and 200
// var randomNumber;
// var oddOrEven;
//
// // go from one to 10
// for (var i = 0; i < 10; i += 1) {
//     // get a random number
//     randomNumber = Math.floor(Math.random() * 180) + 20;
//     // determine it's oddness or eveness
//     oddOrEven = randomNumber % 2 == 0 ? 'even' : 'odd';
//
//     console.log(randomNumber + ' is ' + oddOrEven);
// }

// ---------------------------------------------------------------------

// count from 100 to 5 by fives
for (var i = 100; i >= 5; i -= 5) {
    console.log(i);
}