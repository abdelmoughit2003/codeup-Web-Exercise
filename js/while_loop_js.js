
var allCones = Math.floor(Math.random() * 50) + 50;
console.log(allCones);
do {

    var cones = Math.floor(Math.random() * 5) + 1;

    if (cones > allCones) {
        console.log("I cannot sell you " + cones + ", I only have " + allCones + " left.")
    } else {
        console.log("I sold " + cones + " cones.");
        allCones -= cones;
    }
}
var i = 2;
while (i <= 65536) {
    console.log(i);
    i *= 2;
}
var coneInventory = Math.floor(Math.random() * 50) + 50;
var conesToSell;

while (coneInventory > 0) {
    conesToSell = Math.floor(Math.random() * 5) + 1;
    if (conesToSell <= coneInventory) {
        console.log('Selling ' + conesToSell + ' cones...');
        coneInventory -= conesToSell;
    } else {
        console.log('I can\'t sell you ' + conesToSell + ', I only have ' + coneInventory);
    }
}
console.log('Yeah I sold all cones.')