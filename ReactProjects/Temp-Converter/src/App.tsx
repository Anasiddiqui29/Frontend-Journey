import { useState } from 'react'
import './App.css'

function App() {
  const [celcius, setCelcius] = useState("");
  const [fahren , setFahren] = useState("");


  return (
    <div>
      <>
        <h2>Celcius</h2>
        <input className='cel' type="number" placeholder='Celcius' 
        value={celcius}
        onChange={e => {
          const c = e.target.value;
          setCelcius(c);
          setFahren(c * 9/5 + 32);

        }} 
        />
        
        <h2>Fahrenhiet</h2>
        <input className='cel' type='number' placeholder='Fahrenheit' 
        value={fahren}
        onChange={e => {
          const f = e.target.value;
          setFahren(f);
          setCelcius((f - 32) * 5/9);
        }}
        />
      
      </>
    </div>


  )
}

export default App
