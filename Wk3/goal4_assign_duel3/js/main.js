/*
 Name: Amaren Read
 Date: 1-23-2015
 Class & Section:  PWA1-Sec 1
 Comments: "Goal 4: Assign. Duel3"
 */

// self-executing function
(function(){        //Function of self executing

    console.log("FIGHT!!!");    //Output "FIGHT!!! to console log in browser


    var playerOneName = document.querySelector("#kabal").querySelector("p");    //DOM element: define variable for player 1 and pulling it from html
    var playerTwoName = document.querySelector("#kratos").querySelector("p");   //DOM element: define variable for player 2 and pulling it from html
    var round_number = document.getElementById("round_number");
    var button = document.querySelector("#fight_btn");


    //OLD: player names
    //var playerOneName = "Kabal";    //Declare variable: Name of player one
    //var playerTwoName = "Kratos";       //Declare variable: Name of player two


    button.addEventListener("click", fight, false); //Setup click event by adding event for fight button

    var fighters = [                        //Created array for fighters using objects
        {
            name:"Kabal",                   //object-key "name" = Kabal defined by index[0]
            damage:20,                      //index[0].damage fighter inflicts
            health:100                      //index[0].health fighters health
        },
        {
            name:"Kratos",                  //object-key "name" = Kratos defined by index[1]
            damage:20,                      //index[0].damage: fighter inflicts
            health:100                      //index[0].health: fighters health
        }];                                 //Closure of fighter array

    //OLD: Player damage
    //var player1Damage = 20;     //Declare variable: of the max player one damage
    //var player2Damage = 20;     //Declare variable: of the max player two damage
    //OLD: Player health
    //var playerOneHealth = 100;  //Declare variable: Max of player one health
    //var playerTwoHealth = 100;  //Declare variable: Max of player two health

    //initiate round
    var round = 1;    //Declare global variable: Round begins at

    round.innerHTML = "round_number";                                           //Rounds to be manipulated on html page
    playerOneName.innerHTML = fighters[0].name + ":  " + fighters[0].health;    //Defining the elements: name and health of fighter 1 at top of html page
    playerTwoName.innerHTML = fighters[1].name + ":  " + fighters[1].health;    //Defining the elements: name and health of fighter 2 at top of html page

    function fight() {       //Function to execute beginning of fight
                             //alert(playerOneName[0]+":"+playerOneName[2]+"  *START*  "+playerTwoName[0]+":"+playerTwoName[2]); //Alert window: Player1 and player2 name/health/round from array indexes

        //for (var i = 0; i < 10; i++)        //For loop starting at round 0 through round 9 adding 1 round per click for 10 rounds

        playerOneName.innerHTML = fighters[0].name + ":  " + fighters[0].health;    //Initializing DOM elements: Manipulation of text up to date on html page for fighter 1
        playerTwoName.innerHTML = fighters[1].name + ":  " + fighters[1].health;    //Initializing DOM elements: Manipulation of text up to date on html page for fighter 2

        var f1 = Math.floor(Math.random() * fighters[0].damage + fighters[0].damage * .5);   //Using the fighter array indexes; random damage formula: up to date health on html page for fighter 1
        var f2 = Math.floor(Math.random() * fighters[1].damage + fighters[1].damage * .5);   //Using the fighter array indexes; random damage formula: up to date health on html page for fighter 2

        fighters[0].health -= f1;           //Using fighter array indexes: damage done by fighter 1
        fighters[1].health -= f2;           //Using fighter array indexes: damage done by fighter 2

        console.log(fighters[0].health, fighters[1].health);    //Print out to console log using fighter array for both fighters health

        var result = winnerCheck(); //Check for a winner
        console.log(result);        //Print to console if there is a winner or not

        round_number.innerHTML = "Round #" + round + " Results:"; //Manipulation of text of the rounds text on html page
        round++;                                                  //Adding of rounds with each click of fight button
        if (result === "no winner") {                             //Conditional seeing if there is a winner or not
            playerOneName.innerHTML = fighters[0].name + ":  " + fighters[0].health;    //Using fighter array indexes: Display name and updated health of fighter 1 on html page
            playerTwoName.innerHTML = fighters[1].name + ":  " + fighters[1].health;    //Using fighter array indexes: Display name and updated health of fighter 2 on html page

        } else {                                        //Else: there is a winner or both players die
            playerOneName.innerHTML = result;           //Fighter 1 results in no win
            playerTwoName.innerHTML = "";               //Fighter 2 results in no win

            button.removeEventListener("click", fight, false);               //Setup click event by removing or stopping click event for fight button

            document.querySelector(".buttonblue").innerHTML = "Game Over!!"; //Manipulate button text when there is a winner showing "Game Over!!" on html page

        }
        //OLD: random formula is - Math.floor(Math.random() * (max - min) + min);
        //OLD: var minDamage1 = playerOneName[1] * .5;    //Declare variable: Using array indexes; minimum damage is half to max damage for player one
        //OLD: var minDamage2 = playerTwoName[1] * .5;    //Declare variable: Using array indexes; minimum damage is half to max damage for player two


    }        //OLD: inflict damage
            //playerOneHealth-=f1;    //Minus random number from player ones health
            //playerTwoHealth-=f2;    //Minus random number for player twos health

            //OLD: Inflict damage
            //playerOneName[2]-=f1;    //Using array indexes: Minus random number from player ones health
            //playerTwoName[2]-=f2;    //Using array indexes: Minus random number for player twos health

            //console.log(playerOneName[2] + " " + playerTwoName[2]);  //Using array indexes: Output to console in browser of player one and player twos name and deduction of health

            //check for victor
            //var result = winnerCheck(); //Declare variable: Check to see if there is a winner
            //console.log(result);        //Output result of winner in console of browser after each round
            //if (result==="no winner")   //Conditional to determine if there is a winner or not
            //{
                //round++; //Round variable number by one
                //alert(playerOneName[0]+":"+playerOneName[2]+"  *ROUND "+round+" OVER"+"*  "+playerTwoName[0]+":"+playerTwoName[2]); //Using array indexes: Alert window displaying Player1 & Player2 name/health/round

            //} else{ //Else, there is a winner or both players die
              //  alert(result);  //Alert there is a winner or both players die
                //break;      //Break command to escape out of the loop if the fight is over before round 10 is reached
            //};

        //};
    //};

    function winnerCheck(){     //Function to check to see if there is a winner after each round
        var result="no winner"; //Variable to result if there is no winner

        if (fighters[0].health < 1 && fighters[1].health < 1) //Using fighter array indexes: Conditional if both player die if their health is less then 1
        {
            result = "You Both Die!";        //Results both players die
        } else if(fighters[0].health < 1){       //Using fighter array indexes: Else if to state if fighter 1 health is less than 1
            result =fighters[1].name + " WINS!!!" //Using fighter array indexes: Fighter 2 wins
        } else if (fighters[1].health < 1)       //Using fighter array indexes: Else if to state if fighter 2 health is les then 1
        {
            result = fighters[0].name + " WINS!!!"//Using fighter array indexes: Fighter 1 wins
        };
        return result; //Return result after conditional is run
    };

    /*******  The program gets started below *******/

    //fight(); //call fight function

})();