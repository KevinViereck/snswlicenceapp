import "../App.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import nswlogo from "../img/nswlogo.png";
import { Link } from "react-router-dom";
export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // useEffect(() => {
  //     getData()
  // }, []);
  async function getData() {


   async function getData(){
        let config = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ firstName, lastName, email, dateOfBirth, mobile, password }),
          };
          
        let response = await fetch(`http://localhost:8080/user`, config);

        let json = await response.json()
            alert("User Registered"); 
            navigate("/")
       
    }    
  }
    return( 
        <>
          
           <div className="register-main"> 
           <section>
           <h3 class="font-bold text-2xl">Welcome to the NSW Driving Licence Application</h3>
           <p class="text-gray-600 pt-2">Please register here</p>
           </section>
         
           <section class="mt-10">
                <label> First Name: </label>
                <input class="register-box" type="text" value={firstName} required="required"  onChange={(e) => setFirstName(e.target.value)} />
                
                <label> Last Name: </label>
                <input class="register-box" type="text" value={lastName} required="required"  onChange={(e) => setLastName(e.target.value)} /> 
                
                <label> Email: </label>
                <input class="register-box" type="text" value={email} required="required"  onChange={(e) => setEmail(e.target.value)} />

                <label> Date of Birth: </label>
                <input class= "register-box" type= "date" value={dateOfBirth} required="required"  onChange={(e) => setDateOfBirth(e.target.value)}/>
            
                <label> Mobile Number:</label>
                <input class="register-box" type="text" value={mobile} required="required"  onChange={(e) => setMobile(e.target.value)} />
            
                <label> Password: </label>
                <input class="register-box" type="password" value={password} required="required"  onChange={(e) => setPassword(e.target.value)} />
                </section>
                <button className="register-button" onClick={getData}> Submit Registration </button>
            </div>
       
          
            
        </>
    )
    }
