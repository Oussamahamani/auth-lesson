import React,{useState} from 'react'

export default function SignIn() {

  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const [error,setError]=useState(null)
  const [success, setSuccess] = useState(null)
  const [loading,setLoading] = useState(null)

  
  const handleSubmit = async (e)=>{
      e.preventDefault()
    
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
         <button>Log In</button>

         {/* {loading&&"loading" }
            <h5>

            {error}
            </h5>

            <h5> {success}</h5> */}
        </form>
    </div>
  )
}
