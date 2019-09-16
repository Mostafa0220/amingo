const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User=require('./models/User');
const keys=require('./config/keys');
const passport=require('passport');
const db=keys.mongoURI;

mongoose
.connect(db,{useNewUrlParser:true, useUnifiedTopology: true })
.then(()=>console.log("DB Connected"))
.catch(()=>console.log("err"));
const app = express();
//Configure body parser
app.use(bodyParser.urlencoded({extended: false}));


//Init passport
app.use(passport.initialize());
require('./config/passport')(passport);

//Auth routes
const authRoutes= require('./routes/Auth');
app.use('/auth', authRoutes);


//User routes
const userRoutes = require('./routes/User');
app.use('/users', userRoutes);
//Post routes
const postRoutes = require('./routes/Post');
app.use('/posts',passport.authenticate('jwt',{session:false}), postRoutes);


const port=process.env.PORT || 5000;

app.get('/',(req, res)=> res.json(
    {"msg":"Hello as amingo!!"}
));
 
app.listen(port,()=>console.log(`Your application is running @http://localhost:${port}`));