const express = require('express');
const {getArticle,getVideos,postArticle} = require('../controller/exercise.controller');

const router = express.Router();


router.get('/article',getArticle);
router.get('/videos',getVideos);




router.post('/article',postArticle);
// router.post('/videos');



// router.patch('/article');
// router.patch('/videos');


// router.delete('/article');
// router.delete('/videos');


module.exports = router;

