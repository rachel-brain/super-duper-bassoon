// dependencies
const Phaser = require("phaser");

// game.config (wdth, height, type(auto) = browser select)
const config = {
    width: 800, 
    height: 500, 
    type: Phaser.AUTO
};

const game = new Phaser.Game(config);