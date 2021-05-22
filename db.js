require('dotenv').config();

const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  process.env.DB,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'postgres',
    port: '5433',
  }
);

sequelize
  .authenticate()
  .then(() => console.log('Connected to DB'))
  .catch((err) => console.log(`Error: ${err}`));

module.exports = sequelize;
