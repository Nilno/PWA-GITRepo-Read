/*
 Name: Amaren Read
 Date: 1-11-2015
 Class & Section:  PWA1-Sec 1
 Comments: "Goal 1: Review of WPF"
 */

// self-executing function
(function(){        //Function of self executing

    console.log("FIGHT!!!");    //Output "FIGHT!!! to console log in browser

    //player name
    var playerOneName = "Kabal";    //Declare variable: Name of player one
    var playerTwoName = "Kratos";       //Declare variable: Name of player two

    //player damage
    var player1Damage = 20;     //Declare variable: of the max player one damage
    var player2Damage = 20;     //Declare variable: of the max player two damage

    //player health
    var playerOneHealth = 100;  //Declare variable: Max of player one health
    var playerTwoHealth = 100;  //Declare variable: Max of player two health

    //initiate round
    var round=0;    //Declare variable: Round begins at

    function fight(){       //Function to execute beginning of fight
        alert(playerOneName+":"+playerOneHealth+"  *START*  "+playerTwoName+":"+playerTwoHealth); //Alert window displaying Player one name/health and player two name/health and round
        for (var i = 0; i < 10; i++)        //For loop starting at round 0 through round 9 adding 1 round per click for 10 rounds
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = player1Damage * .5;    //Declare variable: Minimum damage is half to max damage for player one
            var minDamage2 = player2Damage * .5;    //Declare variable: Minimum damage is half to max damage for player two
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1);   //Declare variable: Formula which takes max damage - minimum damage + minimum at random for player one
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);   //Declare variable: Formula which takes max damage - minimum damage + minimum at random for player two

            //inflict damage
            playerOneHealth-=f1;    //Minus random number from player ones health
            playerTwoHealth-=f2;    //Minus random number for player twos health

            console.log(playerOneName+": "+playerOneHealth + " " + playerTwoName+":"+playerTwoHealth);  //Output to console in browser of player one and player twos name and deduction of health

            //check for victor
            var result = winnerCheck(); //Declare variable: Check to see if there is a winner
            console.log(result);        //Output result of winner in console of browser after each round
            if (result==="no winner")   //Conditional to determine if there is a winner or not
            {
                round++; //Round variable number by one
                alert(playerOneName+":"+playerOneHealth+"  *ROUND "+round+" OVER"+"*  "+playerTwoName+":"+playerTwoHealth); //Alert window displaying Player one name/health and player two name/health and round

            } else{ //Else, there is a winner or both players die
                alert(result);  //Alert there is a winner or both players die
                break;      //Break command to escape out of the loop if the fight is over before round 10 is reached
            };

        };
    };

    function winnerCheck(){     //Function to check to see if there is a winner after each round
        var result="no winner"; //Variable to result if there is no winner
        if (playerOneHealth<1 && playerTwoHealth<1) //If conditional resulting both players die if their health is
        {
            result = "You Both Die";        //Results both players die
        } else if(playerOneHealth<1){       //Else if to state if player ones health is less than 1
            result =playerTwoName+" WINS!!!" //Result would be player two wins
        } else if (playerTwoHealth<1)       //Else if to state if player twos health is les then 1
        {
            result = playerOneName+" WINS!!!"//Result would be player one wins
        };
        return result; //Return result after conditional is run
    };

    /*******  The program gets started below *******/

    fight(); //call fight function

})();