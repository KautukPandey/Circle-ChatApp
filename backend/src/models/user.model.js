import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema(
	{
		username: {
			type: String,
            trim: true,
            lowercase: true,
			required: true,
            index: true,
            unique: true
		},
		email: { 
            type: String, 
            required: true, 
            unique: true 
        },
		password: { 
            type: String, 
            required: true 
        },
        avatar: {
            type: String, // Link from cloudinary
            required: true,
        },
        refreshToken: {
            type: String
        }
	},
	{
		timestamps: true,
	},
);

userSchema.pre("save", async function (next) {
	if (!this.isModified("password")) {
		return next();
	}
	this.password = await bcrypt.hash(this.password, 10);
	next();
});

userSchema.methods.comparePassword = async function (enteredPassword) {
	return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullname: this.fullname
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export default model("User", userSchema);