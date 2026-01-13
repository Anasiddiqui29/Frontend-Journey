import { useReducer } from "react"
import "./index.css"
import { DigitButton } from "./DigitButton"
import { OperationButton } from "./OperationButton"

//this func will perform action based on the dispatch val we will pass and return the state.
// function reducer(state , action)
// {

// } I am breaking the action into two diff objects 

export const ACTIONS = {
  ADD_DIGGIT : "add-digit",
  CLEAR: "clear" ,
  CHOOSE_OPERATION: "choose-operation",
  DELETE_DIGIT: "delete",
  EQUALTO: "equal-to"
}

function reducer(state , {type , payload})
{
  // using switch case
  switch(type){
    case ACTIONS.ADD_DIGGIT:
      if(state.overwrite){
        return{
          ...state,
          currentOperand: payload.digit,
          overwrite: false
        }

      }

      if(payload.digit === "0" && state.currentOperand === "0") {
        return state;
      }
      if(payload.digit === "." && state.currentOperand.includes(".")) {
        return state;
      }

      return {
        ...state, //we are expanding our state
        currentOperand: `${state.currentOperand || " "}${payload.digit}` //yaha hm current operator mai payload add kar rahai hai
      }
    case ACTIONS.CLEAR:
      return {}
    case ACTIONS.DELETE_DIGIT:
      if(state.overwrite)
      {
        return{
          ...state,
          overwrite:false,
          currentOperand: null
        }
      }

      if(state.currentOperand == null) return {}
      if(state.currentOperand.length == 1){ //yaani agr number hi ek digit hai tou current ko null karodu
        return{
          ...state,
          currentOperand: null
        }
      }

      return{
        ...state,
        currentOperand: state.currentOperand.slice(0,-1) //slice kardou right wala digit
      }

    case ACTIONS.CHOOSE_OPERATION:
      // if(state.currentOperand === null && state.previousOperand === null)
      // {
      //   return state  //do nothing when nothing is clicked
      // }

      // //if the next operand is not null then the game begins
      // if(state.previousOperand === null)
      // {
      //   return {
      //     ...state,
      //     operation: payload.operation,
      //     previousOperand: state.currentOperand,
      //     currentOperand: null,
      //   };
      // }
      if(state.currentOperand == null || state.currentOperand === "")
      {
        // If there IS a previous operand, allow changing the operation
        if(state.previousOperand != null){
            return {
                ...state,
                operation: payload.operation
            }
        }
        return state // If nothing is entered, do nothing
      }

      // 2. If there's a previous calculation already, compute it first
      if(state.previousOperand != null && state.previousOperand !== "")
      {
        return {
          ...state,
          previousOperand: evaluate(state),
          operation: payload.operation,
          currentOperand: null
          // You'd add a compute function here, but for now, we'll just set up the next state
          // For a full calculator, you would call a compute function here:
          // previousOperand: compute(state), 
          // currentOperand: null,
          // *For now, just swap the operation and keep the existing previousOperand*
        }
      }

      // 3. First operation clicked - move current to previous
      return{
        ...state,
        operation: payload.operation,
        previousOperand: state.currentOperand, // <-- FIX: Move current to previous
        currentOperand: null, // <-- FIX: Set to null so the user can start the next number
      }
    case ACTIONS.EVALUATE:
      if(state.currentOperand == null ||
        state.previousOperand == null ||
        state.operation == null
      ) return state
      
      return{
        ...state,
        overwrite: true,
        previousOperand: null,
        operation: null,
        currentOperand: evaluate(state)
      }


  }
}

function evaluate({currentOperand , previousOperand , operation})
{
  const prev = parseFloat(previousOperand)
  const current = parseFloat(currentOperand)
  //if the prev or current operand is not a number (NaN) then return empty string
  if(isNaN(prev) || isNaN(current)) return ""
  let computation = ""
  //now cases for multiple operation
  switch(operation){
    case "+":
      computation = prev + current
      break
    case "-":
      computation = prev - current
      break
    case "*":
      computation = prev * current
      break
    case "÷":
      computation = prev / current
      break
  }

  return computation.toString()

}

function App() {
  // We are going to usereducer to handle states of our previousOperand, currentOperand and operation since it will have 
  // multiple states so it will make it easier
  const initialState = { currentOperand: "0", previousOperand: "", operation: null };
  const [{currentOperand , previousOperand , operation} , dispatch] = useReducer(reducer , initialState) 

  return (
    <>
      <div className="calculator-grid">
        <div className="output">
          <div className="previous-operand">{previousOperand} {operation}</div>
          <div className="current-operand">{currentOperand}</div>
        </div>
        
        {/* Now buttons */}
        <button className="span-two" onClick={() => dispatch({type: ACTIONS.CLEAR})}>AC</button>
        <button onClick={() => dispatch({type: ACTIONS.DELETE_DIGIT})}>DEL</button>
        <OperationButton operation="÷" dispatch={dispatch} />
        <DigitButton digit="1" dispatch={dispatch} />
        <DigitButton digit="2" dispatch={dispatch} />
        <DigitButton digit="3" dispatch={dispatch} />
        <OperationButton operation="*" dispatch={dispatch} />
        <DigitButton digit="4" dispatch={dispatch} />
        <DigitButton digit="5" dispatch={dispatch} />
        <DigitButton digit="6" dispatch={dispatch} />
        <OperationButton operation="+" dispatch={dispatch} />
        <DigitButton digit="7" dispatch={dispatch} />
        <DigitButton digit="8" dispatch={dispatch} />
        <DigitButton digit="9" dispatch={dispatch} />
        <OperationButton operation="-" dispatch={dispatch} />
        <DigitButton digit="0" dispatch={dispatch} />
         <DigitButton digit="." dispatch={dispatch} />
        <button className="span-two" onClick={() => dispatch({type: ACTIONS.EVALUATE})}>=</button>
      </div>
    </>
  )
}

export default App
