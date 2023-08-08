const {DataTypes} = require("sequelize")

module.exports = (sequelize) =>{
    sequelize.define(pokemon, {
        id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allownull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    name:{
        type: DataTypes.STRING,
        allownull: false
    }
    },
    {
        createdAt: false,
        updatedAt: false
    }
    )
}