const sequelize = require('../../clients/db');
const { User } = require('../../models')
const userData = require('./playerData.json'); 

const seedAll = async () => {
  await sequelize.sync({ force: true });
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning:true,
  });
  
  process.exit(0);
};

seedAll();