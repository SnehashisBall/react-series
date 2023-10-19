import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  let cardNo=[0,1,2,3];
  
  return (
  <>
   <Card cardName="SRM"  lstLine="Click Here"/>
   <Card cardName="JNU" lstLine="Press here to move frwd"/>
  </>
  )
}

export default App
