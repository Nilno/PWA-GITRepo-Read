/*
 Name: Amaren Read
 Date: 1-29-2015
 Class & Section:  PWA1-Sec 1
 Goal: Goal7 Assign objects to prototypes: Main
 */

    function person(){ //Executing function

    var numPeople = 3;                                          //How many people will show on html file
    var people = ["individual","individual2","individual3"];    //Array for the 3 people instances
    var names = ["Mike", "Keira", "Amaren", "Amy", "Pete"];     //Names of people array to be randomly generated
    var interval = [];

    for (var i = 0; i < numPeople; i++){                    //for loop that instantiates each person

        names = Math.floor(Math.random()*names.length);     //Variable for length of people to be generated

        var individual = new Person(names[0],["row1"]);     //Instance for person 1
        var individual2 = new Person(names[1]["row2"]);     //Instance for person 2
        var individual3 = new Person(names[2]["row3"]);     //Instance for person 3


        //populateHTML(Person.jobs,"row1" +(i+1)+"r1c1");
        //populateHTML(Person.actions,"row3" +(i+1)+"r2c3");


        Person.push(people);                                //Pushes the name of the person into the random generations
        name.splice(0,1);                                   //Adds or removes items from the name array returning the removed items
    }

        function populateHTML(){                            //Out puts persons name and job

            setInterval(runUpdate, 1000 / 30); //Interval to run 30 times a second action generate

            var id=document.getElementById("row3");         //Shows actions on html page in columns
        id.innerHTML = "row3";                              //Shows the actions in the rows
        return id;                                          //Returns actions call
    }
        clearInterval(runUpdate());                         //clear interval before running the new to be sure one is running at a time

    function runUpdate() {                                  //Updates actions in html page
        people.forEach(function(){                          //Shows name of person when updating

            interval.update();                              //Calls back the update of the function
        });
    }
};

