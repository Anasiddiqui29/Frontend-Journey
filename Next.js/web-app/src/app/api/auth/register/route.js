import User from "@/models/User";
import connect from "@/utils/db";
import bcrypt from "bcryptjs"
import { NextResponse } from "next/server";

export const POST = async (request) => {
    const {name , email , password} = await request.json();

    // connect to our databse (mongodb)
    await connect();

    // hashed the password first
    const hashedPass = await bcrypt.hash(password,5)
    
    const newUser = new User({
        name,
        email,
        password: hashedPass,
    });

    try{
        await newUser.save()
        return new NextResponse("User has been created " , {
            status:201,
        });
    }catch(err){
        return new NextResponse(err.message , {
            status: 50,
        });
    }

}