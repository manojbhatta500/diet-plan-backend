const mongoose = require('mongoose');


const exerciseVideoSchema = new mongoose.Schema({
    title:{
        required:true,
        type:String
    },
    link:{
        required:true,
        type:String
    }
});


const exerciseVideoModel = mongoose.model('ExerciseVideoModel',exerciseVideoSchema);


module.exports = exerciseVideoModel;