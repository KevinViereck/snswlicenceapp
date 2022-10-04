import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import nswlogo from "../img/nswlogo.png";
import { login } from "../web-helpers";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function submit() {
   await login(email,password)
    navigate("/loginAsCustomer");
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

        <div className="register-main">
          <p className="text-gray-600 pt-2">Please login here</p>
   <br></br>
          <div className="w-56 relative group">
          
            <input
              
              type="text"
              id="username" 
              required className="register-box w-full h-10 px-4 text-sm peer bg-gray-200 rounded 
              flex items-stretch
             focus:outline-none border-b-4 border-gray-300
               focus:border-blue-900 transition duration-500 px-3 pb-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />   
            
            <label for="username" className="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs 
            peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 
            group-focus-within:-translate-y-full peer-valid:-translate-y-full 
            group-focus-within:pl-0 peer-valid:pl-0">Please enter Email</label>
          </div>

        
          <div className="w-56 relative group">
            <label> Password: </label>
            <input
            type="password"
            id="password" 
            required className="w-full h-10 px-4 text-sm peer bg-gray-200 rounded 
            flex items-stretch
           focus:outline-none border-b-4 border-gray-300
             focus:border-blue-900 transition duration-500 px-3 pb-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <br></br>
          <button className="navi" onClick={login}> Please Login </button>

        </div>
      </div>
    </>
  );
}
