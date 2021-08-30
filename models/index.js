// THIS CODE WILL NEED CHECKING & MODIFYING!

const Player = require('./Player');
const Opponents = require('./Opponents');
const Anotherthing = require('./Anotherthing');

Player.hasMany(Opponents, {
  foreignKey: 'player_id',
});

Anotherthing.belongsTo(Something, {
  foreignKey: 'something_id',
});

module.exports = {
  Player,
  Opponent,
  Anotherthing
};