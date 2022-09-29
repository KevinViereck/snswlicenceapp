import '../App.css';
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import nswlogo from "../img/nswlogo.png";
import { Link } from "react-router-dom";

export default function Register(){

    const[firstName, setFirstName] = useState("")
    const[lastName, setLastName] = useState('')
    const[email,setEmail] = useState('')
    const[dateOfBirth, setDateOfBirth] = useState('')
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

    <div className="content-center">
      <section>
        <img
          className="nsw-logo"
          src={nswlogo}
          width={200}
          height={200}
          alt="NSW Government"
        />
      </section>
      <br></br>
      <div className="flex items-center justify-center">
        <div
          class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg"
          role="group"
        >
          <div
            aria-current="page"
            className="
        rounded-l
        px-6
        py-2.5
        bg-blue-900
        text-white
        font-medium
        text-xs
        leading-tight
        uppercase
        hover:bg-blue-700
        focus:bg-blue-700 focus:outline-none focus:ring-0
        active:bg-blue-800
        transition
        duration-150
        ease-in-out
      "
          >
            {" "}
            <Link to="/"> Home </Link>{" "}
          </div>

          {/* PLACEHOLDER */}

          <div
            className="
        px-6
        py-2.5
        bg-blue-900
        text-white
        font-medium
        text-xs
        leading-tight
        uppercase
        hover:bg-blue-700
        focus:bg-blue-700 focus:outline-none focus:ring-0
        active:bg-blue-800
        transition
        duration-150
        ease-in-out
      "
          >
            {" "}
            <Link to="/register"> Register </Link>{" "}
          </div>

          <div
            className="
        rounded-r
        px-6
        py-2.5
        bg-blue-900
        text-white
        font-medium
        text-xs
        leading-tight
        uppercase
        hover:bg-blue-700
        focus:bg-blue-700 focus:outline-none focus:ring-0
        active:bg-blue-800
        transition
        duration-150
        ease-in-out
      "
          >
            {" "}
            <Link to="/login"> Login </Link>{" "}
          </div>
        </div>
      </div>
    </div>
           <div className="register-main"> 
           
           <section>
     
           <p className="text-gray-600 pt-2">Please register here</p>
           </section>
         
           <section className="mt-10">
                <label> First Name </label>
                <input className="register-box" type="text" value={firstName} required="required"  onChange={(e) => setFirstName(e.target.value)} />
                
                <label> Last Name </label>
                <input className="register-box" type="text" value={lastName} required="required"  onChange={(e) => setLastName(e.target.value)} /> 
                
                <label> Email </label>
                <input className="register-box" type="text" value={email} required="required"  onChange={(e) => setEmail(e.target.value)} />

                <label> Date of Birth </label>
                <input className= "register-box" type= "date" value={dateOfBirth} required="required"  onChange={(e) => setDateOfBirth(e.target.value)}/>
            
                <label> Mobile Number</label>
                <input className="register-box" type="text" value={mobile} required="required"  onChange={(e) => setMobile(e.target.value)} />
            
                <label> Password </label>
                <input className="register-box" type="password" value={password} required="required"  onChange={(e) => setPassword(e.target.value)} />
                </section>
                <button className="register-button" onClick={getData}> Submit Registration </button>
            </div>
       
          
           
        </>
    )
}