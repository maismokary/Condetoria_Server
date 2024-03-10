const mongoose = require('mongoose');
const categoryModule = require('../modules/categoryModule');
const productModule = require('../modules/categoryModule');
module.exports = {
    addProduct :(req,res)=>{

        const newProduct =new productModule(
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

        productModule.find({title:title})
        .then(dbRes =>{
            res
            .status(dbRes ? 200 : 400)
            .json(dbRes || {message:"no such product"})
        })
        .catch(e =>{
            res.status(500).json({message:e})
        })
    }, 
    deleteCategory: (req, res) => {
        const title = req.query.title;
        productModule.remove({ title: title })
            .then(() => {
                res.status(200).json({
                    message: "deleted"
                });
            })
            .catch(e => {
                res.statuse(400).json({ message: e })
            })
    },

        addProductToCategory:(req , res) =>{
        const title =req.query.title;
        const product = req.body ; 
        console.log("title",title);
        categoryModule.findOne({title:title}) 
        .then(category=>{

            if(!category) {
                res.status(401).json({message:"no such category"}) ; 
                return ;
            }
            
            category.products.push(product)
            category.save()
            .then(()=> {
                res
                .status(200)
                .json({
                    success:true , 
                    category,
                })
            })
            .catch(e=> {
                res.status(500).json({success: false , error: e})
            })
           
        })     
    },

    updateProudct: async (req,res)=>{
            const id = req.query.id;
            const newImage  = req.body.image
            try {
              const updateProudct = await categoryModule.updateOne(
                {_id: id},
                { image: newImage },
              );
          
              if (!updateProudct) {
                return res.status(404).json({ message: 'proudct not found' });
              }
              res.status(200).json({ message: 'proudct price updated successfully' });
            } catch (error) {
              res.status(500).json({ message: 'Error updating proudct price' });
            }
          }
          

}