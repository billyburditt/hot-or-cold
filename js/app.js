

$(document).ready(function () {

    var randomNumber;
    var hasWon;
    var numberOfGuesses;


    /*--- Display information modal box ---*/
    $(".what").click(function () {
        $(".overlay").fadeIn(1000);

    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function () {
        $(".overlay").fadeOut(1000);
    });


    $(".new").click(function (event) {
        event.preventDefault();
        newGame();
    });


    $("#guessButton").on("click", function () {
        event.preventDefault();
        var feedback = $("#feedback");
        
        if (hasWon) {
            feedback.text("You Won this game already!\n You need to start a new game.");
            return;
        };

        //test if value is valid
        var guess = +$("#userGuess").val()
        var isVal = Validate(guess);
        var distance = 0;
        if (!isVal) {
            return;
        };


        //
        distance = Math.abs(guess - randomNumber);
        switch (true) {
            case (distance === 0):
                hasWon = true;
                feedback.text("You've guessed the number!");
                break;
            case (distance <= 10):
                feedback.text("Very Hot!");
                break;
            case (distance <= 20):
                feedback.text("Hot!");
                break;
            case (distance <= 30):
                feedback.text("Warm!");
                break;
            case (distance <= 40):
                feedback.text("Cold!");
                break;
            default:
                feedback.text("Ice Cold!");
                break;
        }

        //increment number
        numberOfGuesses++;
        $('#count').text(numberOfGuesses);
        $("#guessList").append('<li>' + guess + '</li>');
        $("#userGuess").val("");
        $("#userGuess").focus();
    });

    function Validate (guess) {
        var isValid = false;
        if (!isNaN(guess)) {
            if (guess < 100 && guess > 0) {
                isValid = true;
            }
            else {
                alert("Please enter a valid range.");
            };

        }
        else {
            alert("Please enter a number.");
        };

        return isValid
    };

    function newGame() {
        numberOfGuesses = 0;
        hasWon = false;
        $("#userGuess").val("");
        $("#guessList").text("");
        $('#count').text(0);
        $("#feedback").text("Make your Guess!");
        
        randomNumber = Math.floor(Math.random() * 101)
    };

    newGame();

});


