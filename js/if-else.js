var flipACoin = Math.floor(Math.random()* 2)

var avg = (70+80+95)/3;
if(avg > 80){
    console.log("you're awesome")
}else{
    console.log("you need to practice more.")
}

var price = 200;
var amountbeforefdiscount1 = 180;
var amountbeforefdiscount2 = 250;
var amountbeforefdiscount3 = 320;
var discount = 100;


if(amountbeforefdiscount1>price){
    amountafterdiscount = amountbeforefdiscount1-discount;
    name1 = 'Ryan';
    console.log( name1 + " amount before discount " + amountbeforefdiscount1 + " amount after discount " + amountafterdiscount)

}
else{
    console.log(name + " No discount")
}
if(amountbeforefdiscount2>price){
    amountafterdiscount = amountbeforefdiscount2-discount;
    name2 = 'Cameron';
    console.log( name2 + " amount before discount " + amountbeforefdiscount2 + " amount after discount " + amountafterdiscount)
}
else{
    console.log(name2 + " No discount ")
}

    if(amountbeforefdiscount3>price){
        amountafterdiscount = amountbeforefdiscount3-discount;
        name3 = 'George';
        console.log( name3 + " amount before discount " + amountbeforefdiscount3 + " amount after discount " + amountafterdiscount)

    }
    else{
        console.log(name3 + " No discount")
    }



 (flipACoin===0)? console.log(" Buy a car"): console.log(" Buy a house");