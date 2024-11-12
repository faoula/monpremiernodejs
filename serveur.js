// Importer le protocole http
// require() permet d'importer le package,
// ici le package importé est http
const http = require('http');

// Déclaration du serveur en utilisant http
const server = http.createServer((req, res) =>{
   res.end("Bonjour, je suis le serveur.");
});

// Le serveur est disponible sur le port 3000
server.listen(3000);

// On va lancer le serveur!
// Sur GitBash, exécuter la commande node server
// Sur le navigateur web, tapez localhost:3000
// Que signifie localhost:3000
// localhost signifie le serveur en local
// C'est -à-dire dans chaque ordinateur, nodeurJS crée un serveur local
// Et ce serveur local est exposé au port 3000
// Que retenir du bug rencontré par SAID?
// Pour lancer le serveur, il faut taper "node" suivi du nom du  fichier
// Tel qu'il figure dans le fichier package.json
// A l'exécution de la commande npde,
// nodejs lance le fichier Javascript associé à "main" dans package.json

/*
===== En résumé =====
1. Le projet node est initialisé avec la commande "node init"
2. Un serveur node basique est lancé grâce
à la méthode créateServeur venant du package http "http.crateServeur()"
'req' signifie la requête de l'utilisateur effectuée le navigateur web
'res' signifie la réponse retournée par le serveur
exemple, ici, le serveur retourne
le message "Bonjour, Je suis le serveur."
et ce grâce au code res.and("Bonjour, je suis le serveur.");
*/
