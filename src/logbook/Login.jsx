import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Login(){

    const[email, setEmail] = useState('')
    const[password,setPassword] = useState('')
    const navigate = useNavigate()


    async function getLogin(){
        
        const config = {
            method: "POST",
            headers : {'Content-type':'application/json'},
            body: JSON.stringify({email,password})
        }

        const response = await fetch(`http://localhost:8080/user/login`,config)
        const result = await response.json()

    }

    return(
        <>
            <div>
                <label>Email:</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div>
                <label>Password</label>
                <input type="password" value={password} onChange ={(e) => setPassword(e.target.value)} />
            </div>
            <div>
                <button onClick={getLogin}> Login </button>
            </div>
        </>
    )
}