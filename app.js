// import du framework ExpressJS
import express from "express";
// const express = require("express");

// On crée l'application EXpressJS
const app = express();

// notre serveur Node est maintenant capable de gérer les requêtes
// et de retourner une réponse
// app.use((req, res) => {
//     res.end("Bonjour, je le nouveau serveur!");
// });

// On exporte notre variable app 
// pour la rendre visible  par les autres fichiers du projet
// module.exports = app;
// export {
//     app 
// }

// On définit une route de type GET
app.get("/", (req, res) => {
    res.end("Akori, za serveur");
});

// Crée la route "/bonjour" de type
app.get("/bonjour", (req, res) => {
    res.send("akori anao?");
});

// Crée une route "/cuisine" de type GET
app.get("/cuisine", (req, res) => {
    res.end("Vous êtes dans la cuisine.");
});

// Crée une route "/bangalo" de type GET pour voir
// une liste de
app.get("/bangalo", (req, res) => {
     res.end("vous êtes dans le banagalo");
});

app.listen(3001, () => {
    console.log("Serveur écoute le port 3001");
});