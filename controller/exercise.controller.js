const mongoose = require('mongoose');

const ExerciseArticleModel = require('../module/exerciseArticleModel');

async function getArticle(req,res){
    console.log('get article function called');
    try{
        const response = await ExerciseArticleModel.find();
        console.log('successfully fetched article reletd to exersise');
        return res.status(200).json(response);
    }catch(e){
        return res.status(500).json({
            status: e
        });
    } 
}

async function postArticle(req,res){
    const body = req.body;
    console.log(body);
    try{
        const savingData = new ExerciseArticleModel(body);
        const response = await savingData.save();
        console.log('successfully saved post exercise article  data');
        return res.status(200).json(response);
    }catch(e){
        console.log('error saving post exercise article  data');
        return res.status(500).json({
            status: e
        });
    }   
}


async function putArticle(req,res){
    console.log('putArticle method is running');
    const body = req.body;
    const id = req.params.id;
    try{
        const response = await ExerciseArticleModel.findByIdAndUpdate(id,body,{
            new:true,
            runValidators:true
        });

        if(!response){
           return res.status(404).json({
                status:"sorry id not found"
            })
        }

        console.log('successfully saved the data ');
        return   res.status(200).json(response);

    }
    catch(e){
        console.log('something went wrong');
        return   res.status(500).json({
            'error':e
        });

    }
}


async function deleteArticle(req,res){
    console.log('putArticle method is running');
   
    const id = req.params.id;

    try{
        const response = await ExerciseArticleModel.findByIdAndDelete(id);

        if(!response){
           return res.status(404).json({
                status:"sorry id not found"
            })
        }

        console.log('successfully deleted the data ');
        return   res.status(200).json({
            status: "successfully deleted",
            data: response
        });

    }
    catch(e){
        console.log('something went wrong');
        return   res.status(500).json({
            'error':e
        });

    }

   
}

async function postVideos(req,res){
    console.log('get videos function called');
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







module.exports = {
    getArticle,
    putArticle,
    postArticle,
    deleteArticle
}

