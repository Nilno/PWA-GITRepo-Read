/*
 Name: Amaren Read
 Date: 1-29-2015
 Class & Section:  PWA1-Sec 1
 Goal: Goal7 Assign objects to prototypes: Person Blueprint
 */

(function(){
    window.Person=Person();

    Person.jobs = ["doctor", "comedian", "student","dentist"];  //Created Array for persons jobs
    Person.actions = ["playing","eating","working"];            //Created Array for persons actions

    function Person(){                                //Constructor person function for name and row

        this.name = Person.name[Math.floor(Math.random()*Person.name.length)]; //names to be randomly choosing when refreshing

        this.actions = Person.actions[Math.floor(Math.random()*Person.actions.length)]; //continuation of actions generated every few seconds

        this.job = Person.jobs[Math.floor(Math.random()*Person.jobs.length)]; // Jobs being randomly cycled through in column 2

        this.row = row; // Shows how many rows there are

        var id = document.getElementById("r" +this.row+ "c3"); //DOM to extract id from HTML
        id.innerHTML = this.action;  //Extraction showing the actions given

    }

    Person.prototype.update = function(){ //Prototype function to store and pass an if statement
        if (Math.floor(Math.random() <.01)){ //If statement to calculate through the actions of the persons
            var i = Math.floor(Math.random()*Person.actions.length); //Cycles through persons actions in 3rd column
            this.action = Person.actions[i];                         //Shows actions in column 3
            var id = document.getElementById("row1");  //Specifies which row actions will been shown in
            id.innerHTML = this.action; //Extracts HTML id that shows the specified action
            return i; //returns variable value

        }
    }

})();