import {Schema, model, models} from "mongoose";

const UserSchema = new Schema({
    email:{
        type: String, 
        unique: true,
        required:[true, "Email is required"],
    },
    FullName:{
        type:String,
        required:[true, "Full name is required"],
        minLength: [4, "full name should be at least 4 characters long"],
        maxLength:[30, "full name should be less then 30 characters"]
    },
    password:{
        type:String,
        required:[true,"password is required"],
        select: false
    }

})

const User = models.User || model("User", UserSchema)

export default User