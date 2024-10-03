import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignUp from "./SignUP"
import SignIN from "./SignIN"
import Home from "./Home"
import NavBar from "./NavBar"
function App() {

  const [userAuth,setUserAuth] = useState(null)
  return (
    <>

    <NavBar/>
    <div className="container">

{!userAuth &&     <SignUp setUserAuth={setUserAuth}/>}
  {/* {!userAuth  && <SignIN setUserAuth={setUserAuth}/>} */}

  {/* try to render user email inside home */}
   {userAuth &&  <Home/>}
    </div>
    </>
  )
}

export default App
