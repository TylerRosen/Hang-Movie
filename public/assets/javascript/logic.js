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
var blanksAndSuccesses = [];

var wrongGuesses = [];

var score = "";
var wins = 0;
var losses = 0;
var guesses = 10;

// ---------------------------------------------------------------------------

$('.game').hide();
$('#highscore').hide();
$('#displayHint').hide();

guesses = 10;

// Displays game when clicking button

$("#start").on("click", function () {

    function startGame() {

        $(".game").show();
        $("#start").hide();
        $('#displayHint').show();

        $("#score").on("click", function () {
            $("#highscore").show();
            $("#score").hide();
        });

        $("#displayHint").on("click", function () {
            $('#displayHint').hide();

        });

        chosen = movieQuotes[Math.floor(Math.random() * movieQuotes.length)];
        letters = chosen.quote.split("");

        $('#movie').append(chosen.movie)
        blanks = letters.length;

        // Resets values
        guesses = 10;
        wrongGuesses = [];
        var blanksAndSuccesses = [];

        for (var i = 0; i < blanks, i++) {
            blanksAndSuccesses[i].push("_");

        }


        console.log(chosen);
        console.log(letters);
        console.log(blanks);
        console.log(blanksAndSuccesses);

    };

    startGame();

});

// module.exports = lyrics;
module.exports = movieQuotes;