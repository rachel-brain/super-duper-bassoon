const { User } = require('../../models')

const playerData = [
    {
        name: "merlin",
        email: "john.smith@hotmail.com",
        password: "abracadabra"
    },
    {
        name: "Gandolf",
        email: "joe.blogs@gmail.com",
        password: "hocuspocus"
    },
    {
        name: "dumbledore",
        email: "jane.doe@gmail.com",
        password: "heypresto"
    },
    {
        name: "Yoda",
        email: "jordana99@hotmail.com",
        password: "magicitismagic"
    },
    {
        name: "Harry",
        email: "harry.potter@yahoo.com",
        password: "opensesame"
    },
    {
        name: "thegoodwitch",
        email: "maria2001@yahoo.com",
        password: "shazam"
    }
]

const seedPlayerData = () => User.bulkCreate(playerData);
module.exports = seedPlayerData;