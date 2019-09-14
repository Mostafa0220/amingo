const express = require('express')
const User = require('../models/User')

const router = express.Router();


/**
 * Get route to fetch all users from collection
 * 
 * @name GET: /Users/
 */
router.get('/',(req,res)=>{
    User.find()
    .then(users=>res.json(users))
    .catch(err=>res.json(err));
})
module.exports = router;