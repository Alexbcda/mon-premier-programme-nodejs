import express, { Request, Response } from 'express';
import { Sequelize, DataTypes, Model } from 'sequelize';

const app = express();
const port = 5000;

// Configuration Sequelize pour la base de données SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite',
});

// Modèle Sequelize pour les tâches (Todo)
class Task extends Model {
  public id!: number;
  public titre!: string;
  public description!: string;
  public fait!: boolean;
}

Task.init(
  {
    titre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    fait: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    sequelize,
    modelName: 'Task',
  }
);

// Créez la table dans la base de données si elle n'existe pas encore
sequelize.sync();

// Middleware pour permettre l'analyse des données JSON
app.use(express.json());

// Route GET pour récupérer toutes les tâches
app.get('/tasks', async (req: Request, res: Response) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (error) {
    console.error('Erreur lors de la récupération des tâches :', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// Route POST pour créer une nouvelle tâche
app.post('/tasks', async (req: Request, res: Response) => {
  try {
    const { titre, description } = req.body;
    const task = await Task.create({ titre, description });
    res.status(201).json(task);
  } catch (error) {
    console.error('Erreur lors de la création de la tâche :', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// Écoutez les requêtes HTTP sur le port spécifié
app.listen(port, () => {
  console.log(`Serveur API en écoute sur le port ${port}`);
});
