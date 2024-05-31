const mongoose = require('mongoose');


const mentalVideoSchema = new mongoose.Schema({
    title:{
        required:true,
        type:String
    },
    link:{
        required:true,
        type:String
    }
});

const mentalVideoModel = mongoose.model('MentalVideoModel',mentalVideoSchema);


module.exports = mentalVideoModel;