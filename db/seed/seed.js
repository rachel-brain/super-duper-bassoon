const sequelize = require('.../clients/db');
const playerData = require('./playerData.json');
//const scoreData = require('./score'); //leaderboard or score

const seedAll = async () => {
  await sequelize.sync({
    force: true
  });

  await seedPlayerData();


  process.exit(0);
};

seedAll();