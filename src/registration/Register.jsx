import '../App.css';
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
          
        let response = await fetch(`http://localhost:8080/user`, config);

        let json = response.json()
            alert("User Registered"); 
            navigate("/")
       
    }    

    return( 
        <>
          
           <div className="register-main"> 
            <div>
                <br />
                <label> First Name: </label>
                <input className="register-box" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                <br/>
                <label> Last Name: </label>
                <input className="register-box" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} /> 
                <br/>
                <label> Email: </label>
                <input className="register-box" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                <br/>
                <label> Mobile Number:</label>
                <input className="register-box" type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                <br/>
                <label> Password: </label>
                <input className="register-box" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <br/>
                <button className="register-button" onClick={getData}> Register </button>
            </div>
            
            </div>
        </>
    )
}