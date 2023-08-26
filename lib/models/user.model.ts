import mongoose from 'mongoose'
import { Schema } from 'zod'

const userSchema =  new mongoose.Schema({
    id : {type : String, required : true}, 
    username  : {type : String, required : true, unique : true}, 
    name  : {type : String, required : true},
    image : String,
    bio : String,
    threads : [
        {
        type : mongoose.Schema.Types.ObjectId,
        rer : "Thread"
        }
    ],
    onboarded : {
        type : Boolean,
        default : false
    },
    communities : [
        {
        type : mongoose.Schema.Types.ObjectId,
        rer : "Commmunity"
        }
    ]
})

const User = mongoose.models.User || mongoose.model("User", userSchema)

export default User;