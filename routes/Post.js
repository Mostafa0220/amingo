const express = require('express')
const Post = require('../models/Post')
const Post = require('../models/User')

const router = express.Router();

/**
 * Post route for add a new post
 * 
 * @name POST /posts/add
 * 
 * @param {string} email - email of the owner
 * @param {string} message - message of the owner
 */
router.post('/add', (req, res) =>{
    const newPost = new Post({
        email: req.body.email,
        message: req.body.message
    })

    newPost
        .save()
        .then(post=> {
            res.json(post)
        })
        .catch(err=> {
            res.json(err)
        })
});
/**
 * Get route to fetch all posts from collection
 * 
 * @name GET: /Posts/
 */
router.get('/',(req,res)=>{
    Post.find()
    .then(posts=>res.json(posts))
    .catch(err=>res.json(err));
});
//http://localhost:5000/posts/getByEmail?email=mostafa0220@gmail.com
/**
 * Return all posts by email 
 */
router.get('/getByEmail',(req,res)=>{
    Post.find({email:req.query.email})
    .then(posts=>res.json(posts))
    .catch(err=>res.json(err));
});
module.exports = router;