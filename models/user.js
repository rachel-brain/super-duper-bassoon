const {Model, DataTypes, INTEGER} = require('sequelize');
const sequelize = require('../clients/db')
const bcrypt = require('bcrypt');

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
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
        len: [8],
      },
    },
    highscore: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue:0,
    }
  },
  {
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);




// const User = sequelize.define('User', {
//   // Model attributes are defined here
//   username: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true,
//     validate: {
//       isEmail: true,
//     },
//   },
//   password: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     validate: {
//       len: [8],//min limit for password can be changed
//     }, 
//   // Other model options go here
//   hooks: {
//     async beforeCreate(newUserData) {
//       newUserData.password = await bcrypt.hash(newUserData.password, 10);
//       return newUserData;
//     },
//   },
//   sequelize,
//   timestamps: false,
//   freezeTableName: true,
//   underscored: true,
//   modelName: 'user'
// }
// } 
// );
// // `sequelize.define` also returns the model
// console.log(User === sequelize.models.User); // true

module.exports = User;