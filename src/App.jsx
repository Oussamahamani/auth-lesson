import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignUp from "./SignUP"
import SignIN from "./SignIN"
import Home from "./Home"
import NavBar from "./NavBar"
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"
function App() {

  const [userAuth,setUserAuth] = useState(null)
  return (
    <>

      <BrowserRouter>
    <NavBar userAuth={userAuth} setUserAuth={setUserAuth}/>
    <div className="container">

      <Routes>

        <Route path="/" element ={userAuth?<Home/>:<Navigate replace={true} to="signin"/>} />
        <Route path="/signup" element = {userAuth?<Navigate replace={true} to="/"/>:<SignUp setUserAuth={setUserAuth}/>}/>
        <Route path="/signin" element = {userAuth?<Navigate replace={true} to="/"/>:<SignIN setUserAuth={setUserAuth}/>}/>
      </Routes>
      

{/* {!userAuth &&     <SignUp setUserAuth={setUserAuth}/>} */}
  {/* {!userAuth  && <SignIN setUserAuth={setUserAuth}/>} */}

  {/* try to render user email inside home */}
   {/* {userAuth &&  <Home/>} */}

    </div>
      </BrowserRouter>
    </>
  )
}

export default App
