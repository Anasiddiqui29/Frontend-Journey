"use client"

import { createContext , useState } from "react";

export const ThemeContext = createContext();

// So we will be using useState here because toggle will have two states
// so one func will take prev value and will change it

export const ThemeProvider = ({children}) => {
    // here initial value of the useState is "dark"
    const[mode , setMode] = useState("dark")
    
    const toggle = () => {
        setMode((prev) => (prev == "dark" ? "light" : "dark"))
    }

    return (<ThemeContext.Provider value={{toggle , mode}} >
        <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
    );
};