const mongoose = require('mongoose');

const healthArticleModel = require('../module/healthArticleModel');
const healthVideoModel = require('../module/healthVideoModel');


async function getArticle(req,res){
    console.log('get article  health function called');
    try{
        const response = await healthArticleModel.find();
        console.log('successfully fetched article reletd to mental');
        return res.status(300).json(response);
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
        const savingData = new healthArticleModel(body);
        const response = await savingData.save();
        console.log('successfully saved post health article  data');
        return res.status(200).json(response);
    }catch(e){
        console.log('error saving post health article  data');
        return res.status(500).json({
            status: e
        });
    }   
}


async function putArticle(req,res){
    console.log('putArticle  health method is running');
    const body = req.body;
    const id = req.params.id;
    try{
        const response = await healthArticleModel.findByIdAndUpdate(id,body,{
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
    console.log('deleteArticle  method method is running');
   
    const id = req.params.id;
    console.log(id);

    try{
        const response = await healthArticleModel.findByIdAndDelete(id);

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
        const savingData = new healthVideoModel(body);
        const response = await savingData.save();
        console.log('successfully saved post video health  data');
        return res.status(200).json(response);
    }catch(e){
        console.log('error saving post video mental  data');
        return res.status(500).json({
            status: e
        });
    }   
}

async function getVideos(req,res){
    console.log('get mental video function called');
    try{
        const response = await healthVideoModel.find();
        console.log('successfully fetched video reletd to health');
        return res.status(200).json(response);
    }catch(e){
        return res.status(500).json({
            status: e
        });
    } 
}


async function patchVideos(req,res){
    console.log('put Video health method is running');
    const body = req.body;
    const id = req.params.id;
    console.log('step 1')
    try{
        const response = await healthVideoModel.findByIdAndUpdate(id,body,{
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
    console.log('delete video  health method is running');
   
    const id = req.params.id;

    try{
        const response = await healthVideoModel.findByIdAndDelete(id);

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
    deleteArticle,deleteVideos,getArticle,getVideos,
    patchVideos,putArticle,postArticle,postVideos
}