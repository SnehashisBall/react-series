import { useState } from "react";


function App() {

const [counter,setCounter]=useState(10);

const addValue=()=>{
  if(counter<20)
  setCounter(counter+1);
  else
  console.log("Value can't exceed 20");
 }

const decreVal=()=>{
  if(counter>0)
    setCounter(counter-1);
  else 
    console.log("Value can't go beyound 0");
}

  return (
  <>
  <h1>Counter</h1>
  <h3>Counter :{counter}</h3>

  <button onClick={addValue}>Increase the counter {counter}</button>
  <br/>
  <button onClick={decreVal}>Decrease the counter {counter}</button>

  <p>Footer:{counter}</p>

  </>
  )
}

export default App
