const express = require('express');
const db = require('./db');
const app = express();
var bodyParser = require('body-parser')


const exerciseRouter = require('./routes/exercise.route');

app.use(bodyParser.json());






app.get('/',(req,res)=>{
    res.send('this is home route, server apis are working');
});


app.use('/exercise',exerciseRouter);
















// app.get('/mentalhelth',(req,res)=>{

// });

// app.get('/health',(req,res)=>{

// });

















const port = 3000;


app.listen(port,()=>{
    console.log('server is listening at port ',port);
    
})



// 3 modules
// exercise
// mental helth 
// health topics 


// every module must have 2 type
// one article  and one video 


/*

article {
    title:
    link:
},

video{
    title:
    link:
}




*/