const express = require('express');
const db = require('./db');
const app = express();







app.get('/',(req,res)=>{
    res.send('lauda');
});


app.get('/exercise',(req,res)=>{

});


app.get('/mentalhelth',(req,res)=>{

});

app.get('/health',(req,res)=>{

});

















const port = 3000;


app.listen(port,()=>{
    console.log('server is listening at port ',port);
    
})



// 3 modules
// videos
// mental helth 
// health topics 