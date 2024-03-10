const jwt = require('jsonwebtoken')

const checkAuth = (req ,res ,next) =>{

    try {

        const token = req.headers.Authorization.split(' ')[1]
        jwt.verify(token ,'app-key')
        next()
        
    } catch (error) {
        res.status(401).json({
    message: 'auth faield '
        })
    }
}


module.exports = checkAuth;