const mongoose = require('mongoose');

const mentalArticleModel = require('../module/mentalArticleModel');
const mentalVideoModel = require('../module/mentalVideoModel');



async function getArticle(req,res){
    console.log('get article function called');
    try{
        const response = await mentalArticleModel.find();
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
        const savingData = new mentalArticleModel(body);
        const response = await savingData.save();
        console.log('successfully saved post mental article  data');
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
        const response = await mentalArticleModel.findByIdAndUpdate(id,body,{
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
        const response = await mentalArticleModel.findByIdAndDelete(id);

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
        const savingData = new mentalVideoModel(body);
        const response = await savingData.save();
        console.log('successfully saved post video mental  data');
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
        const response = await mentalVideoModel.find();
        console.log('successfully fetched video reletd to mental');
        return res.status(200).json(response);
    }catch(e){
        return res.status(500).json({
            status: e
        });
    } 
}


async function patchVideos(req,res){
    console.log('put Video mental method is running');
    const body = req.body;
    const id = req.params.id;
    console.log('step 1')
    try{
        const response = await mentalVideoModel.findByIdAndUpdate(id,body,{
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
    console.log('delete video  exercise method is running');
   
    const id = req.params.id;

    try{
        const response = await mentalVideoModel.findByIdAndDelete(id);

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
    deleteArticle,getArticle,
    postArticle,putArticle,
    deleteVideos,getVideos,
    postVideos,patchVideos
}