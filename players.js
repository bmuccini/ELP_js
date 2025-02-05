const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//fonction pour demander l'input d'un joueur
function askClue(){
  return new Promise((resolve, reject) => {
    rl.question(`Quel est ton indice ? `, clue => {
      resolve(clue);
    });
  });
  }

//fonction asynchrone pour demander aux joueurs à tour de role leur indice
async function players(player){
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
        process.stdout.write('\x1Bc'); // Pour que les joueurs ne puissent pas voir les indices donnés par les autres joueurs.
        };
    
    //rl.close();
    return indices;
}

//fonction asynchrone qui affiche les indices finaux après avoir filtré les indices qui se ressemblent
function verifIndices (clues) {
  let final_clues = [];
  let indexes = [];
  for (let i = 0; i < clues.length; i++){
    for (let j = 0; j < clues.length; j++){
      if (i != j){
        if (clues[i] == clues[j]){
          indexes.push(i);
        }
      }
    }
  }
  for (let p = 0; p < clues.length; p++){
    if (!indexes.includes(p)){
      final_clues.push(clues[p]);
    }
  }

  //console.log(`Les indices de tous les joueurs sont : ${final_clues}`);
  return final_clues;
}

module.exports = { players, verifIndices };

