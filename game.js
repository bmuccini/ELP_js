const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Importe la fonction creerCarte et la liste de mots depuis cards.js
const { creerCarte, mots } = require('./cards');

// Fonction principale
function startGame() {
    console.log("Le jeu JustOne est lancé !");

    // Choisi un joueur random
    const players = ["Joueur 1", "Joueur 2", "Joueur 3", "Joueur 4", "Joueur 5"];
    const randomPlayer = players[Math.floor(Math.random() * players.length)];
    console.log(`\nC'est au tour de ${randomPlayer} de deviner !`);

    // 2. Tire une carte qui a 5 mots aléatoires
    const card = creerCarte(mots); // Appel de la fonction pour obtenir une carte
    console.log("\nCarte tirée :", card.join(", "));

    // 3. Input -- Demande au joueur de choisir un chiffre entre 0 et 4
    readline.question("Choisissez un chiffre entre 0 et 4 : ", (index) => {  // Input et index est une fonction de rappel ou callback, qui sera exécutée une fois que l'utilisateur aura saisi sa réponse
        // Valider l'entrée
        if (isNaN(index) || index < 0 || index > 4) {  // Vérifie si l'entrée n'est pas un nombre et si le chiffre est entre 0 et 4
            console.log("Erreur : vous devez choisir un chiffre entre 0 et 4.");
            readline.close();
            return;
        }

        // 4. Affiche le mot correspondant à l'indice choisi
        const selectedWord = card[parseInt(index)];
        console.log(`\nLe mot mystère est : ${selectedWord}`);

        readline.close();
    });
}

// Pour démarrer le jeu
startGame();