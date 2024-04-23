const sequelize=require('../model/model');
exports.expanseGet=(req,res,next)=>{
    sequelize.findAll()
    .then(results=>{
        res.status(200).json(results);
    })
    .catch(err=>console.log(err))
   
}

exports.expansePost=(req,res,next)=>{
    sequelize.create({
        amount:req.body.amount,
        desc:req.body.desc,
        catg:req.body.catg
    })
    .then(results=>res.status(200).json(results))
    .catch(err=>console.log(err))
    
}

exports.expanseDelete=(req,res,next)=>{
   sequelize.destroy({
    where:{
        id:req.params.id
    }
   })
   .then(result=>res.json(result))
   .catch(err=>console.log(err))
}