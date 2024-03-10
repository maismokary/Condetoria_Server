const mongoose = require('mongoose');
const category = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: { type: String, required: false },
    image: { type: String },
    products: {
        type: [
            {
                image: String,
                title: String,
                price: Number
            }
        ],
        default: []
    },
})
module.exports = mongoose.model('category', category);