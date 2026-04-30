// We will performing getsession ,login and logout functions at server side 
"use server"
import {defaultSessionData, SessionData , sessionOptions} from './lib'
import {getIronSession} from 'iron-session'
import { redirect } from 'next/navigation'
import {cookies} from 'next/headers'
import { revalidatePath } from 'next/cache'

let username = "anas"
let isPro = true

export const getSession = async () => {
    // over here our session is empty
    const session = await getIronSession<SessionData>(cookies(), sessionOptions)

    //so ham yaha ajai gai and idher session ko we filled it with the default session data
    if(!session.isLoggedIn) {
        session.isLoggedIn = defaultSessionData.isLoggedIn
    }

    return session
}

export const login = async (
    prevState: {error: undefined | string},
    formData : FormData
) => {
    const session = await getSession()

    const formUsername = formData.get('username') as string
    const formPassword = formData.get('password') as string

    // Check from the DB
    // const user = await db.getUser({username: formUsername, password: formPassword})

    // For demo purposes, we will be using mock data
    if(formUsername !== username){
        return {error: "Wrong Crendentials"};
    }

    session.userId = "1";
    session.username = formUsername
    session.isPro = isPro
    session.isLoggedIn = true

    // save the sessiom
    await session.save();
    redirect("/")

}


export const logout = async () => {
    const session = await getSession()

    session.destroy()

    redirect("/")

}

export const changePremium = async () => {
    const session = await getSession()

    // here just mocking how to fetch whether the user is premium user or not (in real world , fetch from database)
    isPro = !session.isPro
    session.isPro = isPro
    await session.save()
    revalidatePath("/profile")
}

export const changeUsername = async (formData : FormData) => {
    const session = await getSession()

    const newUsername = formData.get("username") as string;

    username = newUsername;

    session.username = username;
    await session.save();
    revalidatePath("/profile");


}