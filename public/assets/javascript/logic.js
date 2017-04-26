//Global Variables
// --------------------------------------------------------------------

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

$('.game').hide();
$('#displayHint').hide();

guesses = 10;

$("#score").on("click", function () {
    $("#highScore").show();
    $("#score").hide();
});

// Displays game when clicking button

$("#start").on("click", function (e) {

    e.preventDefault();

    startGame();
    displayBlanks();

    console.log(chosen);
    console.log(letters);
    console.log(blanks);
    console.log(initialDisplay);

    // Captures entered key

});

    $(document).keyup(function (e) {
        var keyPressed = e.key; //this is a letter

        console.log("keyPressed " + keyPressed);
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

                } else if (blanksAndSuccesses.indexOf(chosen[i]) >= 0) {
                    initialDisplay += chosen[i];
                } else {
                    initialDisplay += " _ ";
                }
            }

            if (initialDisplay.indexOf("_") == -1) {
                console.log("You win!")

                wins++;

                console.log(wins)
                endRound();

                if (guesses == 10) {
                    score += 50
                    $("#scoreGoesHere").html(score);
                    console.log("hello");
                } else if (guesses == 9) {
                    score += 45
                    $("#scoreGoesHere").html(score);
                } else if (guesses == 8) {
                    score += 40
                    $("#scoreGoesHere").html(score);
                } else if (guesses == 7) {
                    score += 35
                    $("#scoreGoesHere").html(score);
                } else if (guesses == 6) {
                    score += 30
                    $("#scoreGoesHere").html(score);
                } else if (guesses == 5) {
                    score += 25
                    $("#scoreGoesHere").html(score);
                } else if (guesses == 4) {
                    score += 20
                    $("#scoreGoesHere").html(score);
                } else if (guesses == 3) {
                    score += 15
                    $("#scoreGoesHere").html(score);
                } else if (guesses == 2) {
                    score += 10
                    $("#scoreGoesHere").html(score);
                } else if (guesses == 1) {
                    score += 5
                    $("#scoreGoesHere").html(score);
                }

                endRound();
            }

        } else {

            wrongGuesses.push(keyPressed);
            console.log(wrongGuesses);
            guesses--;
            $("#numGuesses").text(guesses);
            $("#wrongLetters").append(keyPressed);

        }

        endRound();

        $('#wordGoesHere').html(initialDisplay);

        // endRound();

    });

    // Starts Game
    function startGame() {

        //Resets values
        guesses = 10;
        wrongGuesses = [];
        blanksAndSuccesses = [];

        // Hides and shows buttons
        $(".container").hide();
        $(".game").show();
        $("#start").hide();
        $('#highScore').hide();

        // $('#displayHint').show();

        // $("#displayHint").on("click", function () {
        //     $('#displayHint').hide();

        // });

        // Chooses random word

        var randomIndex = Math.floor(Math.random() * movieQuotes.length);

        chosen = movieQuotes[randomIndex].quote;
        letters = chosen.split("");

        // Appends word to page
        $('#movieGoesHere').html(movieQuotes[randomIndex].movie)
        console.log(movieQuotes[randomIndex].movie);
        blanks = letters.length;

        $("#wrongLetters").html(wrongGuesses);

    };

    function displayBlanks() {

        if (chosen.indexOf(" ") >= 0) {
            blanksAndSuccesses.push(" ");

            if (chosen.indexOf("!") >= 0) {
                blanksAndSuccesses.push("!");
            }

            if (chosen.indexOf(".") >= 0) {
                blanksAndSuccesses.push(".");
            }

            if (chosen.indexOf(",") >= 0) {
                blanksAndSuccesses.push(",");
            }

            if (chosen.indexOf("'") >= 0) {
                blanksAndSuccesses.push("'");
            }

            if (chosen.indexOf("?") >= 0) {
                blanksAndSuccesses.push("?");
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
    // Ends the round

    function endRound() {

        if (guesses == 0) {
            losses++;

            console.log(losses);

            startGame();
            // displayBlanks();

            console.log(initialDisplay);
        }


    };


// module.exports = lyrics;
// module.exports = movieQuotes;
