// import du framework ExpressJS
// import express from "express";
 const express = require("express");
 const url = require("url");
// On crée l'application EXpressJS
 const app = express();
//   app.use((req, res) => {
//      res.json({message : "Bonjour"});
//  });

// notre serveur Node est maintenant capable de gérer les requêtes
// et de retourner une réponse
//  app.use((req, res) => {
//   res.end("Bonjour, je suis le nouveau serveur!");
//  });


// On exporte notre variable app 
// pour la rendre visible  par les autres fichiers du projet
 module.exports = app;
// export {
//     app 
// }

//  On définit une route de type GET
//  app.get("/", (req, res) => {
//  res.end("Akori, za serveur");
//   });

// // Crée la route "/bonjour" de type
// app.get("/bonjour", (req, res) => {
//     res.send("akori anao?");
//  });

// // Crée une route "/cuisine" de type GET
//   app.get("/cuisine", (req, res) => {
//     res.end("Vous êtes dans la cuisine.");
//  });

// // Crée une route "/bangalo" de type GET pour voir
// // une liste de
//  app.get("/bangalo", (req, res) => {
//       res.end("vous êtes dans le banagalo");
//   });

//  app.listen(3001, () => {
//    console.log("Serveur écoute le port 3001");
//  });

// route pour /accueil
// app.get("/accueil", (req, res) => {
//     res.end("Vous etes à l'accueil");
// });
// // route /apropos
// app.get("/apropos", (req, res) => {
//     res.end("Notre page de présentation.");
// });
// // route pour /services
// app.get("/services", (req, res) => {
//     res.end("Alors cette page de services!");
// });

// créer une route avec la méthode POST
app.post("/message", (req, res) => {
    res.end("salut");
});
//créer une route avec la méthode PUT
app.put("/contact", (req, res) => {
    res.end("SAINDOU");
});
// créer une route avec la méthode DELETE

/*
=== API ===
*/
// format URL : localhost:3002/api/nom
app.get("/api/nom", (req, res, next) => {
    const monObjet = [{
        nom: "SAINDOU",
        prenom: "Faoula"
    }];

    // Retourne l'objet "monObjet" sous format JSON et retourne le code
    res.status(200).json(monObjet);
    next();
});

// format URL : localhost:3002/api/url
app.get("/api/url", (req, res) => {
    // Je retourne une réponse de HTML  et de status 200
   res.writeHead(200, {'content-Type': 'text/html'});

   res.write(req.url); // Récupère l'URL passé dans la requête

   res.end(); // Fin de réponse
});

// format URL : localhost:3002/?annee=2024
/* Exemple https://www.google.com/search?q=Mayotte
 Analyse de l'URL :
 l'url de base : https://www.google.com
 l'url complet avec l'API '/search ' : https://www.google.com/search
 l'url complet avec des parmètres.
 les paramètres sont précédés par le point d'interogation '?'
  Le mot-clé 'q' contient la valeur 'Mayotte' ?q=mayotte

*/

app.get("/", (req, res) => {
    res.writeHead(200, {'content-Type': 'text/html'});
    let query = url.parse(req.url, true).query;
    let resultatAffiche = query.annee;
    console.log("intérogation");
    res.end(resultatAffiche);
});

/*
=== Middleware ===
Les middleware est un ensemble de finctions que l'on peut combiner
dans un seul serveur.
*/
// Middleware 1
// app.use((req, res, next) => {
//     console.log("Votre message a bien été reçu.");
//     next();
//     //next();
// });

// // Middleware 2
// app.use((req, res, next) => {
//     res.status(201);
//     next();
// });

// // Middleware 3
// app.use((req, res, next) => {
//     const date =new Date();
//     res.json({
//         heure : date.toLocaleTimeString(),
//         typeRequest : req.method,
//         requestBody: req.headers
//     });
//     next();
// });

// // Middleware 4
// app.use((req, res) => {
//     console.log("fin de Middleware!");
// });
/*app.use((req, res, ext) => { ...

// on définit une route de type GET
// gère les reqêtes GET vers la page d'accueil
/*app.get("/", (req, res) => {
   res.end("Akori, za serveur");
})*/
