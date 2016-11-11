(function(){
    "use strict";

    // TODO: Create person object
     var person = new Object();

    // TODO: Create firstName and lastName properties in your person object; assign your name to them
    person.lastName = "laajali";
    person.firstName= "abdelmoughit";


    // TODO: Add a sayHello method to the person object that
    //       alerts a greeting using the firstName and lastName properties

    // Say hello from the person object.
    // person.sayHello();

    alert('Greetings,'+ person.lastName + person.firstName);
     person.sayHello = function() {
        console.log('Hello!'+ " " + person.lastName + " " + person.firstName)

    };

    person.sayHello();
})();