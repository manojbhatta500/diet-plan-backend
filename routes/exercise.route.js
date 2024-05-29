const express = require('express');
const {getArticle,postArticle,deleteArticle,putArticle} = require('../controller/exercise.controller');

const router = express.Router();


router.get('/article',getArticle);
router.post('/article',postArticle);
router.patch('/article/:id',putArticle);
router.delete('/article/:id',deleteArticle);










// router.post('/videos');



// router.get('/videos',getVideos);

// router.patch('/article');
// router.patch('/videos');


// router.delete('/article');
// router.delete('/videos');


module.exports = router;

