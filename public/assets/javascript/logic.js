//Global Variables
// --------------------------------------------------------------------

// var lyrics = [
//     {
//         song:"Protect Ya Neck",
//         artist: "Wu Tang Clan",
//         lyric:"I smoke on the mic like Smokin' Joen Frazier, the hell-raiser, raising Hell with the flavor"
//     },

//     {
//         song:"Bad Romance",
//         artist: "Lady Gaga",
//         lyric:"Rah, rah, ah, ah, ah, roma, roma, ma. Gaga, ooh, la, la... want your bad romance!"
//     },

//       {
//         song:"Lose Yourself",
//         artist: "Eminem",
//         lyric:"There's vomit on his sweater already, mom's spaghetti!"
//     },

//     {
//         song: "Square Hammer",
//         artist: "Ghost",
//         lyric: "Are you on the square? Are you on the level? Are you ready to swear right here, right now before the devil?"
//     },

//     {
//         song:"Baby Got Back",
//         artist: "Sir Mix-a-Lot",
//         lyric: "I like big butts and I cannot lie. You other brothers can't deny",
//     },

//      {
//         song:"Du Hast",
//         artist: "Rammstein",
//         lyric:"Willst du, bis der Tod euch scheidet, treu ihr sein fur alle tage?",
//     },

//      {
//         song:"Take on me",
//         artist: "A-ha",
//         lyric: "Take on me, take me on, I'll be gone in a day or two",
//     },



// ];

var movieQuotes = [
    {
        movie: "There Will Be Blood",
        quote: "I drink your milkshake! I drink it up!"
    },
    {
        movie: "Gone with the Wind",
        quote: "Frankly, my dear, I don't give a damn"
    },

    {
        movie: "The Godfather",
        quote: "Leave the gun. Take the cannoli"
    },

    {
        movie: "Robocop",
        quote: "I'd buy that for a dollar!"
    },

    {
        movie: "Network",
        quote: "I'm mad as hell, and I'm not going to take this anymore!"
    },

    {
        movie: "Airplane",
        quote: "I am serious, and don't call me Shirley"
    },

    {
        movie: "Monty Python and the Holy Grail",
        quote: "Are you suggesting coconuts migrate?"
    },


];

var chosen = "";
var letters = [];
var blanks = 0;
var initialDisplay = "";
var blanksAndSuccesses = [];

var correctLetters = 0;
var wrongGuesses = [];

var score = 0;
var wins = 0;
var losses = 0;
var guesses = 10;

// ---------------------------------------------------------------------------

// $('.game').hide();
// $('#displayHint').hide();

guesses = 10;

// Displays game when clicking button

// $("#start").on("click", function () {

// Starts Game
function startGame() {

     // Resets values
    guesses = 10;
    wrongGuesses = [];
    var blanksAndSuccesses = [];

    // Hides and shows buttons
    // $(".game").show();
    $("#start").hide();
    $('#highScore').hide();

    // $('#displayHint').show();

    $("#score").on("click", function () {
        $("#highScore").show();
        $("#score").hide();
    });

    // $("#displayHint").on("click", function () {
    //     $('#displayHint').hide();

    // });

    // Chooses random word

    var randomIndex = Math.floor(Math.random() * movieQuotes.length);

    chosen = movieQuotes[randomIndex].quote;
    letters = chosen.split("");

    //  for (var i = 0; i>letters.length; i++) {
    //     if (letters[i] === " ") {
    //         console.log("hi");
    //     }
    // }

    // Appends word to page
    $('#movie').append(movieQuotes[randomIndex].movie)
    console.log(movieQuotes[randomIndex].movie);
    blanks = letters.length;

    // Displays word as blanks

};

