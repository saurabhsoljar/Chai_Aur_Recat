
import { useState } from 'react';
import './App.css'

function App() {

  const [counter, setCounter] =useState(15)


  //let Counter = 15

  const addValue = () =>{
    // setCounter(counter + 1);

    setCounter(prevCounter => prevCounter+1);
    setCounter(prevCounter => prevCounter+1);
    setCounter(prevCounter => prevCounter+1);
    setCounter(prevCounter => prevCounter+1);
    
  }

  const removeValue = ()=>{
    setCounter(counter-1)
  }

  return (

    <>
      <h1>Chai aur react with Saurabh</h1>
      <h1>Counter value: {counter}</h1>

      <button 
      onClick={addValue}
      >Add valute{counter}</button>
      <br />
      <button
      onClick={removeValue}
      >remove value</button>
      <p>footer:{counter}</p>
    </>
  )
}

export default App
