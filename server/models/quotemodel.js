const mongoose=require('mongoose');

const quoteSchema=mongoose.Schema({
    quote:{
        type: String,
        required: true
    }
}, {timestamps: true})

const Quote=mongoose.model('quote', quoteSchema);

module.exports=Quote;