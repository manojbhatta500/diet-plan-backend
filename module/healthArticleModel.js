const mongoose = require('mongoose');

const healthArticleSchema = new mongoose.Schema({
    title:{
        required:true,
        type:String
    },
    link:{
        required:true,
        type:String
    }
});

const healthArticleModel = mongoose.model('HealthArticleModel',healthArticleSchema);

module.exports = healthArticleModel;