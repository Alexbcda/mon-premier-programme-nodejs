
// Importez express et les types associés
import express, { Application } from "express"; 


// Utilisez les types pour l'instance Express
const app: Application = express(); 


// Ajoutez un type pour le port
const port: number = 5000; 

// Middleware pour traiter les requêtes JSON et les données de formulaire
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Middleware pour gérer les routes de /post
app.use("/post", require("./routes/post.routes"));

// On appelle l'instance app qui écoute sur le port spécifié et on logge un message
app.listen(port, () => console.log(`Le serveur a démarré au port ${port}`)); // Utilisez les templates de chaînes pour une meilleure lisibilité

