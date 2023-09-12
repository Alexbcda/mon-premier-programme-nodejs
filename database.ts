// database.ts

import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

const dbPromise = open({
  filename: 'todo.db', // Nom de la base de données SQLite
  driver: sqlite3.Database,
});

// Créer une table "taches" si elle n'existe pas
(async () => {
  const db = await dbPromise;
  await db.exec(`
    CREATE TABLE IF NOT EXISTS taches (
      id INTEGER PRIMARY KEY,
      titre TEXT NOT NULL,
      description TEXT,
      fait BOOLEAN NOT NULL
    )
  `);
})();

// Ajouter une tâche à la base de données
export async function addTask(titre: string, description: string, fait: boolean = false) {
  const db = await dbPromise;
  await db.run('INSERT INTO taches (titre, description, fait) VALUES (?, ?, ?)', [
    titre,
    description,
    fait ? 1 : 0,
  ]);
}

// Récupérer toutes les tâches de la base de données
export async function getAllTasks() {
  const db = await dbPromise;
  const tasks = await db.all('SELECT * FROM taches');
  return tasks;
}

// Exportez d'autres méthodes pour mettre à jour ou supprimer des tâches selon vos besoins
