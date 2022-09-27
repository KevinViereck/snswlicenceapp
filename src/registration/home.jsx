
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Register(){

    const[firstName, setFirstName] = useState("")
    const[lastName, setLastName] = useState('')
    const[email,setEmail] = useState('')
    const[mobile, setMobile] = useState()
    const[password,setPassword] = useState('')

    const navigate = useNavigate()

    // useEffect(() => {
    //     getData()
    // }, []);


   async function getData(){
        let config = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ firstName, lastName, email, mobile, password }),
          };
          
        let response = await fetch(`${server}/user`, config);

        let json = response.json()
            alert("User Registered"); 
            navigate("/")
       
    }    

    return( 
        <>
            <h1> Register </h1>
           <div> 
                <label> First Name: </label>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                <br/>
                <label> Last Name: </label>
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} /> 
                <br/>
                <label> Email: </label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                <br/>
                <label> Mobile Number:</label>
                <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                <br/>
                <label> Password: </label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <br/>
                <button onClick={getData}> Register </button>
            </div>
        </>
    )
}