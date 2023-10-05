import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function addValue(){
    console.log(first)
  }
  function DecriseValue(){
    
  }

  return (
    <>
      <h1>Counter Value</h1>
      <h1>React counter app</h1>
        <h2>Counter Value: {count}</h2>

        <button onClick={addValue}> Add value</button>
        <br />
        <br />  
        <button onClick={DecriseValue}>Decrise Value</button>
    </>
  )
}

export default App
