const {DataTypes}=require('sequelize');
const sequelize=require('../database/database');

const expanseapp=sequelize.define('expanse',{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
        unique:true
    },
    amount:{
        type:DataTypes.INTEGER
    },
    desc:{
        type:DataTypes.STRING
    },
    catg:{
        type:DataTypes.STRING
    }
})

module.exports=expanseapp;