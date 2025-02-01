const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askClue(){
  return new Promise((resolve, reject) => {
    rl.question(`Quel est ton indice ? `, clue => {
      resolve(clue);
    });
  });
  }

async function players(wordToGuess, player){
    let indices = [];
    const players = ["Joueur 1", "Joueur 2", "Joueur 3", "Joueur 4", "Joueur 5"];
    let players_playing = [];

    for (let i = 0; i < players.length; i++){
        if (players[i] != player) {
            players_playing.push(players[i]);
        }
    }

    for (let j = 0; j < players_playing.length; j++){
        console.log(`C'est au tour du ${players_playing[j]} de donner un indice`);
        let clue = await askClue();
        indices.push(clue);
        };
    
    rl.close();
    return indices;
}

(async () => {
  let clues = await players("marron", "Joueur 1");
  for (let i = 0; i < clues.length; i++){
    for (let j = 0; j < clues.length; j++){
      if (i != j){
        if (clues[i] == clues[j]){
          clues.splice(i,1);
          //clues.splice(j,1);
        }
      }
    }
  }
  console.log(`Les indices de tous les joueurs sont : ${clues}`);
})();


