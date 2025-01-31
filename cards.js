let mots = ["Europe", "chocolat", "vanille", "pomme", "feuille", "chemise", "guerre", "virus", "neige", "vert", "cadeau", "planète", "poubelle", "Barcelone", "jardin", "grenouille", "bleu", "Seine", "judo", "papillon", "cadeau", "nuage", "coeur", "Paris", "orange", "cirque", "crocodile", "Terre", "coq", "noir", "lion", "mercredi", "vacances", "football", "oiseau", "ogre", "princesse", "soleil", "champignon", "lampe", "film", "Noël", "château", "concert", "sucre", "rose", "masque", "fleur", "Bordeaux", "saison", "yoga", "natation", "roi", "verre", "papier", "Lyon", "tennis", "pain", "docteur", "lunettes", "César", "cochon", "livre", "marron", "zoo"];


function extraireMotsAleatoires(listeMots) {
    let nouvelleListe = [];
    for (let i = 0; i < 5; i++) {
        if (listeMots.length > 0) {
            let indexAleatoire = Math.floor(Math.random() * listeMots.length);
            nouvelleListe.push(listeMots[indexAleatoire]); // Ajouter le mot à la nouvelle liste
            listeMots.splice(indexAleatoire, 1); // Supprimer le mot de la liste initiale
        }
    }
    return nouvelleListe;
}

// Exemple d'utilisation
let listeExtraite = extraireMotsAleatoires(mots);

console.log("Nouvelle liste de 5 mots :", listeExtraite);
