document.querySelector("#startGame").addEventListener("click", function () {
    startGame();
});

function startGame() {
    let guessOne = '';
    let guessTwo = '';
    let count = 0;

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
        card.innerHTML = `<p>${gameGrid[i].name}</p>`;
        card.classList.add('card');
        grid.appendChild(card);
    }
}