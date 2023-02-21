const express =require('express');
const { addProduct,getProduct } = require('../controllers/productControllers');
const productRouter = express.Router();


productRouter.post('/addProduct',addProduct)
productRouter.get('/getProduct',getProduct)

module.exports = productRouter;