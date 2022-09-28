import { useState } from "react"

export default function Login(){

    const[email, setEmail] = useState('')
    const[password,setPassword] = useState('')


    async function getLogin(){
        
        const config = {
            method: "POST",
            headers : {'Content-type':'application/json'},
            body: JSON.stringify({email,password})
        }

        const response = await fetch(`http://localhost:8080/user/login`,config)
        const result = response.json()
        alert("logged in as")

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