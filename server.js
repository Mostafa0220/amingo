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
//Configure body parser
app.use(bodyParser.urlencoded({extended: false}));

//User routes
const userRoutes = require('./routes/User');
app.use('/users', userRoutes);
//Post routes
const postRoutes = require('./routes/Post');
app.use('/posts', postRoutes);


const port=process.env.PORT || 5000;

app.get('/',(req, res)=> res.json(
    {"msg":"Hello as amingo!!"}
));
 
app.listen(port,()=>console.log(`Your application is running @http://localhost:${port}`));