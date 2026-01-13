import { ACTIONS } from "./App"

export function DigitButton({dispatch , digit}){
    return(
        //in this function we will return the button with onClick event , although i can do all these work on the 
        // main file but for simplicity , i am breaking it up

        //here onclick we are calling dispatch func which is calling ADD_DIGIT func and passing digit in the payload
        <button onClick={() => dispatch({type: ACTIONS.ADD_DIGGIT , payload: {digit}})} > 
        {digit} </button>
    )
}

