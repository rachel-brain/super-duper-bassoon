// THIS CODE WILL NEED CHECKING & MODIFYING!

const {
    Model,
    DataTypes
} = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Player extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

Player.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    playername: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [6],
        },
    },
}, {
    hooks: {
        async beforeCreate(newPlayerData) {
            newPlayerData.password = await bcrypt.hash(newPlayerData.password, 10);
            return newPlayerData;
        },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'player',
});

module.exports = Player;