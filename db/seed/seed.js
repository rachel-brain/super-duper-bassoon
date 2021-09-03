const sequelize = require('../config/connection');
const playerData = require('./plaeryData.json');
//const scoreData = require('./score'); //leaderboard or score

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedPlayerData();

 
  process.exit(0);
};

seedAll();