import { NextResponse } from "next/server"
import connect from "@/utils/db"
import Post from "@/models/Post";

export const GET = async (request) =>{

    try{
        await connect();

        const posts = await Post.find();
        // fetch
        // return NextResponse.json("it works!" , {status:200})
        return NextResponse.json(posts, { status: 200 });

    }catch(err) {
        console.log(err);
        // return NextResponse.json("Database error" , {status:500})
        return NextResponse.json({ message: "Database error" }, { status: 500 });
    }

}

export const POST = async (request) => {
    try {
        const body = await request.json(); // Parse the incoming JSON
        await connect();

        const newPost = new Post(body);
        await newPost.save();

        return NextResponse.json(newPost, { status: 201 });
    } catch (err) {
        // console.error(err);
        // return NextResponse.json({ error: "Failed to create post" }, { status: 500 });
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
};