import React,{useState} from 'react'
import {auth} from "./config.js"
import {createUserWithEmailAndPassword} from "firebase/auth"
export default function SignUp() {

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const [error,setError]=useState(null)
    const [success, setSuccess] = useState(null)
    const [loading,setLoading] = useState(null)

    
    const handleSubmit = async (e)=>{
        e.preventDefault()
        if(loading){
            console.log('we are in the midst of a request already')
            return
        }
        console.log("Submit",email,password)
        setError(null)
        setLoading(true)
        try {
            
            // if(password.includes("@")){
            //     alert("make your password strongeer")
            //     return
            // }
            let response = await createUserWithEmailAndPassword(auth,email,password)
            console.log(response)
            setError(null)
            setSuccess("congrats, you have signed up")
        } catch (error) {
            console.log(error.code)
            setError(error.code)
            console.error(error);
            
        }
        setLoading(false)
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <div>

            <label htmlFor="">Email</label>
            <input type="text" onChange = {e=>setEmail(e.target.value)}/>
            </div>
            <div>

            <label htmlFor="">Password</label>
            <input type="text" onChange = {e=>setPassword(e.target.value)}/>
            </div>
         <button>sign up</button>

         {loading&&"loading" }
            <h5>

            {error}
            </h5>

            <h5> {success}</h5>
        </form>
    </div>
  )
}
