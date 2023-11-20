import { useState } from 'react'
import './App.css'

function App() {
  const [color,setColor]=useState('Olive');

  return (
<>
<div className="w-full h-screen duration-200" style={{backgroundColor:color}}>Hii</div>
</>
  )
}

export default App
