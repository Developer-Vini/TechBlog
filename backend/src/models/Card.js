const { DataTypes, UUIDV4, Model } = require('sequelize');
const sequelize = require("../database/db.js");
const User = require('./User');


const Card = sequelize.define('Card', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content:{
        type: DataTypes.TEXT
    }
});


User.hasMany(Card, { onDelete: 'CASCADE'});
Card.belongsTo(User);

module.exports = Card;