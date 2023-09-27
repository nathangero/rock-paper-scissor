var playButton = document.querySelector("#play-button");

function playGame() {
    var doesUserWantToPlay = confirm("Do you want play Rock, Paper, Scissors?");

    if (!doesUserWantToPlay) {
        alert("Goodbye");
        return;
    }

    var userChoice = prompt("Enter R, P, or S");
    if (userChoice != "R" && userChoice != "P" && userChoice != "S") {
        alert("Please enter R, P, or S. Please try again.");
        return;
    }

    var pcOptions = ["R","P","S"];
    var pcChoice = pcOptions[Math.floor(Math.random() * pcOptions.length)];
        alert("PC selected " + pcChoice);
    
    var t = 0;
    var w = 0;
    var l = 0;

    if (userChoice === pcOptions){
        alert("It's tie");
        t++;
    }else if((userChoice === "R" && pcChoice === "S") || (userChoice === "P" && pcChoice === "R") || (userChoice === "S" && pcChoice === "P") ){
        alert("You won!");
        w++;
    }else{
        alert("You lost!")
        l++;
    };
    
    alert("Current results \n Tie: " + t + "\n Wins: " + w + "\n Losses: " + l);
}

// try later? repeatedly asking the user to have the valid input.
function userPicksRps() {
    var userChoice = prompt("Enter R, P, or S");
    if (userChoice != "R" || userChoice != "P" || userChoice != "S") {
        alert("Please enter R, P, or S");
    }
}

playButton.addEventListener("click", playGame);