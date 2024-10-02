import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignUp from "./SignUP"
import SignIN from "./SignIN"
import Home from "./Home"
function App() {

  const [userAuth,setUserAuth] = useState(null)
  return (
    <>
{!userAuth &&     <SignUp setUserAuth={setUserAuth}/>}
  {/* {!userAuth  && <SignIN setUserAuth={setUserAuth}/>} */}
   {userAuth &&  <Home/>}
    </>
  )
}

export default App
