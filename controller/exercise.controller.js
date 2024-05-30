const mongoose = require('mongoose');

const ExerciseArticleModel = require('../module/exerciseArticleModel');
const ExerciseVideoModel = require('../module/exerciseVideoModel');

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
    const body = req.body;
    console.log(body);
    try{
        const savingData = new ExerciseVideoModel(body);
        const response = await savingData.save();
        console.log('successfully saved post video article  data');
        return res.status(200).json(response);
    }catch(e){
        console.log('error saving post video article  data');
        return res.status(500).json({
            status: e
        });
    }   
}

async function getVideos(req,res){
    console.log('get exercise video function called');
    try{
        const response = await ExerciseVideoModel.find();
        console.log('successfully fetched video reletd to exersise');
        return res.status(200).json(response);
    }catch(e){
        return res.status(500).json({
            status: e
        });
    } 
}



async function patchVideos(req,res){
    console.log('put Video method is running');
    const body = req.body;
    const id = req.params.id;
    console.log('step 1')
    try{
        const response = await ExerciseVideoModel.findByIdAndUpdate(id,body,{
            new:true,
            runValidators:true
        });
        console.log('step 2')


        if(!response){
           return res.status(404).json({
                status:"sorry id not found"
            })
        }

        console.log('step 3')

        console.log('successfully saved the data ');
        return   res.status(200).json(response);

    }
    catch(e){
        console.log('step 5')

        console.log('something went wrong');
        return   res.status(500).json({
            'error':e
        });

    }
}

async function deleteVideos(req,res){
    console.log('delete video method is running');
   
    const id = req.params.id;

    try{
        const response = await ExerciseVideoModel.findByIdAndDelete(id);

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









module.exports = {
    getArticle,
    putArticle,
    postArticle,
    deleteArticle,
    postVideos,
    deleteVideos,
    getVideos,
    patchVideos
}

