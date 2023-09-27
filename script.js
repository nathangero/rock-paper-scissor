var playButton = document.querySelector("#play-button");

function playGame() {
    var doesUserWantToPlay = confirm("Do you want play Rock, Paper, Scissors?");

    if (!doesUserWantToPlay) {
        alert("Goodbye");
        return;
    }

    var userChoice = prompt("Enter R, P, or S");
    if (userChoice != "R" || userChoice != "P" || userChoice != "S") {
        alert("Please enter R, P, or S. Please try again.");
        return;
    }
}

// try later? repeatedly asking the user to have the valid input.
function userPicksRps() {
    var userChoice = prompt("Enter R, P, or S");
    if (userChoice != "R" || userChoice != "P" || userChoice != "S") {
        alert("Please enter R, P, or S");
        

    }
}

playButton.addEventListener("click", playGame);