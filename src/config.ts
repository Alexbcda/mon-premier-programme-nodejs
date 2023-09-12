import { Sequelize } from 'sequelize';
import path from 'path';

const dbPath = path.resolve(__dirname, 'database', 'votre_base_de_donnees.sqlite');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: dbPath,
});

export default sequelize;
