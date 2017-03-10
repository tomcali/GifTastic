// trivia game

// total wrapper function
// we wrap the entire game code in a standard jQuery ready function

$(document).ready(function() {

// declare selected game variables up front
    var numberItems = 3; // number of questions to ask in game

// identify DOM elements up front 
// not sure whether these statements are needed
    var startButton = document.getElementById("startButton");
    var pickA = document.getElementById("pickA");
    var pickB = document.getElementById("pickB");
    var pickC = document.getElementById("pickC");
    var pickD = document.getElementById("pickD");
    var pickE = document.getElementById("pickE");    
    var altA = document.getElementById("altA");
    var altB = document.getElementById("altB");
    var altC = document.getElementById("altC");
    var altD = document.getElementById("altD");
    var altE = document.getElementById("altE");

// declare additional global variables    
    var indexOfItem;
    var numberCorrect;
    var itemFeedback;
    var pick;

$("#startGame").on("click", function() {
    // readGameData.js contains an array of trivia questions
    console.log('-------------------------------');
    console.log('-------- START NEW GAME -------');
    console.log('-------------------------------');
    console.log('the game data consist of 3 trivia items');
    console.log('that is an array of objects called gameData shown below:');
    console.log(gameData);

    numberCorrect = 0; // initialize
    indexOfItem = 0;  // initialize

    while ((indexOfItem < numberItems) && gameOn) {
        console.log('-----------------------------');
        console.log('indexOfItem', indexOfItem)

    // indexOfItem is 0, 1, or 2 for this test game of 3 items
    // we select the trivia question information for this item
    // present the question stem with its three alternatives
    $('#stem').text(gameData[indexOfItem].stem);
    $('#altA').text(gameData[indexOfItem].altA);
    $('#altB').text(gameData[indexOfItem].altB);
    $('#altC').text(gameData[indexOfItem].altC);
    $('#altD').text(gameData[indexOfItem].altD);
    $('#altE').text(gameData[indexOfItem].altE);

    // on button selection we note which button was pressed
    // we determine if it was the correct button/correct answer
    // wait for a button selection

    // begin pickToggle while block
    // Boolean toggle true after pick made

    $("#pickA").on("click", function() {
        pick = 'altA';
        console.log('pick for item ', indexOfItem, ' is ', pick);
        console.log(gameData[indexOfItem].altCorrect);
        if (pick === gameData[indexOfItem].altCorrect) {
            console.log('this pick is correct');
            numberCorrect++;
            itemFeedback = 'That is correct.';
        }
        else {
            console.log('this pick is incorrect');
            itemFeedback = gameData[indexOfItem].feedback
        };
        indexOfItem++;  // increment item counter
    });

   $("#pickB").on("click", function() {
        pick = 'altB';
        console.log('pick for item ', indexOfItem, ' is ', pick);
        if (pick === gameData[indexOfItem].altCorrect) {
            console.log('this pick is correct');
            numberCorrect++;
            itemFeedback = 'That is correct.';
        }
        else {
            console.log('this pick is incorrect');
            itemFeedback = gameData[indexOfItem].feedback
        };
        indexOfItem++;  // increment item counter
    });

   $("#pickC").on("click", function() {
        pick = 'altC';
        console.log('pick for item ', indexOfItem, ' is ', pick);
        if (pick === gameData[indexOfItem].altCorrect) {
            console.log('this pick is correct');
            numberCorrect++;
            itemFeedback = 'That is correct.';
        }
        else {
            console.log('this pick is incorrect');
            itemFeedback = gameData[indexOfItem].feedback
        };
        indexOfItem++;  // increment item counter
    });

   $("#pickD").on("click", function() {
        pick = 'altD';
        console.log('pick for item ', indexOfItem, ' is ', pick);
        if (pick === gameData[indexOfItem].altCorrect) {
            console.log('this pick is correct');
            numberCorrect++;
            itemFeedback = 'That is correct.';
        }
        else {
            console.log('this pick is incorrect'); 
            itemFeedback = gameData[indexOfItem].feedback
        };
        indexOfItem++;  // increment item counter   
    });

   $("#pickE").on("click", function() {
        pick = 'altE';
        console.log('pick for item ', indexOfItem, ' is ', pick);
        if (pick === gameData[indexOfItem].altCorrect) {
            console.log('this pick is correct');
            numberCorrect++;
            itemFeedback = 'That is correct.';
        }
        else {
            console.log('this pick is incorrect');
            itemFeedback = gameData[indexOfItem].feedback
        };
        indexOfItem++;  // increment item counter
    });

    // response-correct or response-incorrect information 
    // is displayed in the feedback field
    // if response-correct, we increment the numberCorrect counter
    // we report the current numberCorrect in the bottom row
    $('#feedback').text(itemFeedback);
    $('#score').text('Number Correct: ' + numberCorrect.toString());

    // finally we increment the indexOfItem counter

    }; // end of major while-loop for items

  }); // end of startGame on click section

}); // end of total wrapper function
