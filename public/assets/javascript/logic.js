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
        movie: "Test",//"There Will Be Blood",
        quote: "Test"//"I drink your milkshake! I drink it up!"
    },
    {   movie: "Test 2: Test Harder",
        quote: "Test Again",
    //     movie: "Gone with the Wind",
    //     quote: "Frankly, my dear, I don't give a damn"
    },

    // {
    //     movie: "The Godfather",
    //     quote: "Leave the gun. Take the cannoli"
    // },

    // {
    //     movie: "Robocop",
    //     quote: "I'd buy that for a dollar!"
    // },

    // {
    //     movie: "Network",
    //     quote: "I'm mad as hell, and I'm not going to take this anymore!"
    // },

    // {
    //     movie: "Airplane",
    //     quote: "I am serious, and don't call me Shirley"
    // },

    // {
    //     movie: "Monty Python and the Holy Grail",
    //     quote: "Are you suggesting coconuts migrate?"
    // },


];

var chosen = "";
var letters = [];
var blanks = 0;
var blanksAndSuccesses = [];

var wrongGuesses = [];

var score = 0;
var wins = 0;
var losses = 0;
var guesses = 10;

// ---------------------------------------------------------------------------

$('.game').hide();
$('#highScore').hide();
$('#displayHint').hide();

guesses = 10;

// Displays game when clicking button

// $("#start").on("click", function () {

    // Starts Game
    function startGame() {

        // Hides and shows buttons
        $(".game").show();
        $("#start").hide();
        $('#displayHint').show();

        $("#score").on("click", function () {
            $("#highScore").show();
            $("#score").hide();
        });

        // $("#displayHint").on("click", function () {
        //     $('#displayHint').hide();

        // });

        // Chooses random word

        var randomIndex = Math.floor( Math.random() * movieQuotes.length );

        chosen = movieQuotes[randomIndex];
        letters = chosen.quote.split("");

        //  for (var i = 0; i>letters.length; i++) {
        //     if (letters[i] === " ") {
        //         console.log("hi");
        //     }
        // }

        // Appends word to page
        $('#movie').append(chosen.movie)
        blanks = letters.length;

        // Resets values
        guesses = 10;
        wrongGuesses = [];
        var blanksAndSuccesses = [];

        // Displays word as blanks

        for (var i = 0; i < blanks; i++) {
            blanksAndSuccesses.push("_");

        };

        $("#wordGoesHere").text(blanksAndSuccesses.join(" "));
        $("#numGuesses").append(guesses);



        console.log(chosen);
        console.log(letters);
        console.log(blanks);
        console.log(blanksAndSuccesses.join(" "));

    };

    // Checks if letter is in words

    function checkLetters(letter) {

        var letterInWord = false;

        for (var i = 0; i < blanks; i++) {
            if (chosen.quote[i] == letter) {
                letterInWord = true;
            };
        };

        if (letterInWord) {
            for (var i = 0; i < blanks; i++) {
                if (chosen.quote[i] == letter) {
                    blanksAndSuccesses[i] = letter;

                    $("#wordGoesHere").text(blanksAndSuccesses.join(" "));
                };
            };

        } else {
            wrongGuesses.push(letter);
            guesses--;

            $("#numGuesses").text(guesses);
        }

        console.log(blanksAndSuccesses.join(" "));

    };

    // Ends the round

    function endRound() {

        if (blanksAndSuccesses == "Test") {//(letters.toString() == blanksAndSuccesses.toString()) {
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

    // Captures entered key

    $(document).keypress(function (e) {
        var letterGuessed = String.fromCharCode(e.keyCode);
        checkLetters(letterGuessed);

        console.log(letterGuessed);
    });

    endRound();

// });


// module.exports = lyrics;
module.exports = movieQuotes;
