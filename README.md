# 🖌️ TC-LOGO : Projet Javascript : JustOne

## Description:
Ce projet est une implémentation du jeu de société Just One en JavaScript, jouable en ligne de commande.

**Installation : npm install**

**Démarrage : node game.js**

## Règles du Jeu
1) Un joueur actif est désigné pour deviner un mot mystère.
2) Le joueur actif choisit un chiffre qui correspond à un des 5 mots contenu par une carte.
3) Les autres joueurs proposent un indice.permettant au joueur actif de deviner le mot.
4) Les indices en double sont supprimés.
5) Le joueur tente de deviner le mot à partir des indices restants.
6) Un score est calculé selon la justesse des réponses.
7) Le jeu se joue en 5 manches afin que chaque joueur ait une chance de deviner.

## Système de points:
- Bonne réponse: +3 points
- Mauvaise réponse: -2 points
- Passer son tour: 0 point
*A la fin du jeu, l'équipe doit avoir le score le plus haut possible.*

## Structure du Projet:
- **game.js:**
    - Fichier principal qui gère le déroulement du jeu.
    - Gère l'interaction avec les joueurs via la console.
- **players.js:**
    - Contient la logique permettant aux joueurs de donner leurs indices.
    - Filtre les indices en double.
- **cards.js:**
    - Contient la logique de création des cartes et des mots mystères.

## Fonctionnalités:
- Tirage aléatoire des mots
- Filtrage des indices identiques
- Effacement automatique des indices pour garder le mystère
- Système de points
- Rotation automatique des joueurs qui jouent dans un ordre déterminé aléatoirement.

## Auteurs
Collet Marine  
El Moukri Yassmine  
Muccini Bianca  