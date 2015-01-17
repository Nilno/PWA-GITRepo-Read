/*
 Name: Amaren Read
 Date: 1-16-2015
 Class & Section:  PWA1-Sec 1
 Comments: "Goal 1: Review of WPF"
 */

// self-executing function
(function(){        //Function of self executing

    console.log("FIGHT!!!");    //Output "FIGHT!!! to console log in browser

    //OLD: player names
    //var playerOneName = "Kabal";    //Declare variable: Name of player one
    //var playerTwoName = "Kratos";       //Declare variable: Name of player two

    //Player names
    var playerOneName = ["Kabal", 20, 100];    //Setup array: Name/Damage/Health of player one
    var playerTwoName = ["Kratos", 20, 100];   //Setup array: Name/Damage/Health of player two

    //OLD: Player damage
    //var player1Damage = 20;     //Declare variable: of the max player one damage
    //var player2Damage = 20;     //Declare variable: of the max player two damage
    //OLD: Player health
    //var playerOneHealth = 100;  //Declare variable: Max of player one health
    //var playerTwoHealth = 100;  //Declare variable: Max of player two health

    //initiate round
    var round = 0;    //Declare global variable: Round begins at

    function fight(){       //Function to execute beginning of fight
        alert(playerOneName[0]+":"+playerOneName[2]+"  *START*  "+playerTwoName[0]+":"+playerTwoName[2]); //Alert window: Player1 and player2 name/health/round from array indexes
        for (var i = 0; i < 10; i++)        //For loop starting at round 0 through round 9 adding 1 round per click for 10 rounds
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = playerOneName[1] * .5;    //Declare variable: Using array indexes; minimum damage is half to max damage for player one
            var minDamage2 = playerTwoName[1] * .5;    //Declare variable: Using array indexes; minimum damage is half to max damage for player two
            var f1 = Math.floor(Math.random()*(playerOneName[1]-minDamage1)+minDamage1);   //Declare variable: Using array indexes; formula which takes max damage - minimum damage + minimum at random for player one
            var f2 = Math.floor(Math.random()*(playerTwoName[1]-minDamage2)+minDamage2);   //Declare variable: Using array indexes; formula which takes max damage - minimum damage + minimum at random for player two

            //OLD: inflict damage
            //playerOneHealth-=f1;    //Minus random number from player ones health
            //playerTwoHealth-=f2;    //Minus random number for player twos health

            //Inflict damage
            playerOneName[2]-=f1;    //Using array indexes: Minus random number from player ones health
            playerTwoName[2]-=f2;    //Using array indexes: Minus random number for player twos health

            console.log(playerOneName[2] + " " + playerTwoName[2]);  //Using array indexes: Output to console in browser of player one and player twos name and deduction of health

            //check for victor
            var result = winnerCheck(); //Declare variable: Check to see if there is a winner
            console.log(result);        //Output result of winner in console of browser after each round
            if (result==="no winner")   //Conditional to determine if there is a winner or not
            {
                round++; //Round variable number by one
                alert(playerOneName[0]+":"+playerOneName[2]+"  *ROUND "+round+" OVER"+"*  "+playerTwoName[0]+":"+playerTwoName[2]); //Using array indexes: Alert window displaying Player1 & Player2 name/health/round

            } else{ //Else, there is a winner or both players die
                alert(result);  //Alert there is a winner or both players die
                break;      //Break command to escape out of the loop if the fight is over before round 10 is reached
            };

        };
    };

    function winnerCheck(){     //Function to check to see if there is a winner after each round
        var result="no winner"; //Variable to result if there is no winner

        if (playerOneName[2]<1 && playerTwoName[2]<1) //Using array indexes: If conditional resulting both players die if their health is
        {
            result = "You Both Die";        //Results both players die
        } else if(playerOneName[2]<1){       //Using array indexes: Else if to state if player ones health is less than 1
            result =playerTwoName[0]+" WINS!!!" //Using array indexes: Result would be player two wins
        } else if (playerTwoName[2]<1)       //Using array indexes: Else if to state if player twos health is les then 1
        {
            result = playerOneName[0]+" WINS!!!"//Using array indexes: Result would be player one wins
        };
        return result; //Return result after conditional is run
    };

    /*******  The program gets started below *******/

    fight(); //call fight function

})();