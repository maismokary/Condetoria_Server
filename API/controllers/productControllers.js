const mongoose = require('mongoose')
const projectModule = require('../modules/projectModule')
module.exports = {
    addProduct :(req,res)=>{

        const newProduct =new projectModule(
            {
                _id :  new mongoose.Types.ObjectId(),
                ...req.body 
            },  
        )
        newProduct.save().then(()=> {
            res.status(200).json({
                message:"done", 
            });
        })
        .catch(e=>{
            res.status(400).json({message:e})
        }) 
    },
    deleteProject:(req,res)=>{
        const newProduct =new projectModule(
            {
                _id :  new mongoose.Types.ObjectId(),
                ...req.body 
            },  
        )
        newProduct.save().then(()=> {
            res.status(200).json({
                message:"done",
            });
        })
        .catch(e=>{
            res.status(400).json({message:e})
        })
        
    },
    getProduct: async (req,res)=>{
        const title =req.query.title;
        console.log("title",title);

        projectModule.find({title:title})
        .then(dbRes =>{
            res
            .status(dbRes ? 200 : 400)
            .json(dbRes || {message:"no such product"})
        })
        .catch(e =>{
            res.status(500).json({message:e})
        })
       
    }
    
}
