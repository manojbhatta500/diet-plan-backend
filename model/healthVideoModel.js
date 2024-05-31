const mongoose = require('mongoose');

const healthVideoSchema = new mongoose.Schema({
    title:{
        required:true,
        type:String
    },
    link:{
        required:true,
        type:String
    }
});

const healthVideoModel = mongoose.model('HealthVideoModel',healthVideoSchema);

module.exports = healthVideoModel;