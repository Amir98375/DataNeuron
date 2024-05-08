const { File } = require('buffer')
const { type } = require('express/lib/response')
const mongoose=require('mongoose')

const signUpSchema=new mongoose.Schema({
    userName:{type:String,required:true},
      designation:{type:String,required:true},
      imageUrl:{type:String,required:true}

},
{
    timestamps:true,
    versionKey:false
}
)

const SignUser=mongoose.model('addDetails',signUpSchema)
module.exports=SignUser