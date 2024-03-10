const userModule = require('../moduels/userModule')
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
module.exports = {
       signup: async (req, res) => {
        const {userName , password} = req.body;
        userModule.find({userName}).then((users)  => {
        if (users.length > 1) {
            return res.status(409).json({
                message :"uderName exisit"
            })
        }
        bcrypt.hash(password , 10 ,(error,hash) =>{
            const user = new userModule({
                _id : new mongoose.Types.ObjectId(),
                userName ,
                password :hash
            })
            user.save().then(() =>{
                res.status(200).json({
                    message : "user created "
                })
            }).catch(e => {
                res.status(400).json({ message: e })
            })
        })
        } 
            )
       }
       ,
       login: async (req, res) => {
        const {userName , password} = req.body
       
       // if user exist 
       userModule.find({userName}).then((users) => {
        if(users.length ===0){
            return res.status(401).json({
                message : "user Name not found "
            })
        }


        // compare the password 
        const[user] = users
        bcrypt.compare(password ,user.password ,(error , result ) => {
        if (error){
            return res.status(402).json({
                message : "Auth error ",
                users
            })
        }
        if(result){
            const token = jwt.sign
            (
            {
                id : userModule._id,
                userName: userModule.userName
            }
            
            , "app-key" 
           
            , {
                expiresIn :'1H'
            } 
            
            )


            return  res.status(200).json({
                message : "Auth sucess ",
                token 
            })
        }
        res.status(403).json({
            message : "Auth error "
        })
        
    
        })

        }
            )
        
       }
    
}