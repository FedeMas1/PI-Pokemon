const {DataTypes} = require("sequelize")

module.exports = (sequelize) =>{
    sequelize.define(pokemon, {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allownull: false,
            autoIncrement: true,
            primaryKey: true,

        },
        name:{
            type: DataTypes.STRING,
            allownull: false,
        },
        hp:{
            type: DataTypes.STRING,
            allownull: false,
        },
        attack:{
            type: DataTypes.STRING,
            allownull: false,
        },
        defense:{
            type: DataTypes.STRING,
            allownull: false,
        },
        speed:{
            type: DataTypes.STRING,
            allownull: false,
        },
        height:{
            type: DataTypes.STRING,
            allownull: false,
        },
        weight:{
            type: DataTypes.STRING,
            allownull: false,
        },
        image:{
            type: DataTypes.STRING,
            allownull: false,
        },
        createinDB:{
            type:DataTypes.BOOLEAN,
            defaultValue: true
        }
    },)
}
