import { useState } from 'react'
import './App.css'

const quotes = [
  {
    text: "Code is like humor. When you have to explain it, it is bad.",
    author: "Cory House"
  },
  {
    text: "First, solve the problem. Then, write the code.",
    author: "John Johnson"
  },
  {
    text: "Experience is the name everyone gives to their mistakes.",
    author: "Oscar Wilde"
  },
  {
    text: "In order to be irreplaceable, one must always be different.",
    author: "Coco Chanel"
  },
  {
    text: "Java is to JavaScript what car is to Carpet.",
    author: "Chris Heilmann"
  },
  {
    text: "Programs must be written for people to read, and only incidentally for machines to execute.",
    author: "Harold Abelson"
  },
  {
    text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Martin Fowler"
  }
];


function App() {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <>
    <div className='heading'>
      <h2>Welcome to the random quote generator</h2>
    </div>

    <div className='quote'>
      <p>"{quotes[currentIndex].text}"</p>
    </div>


    <div className='layout'>
        

        <button className='button' onClick={() => 
          {
            const randomIndex = Math.floor(Math.random() * quotes.length)
            setCurrentIndex(randomIndex);
            
          }
          }>
          Get Quote
        </button>
    </div>
    </>
    
  )
}

export default App
