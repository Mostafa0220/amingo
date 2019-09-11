const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User=require('./models/User');
const db="mongodb+srv://mostafa:gahova@cluster0-c1t5b.mongodb.net/test?retryWrites=true&w=majority";

mongoose
.connect(db,{})
.then(()=>console.log("DB Connected"))
.catch(()=>console.log("err"));
const app = express();
app.use(bodyParser.urlencoded({extended:false}));
 const port=5000;
 /**
  * @name POST /users/register
  * 
  * @param{string} email - email of the user 
  * @param{string} password - password of the user 
  * @param{string} name - name of the user 
  */
 app.post('/users/register',(req,res)=>{
    const newUser=new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    })
    newUser.save().then(
        user=>{
            res.json(user)
        }
    ).catch(err=>{
        res.json(err)
    })
});
/* app.post('/users/register',(req,res)=>{
    res.json({
        msg:"user resister route is called"
    })
}); */

/* app.get('/', function (req, res) {
  res.send('Hello World')
}) */
//Homepage
app.get('/',(req, res)=> res.json(
    {"msg":"Hello as amingo!!"}
));
 
app.listen(port,()=>console.log(`Your application is running @http://localhost:${port}`));