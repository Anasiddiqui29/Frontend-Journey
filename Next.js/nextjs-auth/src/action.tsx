// We will performing getsession ,login and logout functions at server side 
"use server"
import {defaultSessionData, SessionData , sessionOptions} from './lib'
import {getIronSession} from 'iron-session'
import {cookies} from 'next/headers'

export const getSession = async () => {
    // over here our session is empty
    const session = await getIronSession<SessionData>(cookies(), sessionOptions)

    //so ham yaha ajai gai and idher session ko we filled it with the default session data
    if(!session.isLoggedIn) {
        session.isLoggedIn = defaultSessionData.isLoggedIn
    }

    return session
}

export const login = async () => {}
export const logout = async () => {}