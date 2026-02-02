import type { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/User.model.js";

export const register = async(req: Request,res: Response)=>{
    try {
        const {username, email, password} = req.body;

        if(!username||!email||!password){
            return res.status(400).json({ message: "All fields required" });
        }
        const existingUser = await User.findOne({email})
        if(existingUser){
            return res.status(400).json({message: "User already exists"})
        }

        const hashedPassword = await bcrypt.hash(password,10);

        const user = await User.create({
            username,
            email,
            password: hashedPassword
        })

        res.status(201).json({ message: "User registered" });

    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
}

export const login = async(req: Request,res: Response)=>{
    try {
        const {email,password} = req.body;

        const user = await User.findOne({email})
        if (!user)
            return res.status(400).json({ message: "Invalid credentials" });

        const isMatch = await bcrypt.compare(password,user.password)

        if(!isMatch)
            return res.status(400).json({ message: "Invalid credentials" });
        
        const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET as string,
            { expiresIn: "7d" }
        );

        res.json({ token });

    } catch (error) {
        res.status(500).json({ message: "Server error" });

    }
}