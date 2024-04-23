const Sequelize=require('sequelize');

const sequelize= new Sequelize('node-connect','root','Harshit7174@',{
    dialect:'mysql',
    host:'localhost'
})

module.exports=sequelize;