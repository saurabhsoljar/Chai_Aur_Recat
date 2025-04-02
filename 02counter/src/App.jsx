import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  // addValue
  // const addValue = () => {
  //   if (counter === 100) {
  //     setCounter(0);
  //   } else if (counter < 100) {
  //     setCounter(counter + 1);
  //   }
  // };

    const addValue = () => {
    if (counter === 100) {
      setCounter(0);
    } else if (counter < 100) {
      setCounter(counter + 1);
      setCounter(counter + 1);
      setCounter(counter + 1);
      setCounter(counter + 1);
      setCounter(counter + 1);
      setCounter(counter + 1);
    }
  };
  

  //ternary condition
  // const addValue = () => {
  //   setCounter((prevCounet) => (prevCounet === 100 ? 0 : prevCounet + 1));
  // };

  // removeValue
  // const removeValue = () => {
  //   if (counter === 0) {
  //     setCounter(100);
  //   } else if (counter > 0) {
  //     setCounter(counter - 1);
  //   }
  // };

    const removeValue = () => {
    if (counter === 0) {
      setCounter(100);
    } else if (counter > 0) {
      setCounter(counter - 1);
      setCounter(counter - 1);
      setCounter(counter - 1);
      setCounter(counter - 1);
      setCounter(counter - 1);
      
    }
  };
  

  //ternary condition
  // const removeValue = () => {
  //   setCounter((prevCounet) => (prevCounet === 0 ? 100 : prevCounet - 1));
  // };

  return (
    <>
      <h1>Chai aur react with Saurabh</h1>
      <h1>Counter value: {counter}</h1>

      <button onClick={addValue}>Add valute </button>
      <br />
      <button onClick={removeValue}>remove value</button>
      <p>footer:{counter}</p>
    </>
  );
}

export default App;
