require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./routes');
const port = process.env.PORT || 3000;

// Middleware pour le parsing des requêtes JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Utilisation des routes définies dans routes.js
app.use(router);

// Middleware de gestion des erreurs
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
