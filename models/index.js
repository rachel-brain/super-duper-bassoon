// THIS CODE WILL NEED CHECKING & MODIFYING!

const Player = require('./Player');
const Something = require('./Something');
const Anotherthing = require('./Anotherthing');

Something.hasMany(Anotherthing, {
  foreignKey: 'something_id',
});

Anotherthing.belongsTo(Something, {
  foreignKey: 'something_id',
});

module.exports = { Player, Something, Anotherthing };