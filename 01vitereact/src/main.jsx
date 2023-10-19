import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h3>My custom Function!!!</h3>
    </div>
  )
}


const ReactElement={
  type:'a',
  props:{
    href:'https://www.google.com/',
    target:"_blank"
  },
  children:'Click me to visit google!!!'
}

const otherElement=(
  <h1>Hello there </h1>
)

const thirdElement={
  'a',q
  {href:'https://www.google.com/'}
}

ReactDOM.createRoot(document.getElementById('root')).render(
 
    <ReactElement/>
)
