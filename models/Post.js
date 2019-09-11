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
    created:{
        type:Date,
        default:Date.now
    }
}) 

module.exports = Post = mongoose.model('Post',PostSchema);