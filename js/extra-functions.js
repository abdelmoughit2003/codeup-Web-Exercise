
while (!operation ) {
    var operation = prompt('which operation do you choose to do ?\n1: Addition \n2: Subtraction\n3: Division\n4:multiplication ')

while(!(num1/1==num1)){
        var num1 = parseInt(prompt('please type the number'));}
    while(!(num1/1==num1)){
        var num2 = parseInt(prompt('please type the number'));}



         if (operation == "1") {
            function add(num1,num2) {
                return num1 + num2;
            }

            alert(add(num1,num2))

        }

        if (operation == "2") {
            function substract(num1,num2) {
                return add(num1,(num2 * -1));
            }

            alert(substract(num1,num2))
        }


        if (operation == "3") {
            function divide(num1,num2) {
                return num1 / num2;
            }

            alert(divide(num1,num2))
        }

        if (operation == "4") {
            function multiply(num1,num2) {
                var total = 0;
                for(var i = 0; i<num2 ; i++){
                        total += num1;
                }
                return num1 * num2;
            }

            alert(multiply(num1,num2))
        }


}



