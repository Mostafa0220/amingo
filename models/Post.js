const mongoose= require('mongoose');
const Schema=mongoose.Schema;
const PostSchema= new Schema({
    message:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    user_id:{
        type:String,
        required:false
    },
    created:{
        type:Date,
        default:Date.now
    }
}) 

module.exports = Post = mongoose.model('Post',PostSchema);