function displayBlanks() {

    if (chosen.indexOf(" ") >= 0) {
        blanksAndSuccesses.push(" ");

    if (chosen.indexOf("!") >= 0) {
        blanksAndSuccesses.push("!");
    }

    if (chosen.indexOf("'") >=0) {
        blanksAndSuccesses.push("'");
    }

     if (chosen.indexOf(",") >=0) {
        blanksAndSuccesses.push(",");
    }

     if (chosen.indexOf("'") >=0) {
        blanksAndSuccesses.push("'");
    }



        for (var i = 0; i < chosen.length; i++) {
            if (chosen[i] == " ") {
                initialDisplay += "&nbsp;&nbsp;&nbsp;";
            }
            else if (blanksAndSuccesses.indexOf(chosen[i]) >= 0) {
                initialDisplay += chosen[i];
            } else {
                initialDisplay += " _ ";
            }
        }
        $('#wordGoesHere').html(initialDisplay);
    } else {
        for (var i = 0; i < chosen.length; i++) {
            initialDisplay += " _ ";
        }

        $('#wordGoesHere').html(initialDisplay);
    }

};

// $("#wordGoesHere").text(blanksAndSuccesses.join(" "));
$("#numGuesses").append(guesses);


// Checks if letter is in words

// function checkLetters(letter) {

//     var letterInWord = false;

//     for (var i = 0; i < blanks; i++) {
//         if (chosen[i] == letter) {
//             letterInWord = true;
//         };
//     };

//     if (letterInWord) {
//         for (var i = 0; i < blanks; i++) {
//             if (chosen[i] == letter) {
//                 blanksAndSuccesses[i] = letter;

//                 $("#wordGoesHere").html(blanksAndSuccesses.join(" "));
//             };
//         };

//     } else {
//         wrongGuesses.push(letter);
//         guesses--;

//         $("#numGuesses").text(guesses);
//     }

//     console.log(blanksAndSuccesses.join(" "));

// };

// Ends the round

function endRound() {

    if (correctLetters == chosen.length + 1) {
        console.log("hello");
    };

    //     wins++;

    //     console.log(wins)
    //     startGame();

    // } else if (guesses == 0) {
    //     losses++;

    //     console.log(losses);

    //     startGame();
    // }

    // if (guesses == 10) {
    //     score + 50
    // } else if (guesses == 9) {
    //     scores + 45
    // } else if (guesses == 8) {
    //     scores + 40
    // } else if (guesses == 7) {
    //     scores + 35
    // } else if (guesses == 6) {
    //     scores + 30
    // } else if (guesses == 5) {
    //     scores + 25
    // } else if (guesses == 4) {
    //     scores + 20
    // } else if (guesses == 3) {
    //     scores + 15
    // } else if (guesses == 2) {
    //     scores + 10
    // } else if (guesses == 1) {
    //     scores + 5
    // }

    // $("#total").append(score);

};

startGame();
displayBlanks();
// checkLetters();
endRound();

console.log(chosen);
console.log(letters);
console.log(blanks);
console.log(initialDisplay);

// Captures entered key

// $(document).keypress(function (e) {
//     var letterGuessed = String.fromCharCode(e.keyCode);
//     checkLetters(letterGuessed);

//     console.log(letterGuessed);
// });

$(document).keyup(function (e) {
    var keyPressed = e.key; //this is a letter

    if (event.keyCode === 16) {

        // prevent default behaviour
        event.preventDefault();

        return false;
    }

    if (chosen.indexOf(keyPressed) >= 0) {
        blanksAndSuccesses.push(keyPressed);
        console.log(blanksAndSuccesses)

        initialDisplay = "";

        for (var i = 0; i < chosen.length; i++) {
            if (chosen[i] == " ") {
                initialDisplay += "&nbsp;&nbsp;&nbsp;";

            }else if (blanksAndSuccesses.indexOf(chosen[i]) >= 0) {
                initialDisplay += chosen[i];
            } else {
                initialDisplay += " _ ";
            }
        }

        $('#wordGoesHere').html(initialDisplay);

    } else {
        console.log('Wrong!!!')
    }

});

endRound();

// });


// module.exports = lyrics;
// module.exports = movieQuotes;
