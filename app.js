const express = require('express');
const db = require('./db');
const app = express();
var bodyParser = require('body-parser')


const exerciseRouter = require('./routes/exercise.route');
const mentalRouter = require('./routes/mental.route');
const healthRouter = require('./routes/health.route');

app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send('this is home route, server apis are working');
});


app.use('/exercise',exerciseRouter);

app.use('/mental',mentalRouter);

app.use('/health',healthRouter);


const port = 3000;


app.listen(port,()=>{
    console.log('server is listening at port ',port);
    
})



