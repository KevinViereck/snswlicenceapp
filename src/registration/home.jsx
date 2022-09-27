import { useState } from "react"

export default function Register(){

    const[firstname, setFirstname] = useState("")
    const[lastname, setLastname] = useState('')
    const[email,setEmail] = useState('')
    const[mobileNumber, setMobileNumber] = useState()
    const[password,setPassword] = useState('')

    function getData(){
        
    }

    return( 
        <>
            <h1> Register </h1>
            <form>
                <label> First Name: </label>
                <input type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                <br/>
                <label> Last Name: </label>
                <input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} /> 
                <br/>
                <label> Email: </label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                <br/>
                <label> Mobile Number:</label>
                <input type="text" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
                <br/>
                <label> Password: </label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <br/>
            </form>
        </>
    )
}