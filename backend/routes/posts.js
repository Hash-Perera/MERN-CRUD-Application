const express = require('express');
const post = require('../models/posts');

/*use to write http req*/
const router = express.Router();

//Create post///////////////////////////////////////////////////////////////////////////////////
router.post('/post/save', (req,res)=>{

    let newPost = new post(req.body);


    newPost.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            })
        }

        return res.status(200).json({
            Success:"posts saved successfully"
        })
    })
})

module.exports = router;