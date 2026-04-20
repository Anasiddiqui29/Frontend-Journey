// here we will define the session context and provider to manage the user session across the app
import {SessionOptions} from 'iron-session'

export interface SessionData {
    userId?: string
    username?: string
    img?: string
    isPro?: boolean //this is for the premium feature, we will set this to true when the user is a pro user
    isLoggedIn: boolean
}

//here : means that type of defaultSessionData is SessionData
export const defaultSessionData: SessionData = {
    isLoggedIn : false
}

export const sessionOptions: SessionOptions = {
    password: process.env.SECRET_KEY!,
    cookieName: 'anas-session',
    cookieOptions: {
        httpOnly : true,
        secure: process.env.NODE_ENV === "production"
    }
}