const mongoose = require('mongoose');

const mentalArticleSchema = new mongoose.Schema({
    title:{
        required:true,
        type:String
    },
    link:{
        required:true,
        type:String
    }
});

const mentalArticleModel = mongoose.model('MentalArticleModel',mentalArticleSchema);


module.exports = mentalArticleModel;