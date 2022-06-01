const express = require('express');
const Posts = require('../models/posts');

const router = express.Router();

// save posts
router.post('/book/save' , (req,res)=>{
    let newPost = new Posts(req.body);
    newPost.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Book saved successfully"
        });
        
    });
});

// get posts

router.get('/books', (req,res)=>{
    Posts.find().exec((err,posts) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:posts
        });
    });
});

//specific get

router.get("/book/:id" , (req,res)=>{
    let postId = req.params.id;
    Posts.findById(postId , (err,post)=>{
        if(err){
            return res.status(400).json({
                success:false,
                err
            });
        }
        return res.status(200).json({
            success:true,
            post
        });
    });
});


//update post

router.put('/book/update/:id' , (req,res)=>{
    Posts.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"updated succesfully"
            });
        }
    );
});

// delete post

router.delete('/book/delete/:id' , (req,res)=>{
    Posts.findByIdAndRemove(req.params.id).exec((err,deletedPost) => {
        if(err) return res.status(400).json({
            message:"delete unsuccesful" , err
        });
        return res.json({
            message:"delete succesfully" , deletedPost
        });
    });
});



module.exports = router;