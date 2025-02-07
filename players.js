
//fonction asynchrone pour demander aux joueurs à tour de role leur indice
async function players(player,readline, questionAsync){
    let indices = [];
    const allPlayers = ["Joueur 1", "Joueur 2", "Joueur 3", "Joueur 4", "Joueur 5"];
    //let players_playing = [];

    //Exclure le joueur qui doit deviner
    const players_playing = allPlayers.filter(p => p !== player);

    for (let player_playing of players_playing) {
        console.log(`C'est au tour de ${player_playing} de donner un indice`);
        let clue = await questionAsync("Quel est ton indice ?");
        indices.push(clue);
        process.stdout.write('\x1Bc'); // Effacer la console après chaque indice
    }

/*
    for (let player_playing in players){
      if (player_playing != player){
        console.log(`C'est au tour du ${player_playing} de donner un indice`);
        let clue = await questionAsync("Quel est ton indice ?");
        indices.push(clue);
        process.stdout.write('\x1Bc'); // Pour que les joueurs ne puissent pas voir les indices donnés par les autres joueurs.
      }
    }*/


    /*for (let i = 0; i < players.length; i++){
        if (players[i] != player) {
            players_playing.push(players[i]);
        }
    }

    for (let j = 0; j < players_playing.length; j++){
        console.log(`C'est au tour du ${players_playing[j]} de donner un indice`);
        let clue = await askClue();
        indices.push(clue);
        process.stdout.write('\x1Bc'); // Pour que les joueurs ne puissent pas voir les indices donnés par les autres joueurs.
        };*/

    return indices;
}

//fonction asynchrone qui affiche les indices finaux après avoir filtré les indices qui se ressemblent
function verifIndices (clues) {
  let final_clues = [];
  let indexes = [];
  // Les boucles for imbriquées suivantes permettent de comparer chaque élément de clues avec tous les autres éléments de clues afin de repérer les doublons.
  for (let i = 0; i < clues.length; i++){
    for (let j = 0; j < clues.length; j++){
      if (i != j){ // Pour ne pas comparer un indice avec lui-même.
        if (clues[i] == clues[j]){
          indexes.push(i); // On récupère les indexes des indices qui ont été proposés plusieurs fois.
        }
      }
    }
  }
  for (let p = 0; p < clues.length; p++){
    if (!indexes.includes(p)){ // Si la liste indexes ne contient pas p.
      final_clues.push(clues[p]); // On ajoute dans la liste d'incice finale les indices dont les indexes ne sont pas dans la liste indexes.
    }
  }

  return final_clues;
}


module.exports = { players, verifIndices };

