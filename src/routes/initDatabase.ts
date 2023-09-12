import sequelize from '../config';

async function syncDatabase() {
  try {
    await sequelize.sync();
    console.log('Base de données synchronisée');
  } catch (error) {
    console.error('Erreur lors de la synchronisation de la base de données :', error);
  }
}

syncDatabase();
