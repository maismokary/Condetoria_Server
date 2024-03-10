const express =require('express');
const { addProduct,getProduct,deleteProduct, addProductToCategory, removeProductFromCategory, updateProudct } = require('../controllers/productControllers');
const checkAuth = require('../controllers/middleware/checkAuth');
const productRouter = express.Router();
productRouter.post('/addProduct',addProduct,)
productRouter.post('/addProductToCategory',addProductToCategory)
productRouter.get('/getProduct',getProduct,checkAuth),
productRouter.delete('/tdeleteProduct',deleteProduct,),
productRouter.post('/updateProudct', updateProudct,checkAuth),


module.exports = productRouter;