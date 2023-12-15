import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputBox from './Components/inputBox'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='text-4xl  font-bold'>

    React Router 

   

      {/* <InputBox/> */}
    </div>
     </>
  )
}

export default App
