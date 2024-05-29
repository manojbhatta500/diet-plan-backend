const mongoose = require('mongoose');

const exersieArticleSchema = new mongoose.Schema({
    title:{
        required:true,
        type: String
    },
    link:{
        required:true,
        type: String
    }
});


const exerciseArticleModel = mongoose.model('exerciseArticleModel',exersieArticleSchema);


module.exports = exerciseArticleModel;