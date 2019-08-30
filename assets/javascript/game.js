var words = ["apple", "banana", "peach", "potato", "xylophone"];
var newGame = true;
var gameOver;
var wins = 0;
var gameWord;
var guesses = [];
var ans;

document.onkeyup = function (event) {
    // This if contains everything that happens when the game is going
    if (gameOver === false && newGame === false) {
        guesses.push(event.key);
        // Tracking wrong guesses
        if (gameWord.indexOf(event.key) < 0) {
            console.log('wrong');
            document.getElementById('guesses-left').innerHTML = 15 - guesses.length;
        }
        // Tracking right guesses
        else if (gameWord.indexOf(event.key) >= 0) {
            ans = "";
            console.log('right');
            for (i = 0; i < gameWord.length; i++) {
                if (guesses.indexOf(gameWord[i]) >= 0) {
                    ans += gameWord[i];
                } else {
                    ans += "_ ";
                }
            }
        }
        document.getElementById('current').innerHTML = ans;
        document.getElementById('guesslist').innerHTML += event.key + ", ";
    }
    // Init new game, this if only triggers on a new game
    if (newGame) {
        document.getElementById('win-lose').innerHTML = "";
        gameWord = words[Math.floor(Math.random() * words.length)];
        gameOver = false;
        guesses = [];
        ans = "";
        for (i = 0; i < gameWord.length; i++) {
            ans += "_ ";
        }
        document.getElementById('current').innerHTML = ans;
        newGame = false;
    }

    // What to do on gameOver
    if (15 - guesses.length === 0) {
        document.getElementById('win-lose').innerHTML = "<h1>YOU LOSE</h1>";
        gameOver = true;
        newGame = true;
    }

    if(document.getElementById('current').innerHTML === gameWord){
        document.getElementById('win-lose').innerHTML = "<h1>YOU WIN</h1>";
        wins += 1;
        document.getElementById('win-counter').innerHTML = "Wins: " + wins;
        gameOver = true;
        newGame = true;
    }

}