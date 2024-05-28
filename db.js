const mongoose = require('mongoose');


const localMongoDbUrl = 'mongodb://127.0.0.1:27017/dietplan';

mongoose.connect(localMongoDbUrl,{});


const db = mongoose.connection;


db.on('connected',()=>{
    console.log('connected to dietplan database');
});

db.on('error',(error)=>{
    console.log('error connecting to dietplan database');
});

db.on('disconnected',()=>{
    console.log('disconnected from dietplan data  database');

})

module.exports = db;