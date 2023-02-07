const express = require('express');
const posts = require('../models/posts');

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


//Get posts /////////////////////////////////////////////////////////////////////////////////////
router.get('/posts', (req,res)=>{

    posts.find().exec((err, posts)=>{

        if(err){
            return res.status(400).json({
                error:err
            })
        }

        return res.status(200).json({
            Success: true,
            exsistingPosts:posts
        })
    })
})



//update post
router.put('/post/update/:id', (req,res)=>{

    posts.findByIdAndUpdate(

        //update body
        req.params.id,
        {
            $set:req.body
        },

        (err,post) =>{

            //if
            if(err){
                return res.status(400).json(
                    { error:err}
                )
            }

            //else
            return res.status(200).json({
                success: "Updated Succesfully"
            });
        }
    )
})



//delete post

router.delete('/post/delete/:id', (req,res)=>{

    posts.findByIdAndRemove(req.params.id).exec((err, deletedPost) =>{

        if(err) return res.status(400).json({
            message: "Delete unsuccesful", err
        });

        return res.json({
            message : "Delete Successful", deletedPost
        });
    })
})

module.exports = router;