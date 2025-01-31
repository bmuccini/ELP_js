const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function players(wordToGuess, player){
    let indices = [];
    console.log("Au tour du reste des joueurs de donner des indices pour aider l'autre joueur à trouver le mot.");

    const players = ["Joueur 1", "Joueur 2", "Joueur 3", "Joueur 4", "Joueur 5"];
    let players_playing = []

    for (let i = 0; i < players.length; i++){
        if (players[i] != player) {
            players_playing.push(players[i]);
        }
    }

    for (let j = 0; j < players_playing.length; j++){
        console.log(`C'est au tour du ${players_playing[j]} de donner un indice`);
        rl.question(`Quel est ton indice ?\r`, clue => {
            indices.push(clue);
            console.log(`L'indice est ${clue}!\r`);    
            rl.close();
          });
    }
    return indices;
}

let clues = players("marron", "Joueur 1");
console.log(`Les indices de tous les joueurs sont : ${clues}`)


/*const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));

// Usage inside aync function do not need closure demo only
(async() => {
  try {
    const indice = await prompt("Quel est votre indice ? ");
    // Can prompt multiple times
    console.log(indice);
    rl.close();
  } catch (e) {
    console.error("Unable to prompt", e);
  }
})();

// When done reading prompt, exit program 
rl.on('close', () => process.exit(0));*/