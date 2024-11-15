// import du framework ExpressJS
// import express from "express";
 const express = require("express");

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
app.delete("/supprimer", (req, res) => {
    res.end("ça va");
});
