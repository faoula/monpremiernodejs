// Importer le protocole http
// require() permet d'importer le package,
// ici le package importé est http
//Avant de convertir en ES, j'avais écrit :
 const http = require("http");// => code seloin ES5 5 (avant 2015)
// import { createServer } from 'http'; // codage selon ES6 (2015)
// import { app } from "./app.js";
 const app = require("./app.js");

const numPort = 3002;

app.set("port", numPort);
// Déclaration du serveur en utilisant http
// const serveur = http.createServer((req, res) => {});
// On crée le serveur selon la recommandation ES6
const server = http.createServer(app);

// Récupèrez l'heure ici
const currentDate = new Date();

server.listen(numPort, () => {
   // Affichez l'heure 
const currentTime = currentDate.toLocaleTimeString();
console.log("message", currentTime);

   //console.log(`Le serveur est activé au port ${numPort}`);
   console.log("Le serveur est activité au port " , numPort);
});

/*
const server = createServer((req, res) =>{
   //En terme de réponse, renvoie au client le message "Bonjour, ..."
   //Pour renvoyer le message de réponse, res utilise la méthode and()
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
1. Le projet node est initialisé avec la commande "npm init"
2. Un serveur node basique est lancé grâce
à la méthode créateServeur venant du package http "http.crateServeur()"
'req' signifie la requête de l'utilisateur effectuée le navigateur web
'res' signifie la réponse retournée par le serveur
exemple, ici, le serveur retourne
le message "Bonjour, Je suis le serveur."
et ce grâce au code res.and("Bonjour, je suis le serveur.");
*/

// Sur Google , recherche