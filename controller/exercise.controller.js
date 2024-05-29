const mongoose = require('mongoose');

const ExerciseArticleModel = require('../module/exerciseArticleModel');

async function getArticle(req,res){
    console.log('get article function called');
    return res.status(200).json({
        status: "get article route is functioning well"
    });
}

async function getVideos(req,res){
    console.log('get videos function called');
    return res.status(200).json({
        status: "get article route is functioning well"
    }); 
}





async function postArticle(req,res){
    
    const body = req.body;
    console.log(body);



    return res.status(200).json({
        status: "successfully posted",
        data: body
    });
}

async function postVideos(req,res){
    console.log('get videos function called');
    return res.status(200).json({
        status: "get article route is functioning well"
    }); 
}






module.exports = {
    getArticle,
    getVideos,
    postArticle
}

