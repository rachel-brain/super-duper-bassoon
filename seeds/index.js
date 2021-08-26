// THIS CODE WILL NEED CHECKING & MODIFYING!

const sequelize = require('../config/connection');
const seedSomething = require('./somethingData');
const seedAnotherthing = require('./anotherthingData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedSomething();

  await seedAnotherthing();

  process.exit(0);
};

seedAll();