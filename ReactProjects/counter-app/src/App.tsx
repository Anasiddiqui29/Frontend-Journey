import {useState } from 'react'
import './App.css'

function App() {
  // hook to store the variable
  // count stores the value which is 0 at first and setCount is the function that updates it
  const [count , setCount] = useState(0);

  return (
    <>
      <div>
        <p>{count}</p>
        {/* <button className="inc" onClick={() => {setCount(count+1)}}> Increase </button> */}
        <button className="inc" onClick={() => {setCount(prev => prev+1)}}> Increase </button>
        <button className="dec" onClick={() => {setCount(prev => prev-1)}}>Decrease</button>
        {/* <button className="dec" onClick={() => {setCount(count-1)}}>Decrease</button> */}
      </div>
    
    </>
  )
}

export default App
