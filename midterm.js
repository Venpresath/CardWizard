$(() => {
  $("#cardPage").hide();
  $("#playAgain").hide();
 $("#startGame").click(function(){
     $("#cardPage").show();
     $("#cardPage").css("background-color", "#ff000080");
     startGame();
 });

 $(".card").click(function(){
     $(this).removeClass("");
 });

//  $("button").click(function(){
//     $("p").removeClass("blackground-color", "white");
//  });


//  $(".card").click(function(){
//    $(this).show();
//    card = $(this).attr("div");
//    $(this).css("background-color", "black");
//  });


//  $(".card").click(function(){
//     $("#formsheet").hide();
//     if (cardObjects name === true;) {
//         console.log() {
//     else {


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

});
