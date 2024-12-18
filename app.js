"use strict";
const score0 = document.getElementById("score-0");
const score1 = document.getElementById("score-1");
const dice = document.querySelector(".dice-img");
const btnroll = document.querySelector(".roll");
const btnhold = document.querySelector(".hold");
const current0 = document.getElementById("current-score-0");
const current1 = document.getElementById("current-score-1");
const player0 = document.querySelector(".player-0");
const player1 = document.querySelector(".player-1");
const newGame = document.querySelector(".new-game");

///// function for switching the player :: :

const switchplayer = function () {
  score = 0;
  document.getElementById(`current-score-${activeplayer}`).textContent = 0;
  activeplayer = activeplayer === 0 ? 1 : 0;
  player0.classList.toggle("active");
  player1.classList.toggle("active");
};

//// starting conditions :

let score, activeplayer, scores, isPlaying;

function reset() {
  score0.textContent = 0;
  score1.textContent = 0;
  dice.classList.add("hidden");
  score = 0;
  activeplayer = 0;
  scores = [0, 0];
  isPlaying = true;
  player0.classList.add("active");
  player1.classList.remove("active");
  player0.classList.remove("winner");
  player1.classList.remove("winner");
  current0.textContent = 0;
  current1.textContent = 0;
}

reset();

//// rolling dice  functionality ::

/// random number (between 1 and 6 )

/// display the dice image with random number ::
/// get the sum of dices in the current score

btnroll.addEventListener("click", function () {
  if (isPlaying) {
    const diceNumber = Math.trunc(Math.random() * 6) + 1; /// number between 1 and 6 ...
    console.log(diceNumber);
    dice.src = `dice-${diceNumber}.png`;  ///// tasswira
    dice.classList.remove("hidden");

    if (diceNumber !== 1) {
      score += diceNumber; ////  0 = 0 + 6 ; 6
      document.getElementById(`current-score-${activeplayer}`).textContent =
        score;
    } else {
      ///// jeb  1   ...........
      switchplayer();
    }
  }
});

///// implement hold condition ::

btnhold.addEventListener("click", function () {
  if (isPlaying) {
    scores[activeplayer] += score; /// activeplayer 0 or 1 ...  0 
    document.getElementById(`score-${activeplayer}`).textContent =
      scores[activeplayer];

    if (scores[activeplayer] >= 100) {
      isPlaying = false;

      document.querySelector(`.player-${activeplayer}`).classList.add("winner");
      document.querySelector(`.player-${activeplayer}`).classList.remove("active");
    } else {
      switchplayer();
    }
  }
});

///// reset the game :

newGame.addEventListener("click", reset);
