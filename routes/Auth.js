const express=require('express');
const User=require('../models/User');

const router = express.Router();

/**
 * Post route for register a new user
 * 
 * @name POST /users/regiser
 * 
 * @param {string} email - email of the user
 * @param {string} password - password of the user
 * @param {name} name - name of the user
 */
//http://localhost:5000/auth/register
router.post('/register', (req, res) =>{
    User.findOne({email: req.body.email})
    .then(user=>{
            if(user){
                res.json({message:"Email already exist!"})
            }else{

                //save the user
                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password
                })
            
                newUser
                    .save()
                    .then(user=> {
                        res.json(user)
                    })
                    .catch(err=> {
                        res.json(err)
                    })
            }
        
        })
    
});


module.exports= router;
