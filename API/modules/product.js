const mongoose = require('mongoose');
const project =mongoose.Schema({
    title: { type: String, required: false },
    image: { type: String , required : false},
    category: {type: String , required : false},
    price :{type: Number , required : false}
});
