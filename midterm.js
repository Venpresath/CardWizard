$(() => {
    $("#cardPage").hide();
    $("#playAgain").hide();
    $("#startGame").click(function () {
        $("#cardPage").show();
        $("#startGame").hide();
        startGame();
    });
});


function startGame() {
    document.querySelector("#cardPage").innerHTML = "";


    const cardObjects = [{
        'name': '1'
    },
    {
        'name': '2'
    },
    {
        'name': '3'
    },
    {
        'name': '4'
    }
    ];

    const game = document.querySelector("#cardPage");
    // const gameUpdate = document.querySelector(".gameUpdate"); //create HTML tag with .gameUpdate tag to store messages.
    const grid = document.createElement('section');
    const gameGrid = cardObjects.concat(cardObjects);
    console.log(gameGrid);
    grid.setAttribute('class', 'grid');
    game.appendChild(grid);

    function shuffle(array) {
        let currentIndex = array.length, temporaryValue, randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    shuffle(gameGrid);

    for (i = 0; i < gameGrid.length; i++) {
        let card = document.createElement("div");
        card.innerHTML = `<p id="${gameGrid[i].name}">${gameGrid[i].name}</p>`;
        card.classList.add('card');
        card.classList.add('cardBack');
        grid.appendChild(card);
    }

    //game logic

    let winCount = 4;
    let loseCount = 3;
    let guesses = [];
    let choices = [];

    //Make it so the player can only select one card at a time.
    let selectedCard = $(".card").on("click", function () {
        selectedCard = $(this).find('p').text();
        cardIndex = $(this).index();
        choices.push(cardIndex);
        console.log(choices);
        $(this).toggleClass("active");
        guesses.push(selectedCard);
        console.log(guesses);

        if (choices.length === 2 && choices[0] === choices[1]) {
            console.log("You cannot choose the same card");
        } else {
            runGame();
        }

        function runGame() {
            if (guesses.length === 2 && guesses[0] === guesses[1]) {
                console.log("correct!");
                winCount--
                if (winCount === 0) {
                    // gameUpdate.innerHTML = `<b>You Win!!</b>`; //update .gameUpdate tag here.
                    console.log("You win!");
                    //Pop up modal to ask user if they want to play again and run function below:
                    startGame();
                }
            } else if (guesses.length === 2 && guesses[0] !== guesses[1]) {
                //if the cards don't match, make sure they flip down after 3 seconds (3000 ms)
                console.log(`<b>try again, you have ${loseCount} times left</b>`); //delete this when you get the gameUpdate tag done.
                loseCount--
                if (loseCount === 0) {
                    console.log("please try again");
                    //ask user if they want to play again and run function below:
                    startGame();
                }
            }
        }

        if (guesses.length >= 2) {
            guesses.splice(0, 2);
        }

        if (choices.length >= 2) {
            choices.splice(0, 2);
        }
    });
}