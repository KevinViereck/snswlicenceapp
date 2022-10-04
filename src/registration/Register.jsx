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
    let config = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        dateOfBirth,
        mobile,
        password,
      }),
    };

    let response = await fetch(`http://localhost:8080/user/register`, config);

    let json = await response.json();
    alert("User Registered");
    navigate("/newuserregistered");
  }

  return (
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
            className="inline-flex shadow-md hover:shadow-lg focus:shadow-lg"
            role="group"
          >
            <div className="navi">
              {" "}
              <Link to="/"> Home </Link>{" "}
            </div>
            <div className="navi">
              {" "}
              <Link to="/register"> Register </Link>{" "}
            </div>

            <div className="navi">
              {" "}
              <Link to="/login"> Login </Link>{" "}
            </div>
          </div>
        </div>
      </div>
      <br></br>

      {/* Start coding register box here */}
      <div className="register-main">
          <p className="text-gray-600 pt-2">Please Register here</p>
   <br></br>
          <div className="w-56 relative group">
          
            <input
            
              type="text"
              id="firstname" 
              required className="w-full h-10 text-sm peer bg-gray-200 rounded 
              flex items-stretch
             focus:outline-none border-b-4 border-gray-300
               focus:border-blue-900 transition duration-500 px-3 pb-3"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />   
            
            <label for="firstname" className="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs 
            peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 
            group-focus-within:-translate-y-full peer-valid:-translate-y-full 
            group-focus-within:pl-0 peer-valid:pl-0">Please enter First Name</label>
          </div>
          <br></br>
          <div className="w-56 relative group">
          
          <input
           
            type="text"
            id="lastname" 
            required className="w-full h-10 text-sm peer bg-gray-200 rounded 
            flex items-stretch
           focus:outline-none border-b-4 border-gray-300
             focus:border-blue-900 transition duration-500 px-3 pb-3"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />   
        
          <label for="lastname" className="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs 
          peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 
          group-focus-within:-translate-y-full peer-valid:-translate-y-full 
          group-focus-within:pl-0 peer-valid:pl-0">Please enter Last Name</label>
        </div>
<br></br>
        <div className="w-56 relative group">
          
          <input
          
            type="text"
            id="email" 
            required className="w-full h-10 text-sm peer bg-gray-200 rounded 
            flex items-stretch
           focus:outline-none border-b-4 border-gray-300
             focus:border-blue-900 transition duration-500 px-3 pb-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />   
        
          <label for="lastname" className="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs 
          peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 
          group-focus-within:-translate-y-full peer-valid:-translate-y-full 
          group-focus-within:pl-0 peer-valid:pl-0">Please enter Email</label>
        </div>

<br></br>   

<div className="w-56 relative group">
          
          <input
          
            type="text"
            id="mobile" 
            required className="w-full h-10 text-sm peer bg-gray-200 rounded 
            flex items-stretch
           focus:outline-none border-b-4 border-gray-300
             focus:border-blue-900 transition duration-500 px-3 pb-3"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />   
        
          <label for="mobile" className="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs 
          peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 
          group-focus-within:-translate-y-full peer-valid:-translate-y-full 
          group-focus-within:pl-0 peer-valid:pl-0">Please enter Mobile Number</label>
        </div>

<br></br>   

<div className="w-56 relative group">
          
          <input
          
            type="date"
            id="dateofbirth" 
            required className="register-box w-full h-10 text-sm peer bg-gray-200 rounded 
            flex items-stretch
           focus:outline-none border-b-4 border-gray-300
             focus:border-blue-900 transition duration-500 px-3 pb-3"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />   
        
          <label for="dateofbirth" className="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs 
          peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 
          group-focus-within:-translate-y-full peer-valid:-translate-y-full 
          group-focus-within:pl-0 peer-valid:pl-0"></label>
        </div>
        
          <div className="w-56 relative group">
            <label> Password: </label>
            <input
            type="password"
            id="password" 
            required className="register-box w-full h-10 text-sm peer bg-gray-200 rounded 
            flex items-stretch
           focus:outline-none border-b-4 border-gray-300
             focus:border-blue-900 transition duration-500 px-3 pb-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <br></br>


        
        
          <button className="navi" onClick={getData}> Submit Registration </button>
        
        
        
        
        
        
        
        
        </div>

      
      
     
       
    
    </>
  );
}
