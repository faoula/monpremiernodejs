const express = require('exrpess');

const app = express();


app.use((req, res) => {
    res.json({message : "votre message a bien été reçue"});
});

module.exports = app;