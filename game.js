const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Importe la fonction creerCarte et la liste de mots depuis cards.js
const { creerCarte, mots } = require('./cards');
const { players, verifIndices } = require('./players');

function questionAsync(question) {
    return new Promise((resolve) => {
        readline.question(question, resolve);
    });
};

// On initialise le nombre de points marqués.
let nb_points = 0;

// Permet d'effacer le terminal pour cacher ce qui a précedemment été affiché.
function clearConsole() {
    process.stdout.write('\x1Bc');
}

// Mélange aléatoirement la liste des joueurs afin que ce ne soit pas toujours le joueur 1 qui propose son indice en premier, puis le joueur 2, ...
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};


async function startGame(currentPlayer) {
    try{

        console.log("\n------------------------------------------");
        console.log(`C'est au tour de ${currentPlayer} de deviner !`);

        // On attend 5 secondes après avoir indiqué quel joueur doit deviner afin qu'il ne voit pas la liste d'indices.
        await new Promise(resolve => setTimeout(resolve, 5000));
        clearConsole();

        // Tire une carte qui a 5 mots aléatoires
        const card = creerCarte(mots); // Appel de la fonction pour obtenir une carte/
        console.log("\nCartes tirées :", card.join(", "));

        // Demande au joueur actif de choisir un chiffre entre 0 et 4 qui correpondant à un des mots de la carte.
        const index = await questionAsync("Choisissez un chiffre entre 0 et 4 : ");// Input et index est une fonction de rappel ou callback, qui sera exécutée une fois que l'utilisateur aura saisi sa réponse
        
        if (isNaN(index) || index < 0 || index > 4) {  // Vérifie si l'entrée est un nombre et si le chiffre est entre 0 et 4.
            console.log("Erreur : vous devez choisir un chiffre entre 0 et 4.");
            return;
        }

        // 4. Affiche le mot correspondant à l'indice choisi
        const motMystere = card[parseInt(index)];
        console.log(`\nLe mot mystère est : ${motMystere}`);


        // 1. Récupérer les indices donnés par les autres joueurs
        let indices = await players(currentPlayer,readline, questionAsync);

        // 2. Filtrer les indices en double
        let indicesFiltres = verifIndices(indices);
        
        // Clear console before showing filtered indices
        clearConsole();

        // 3. Afficher les indices finaux après filtrage
        console.log("\n------------------------------------------");
        console.log(`Tour de ${currentPlayer}`);
        console.log("\nIndices finaux après filtrage :", indicesFiltres);
        

        // Demande au joueur le mot qu'il a deviné à partir des indices.

        const reponse = await questionAsync(`\nQuel mot avez vous deviné ${currentPlayer} ? (Pour passer votre tour, entrez "PASS") :\n`);

        // Traitement de la réponse
        if (reponse.toUpperCase() === "PASS") {
            console.log(`\nVous avez choisi de passer votre tour. \nVotre score actuel est de ${nb_points} points.`);
        } else if (reponse.toLowerCase() === motMystere.toLowerCase()) {
            nb_points += 3;
            console.log(`\nFélicitations! Vous avez trouvé le mot mystère! \nVotre score actuel est de ${nb_points} points.`);
        } else {
            nb_points -= 2;
            console.log(`\nMauvaise réponse! Le mot était : ${motMystere} \nVotre score actuel est de ${nb_points} points.`);
        }

        // Clear console after 3 seconds
        await new Promise(resolve => setTimeout(resolve, 3000));
        clearConsole();

    } catch (error) {
        console.error("Une erreur est survenue :", error);  
    } 
};


async function main() {
    const joueurs = ["Joueur 1", "Joueur 2", "Joueur 3", "Joueur 4", "Joueur 5"];
    const joueursMelanges = shuffleArray([...joueurs]);

    console.log("Ordre des joueurs pour cette partie :", joueursMelanges.join(", "));
    
    for (const joueur of joueursMelanges) {
        await startGame(joueur);
    }
    
    console.log("\n=== Partie terminée ===");
    console.log(`Score final : ${nb_points} points`);
    readline.close();
}


main().catch(err => console.error(err));
