const User = require('./User');
const Stat = require('./stat');

User.hasMany(Stat, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Stat.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Stat };