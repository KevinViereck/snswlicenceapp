import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import nswlogo from "../img/nswlogo.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function getLogin() {
    const config = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ email, password }),
    };

    const response = fetch(`http://localhost:8080/user/login`, config)
      .then((r) => {
        if (r.status != 200) {
          throw Error("Invalid Login");
        }
        return r.json();
      })
      .then((j) => {
        localStorage.setItem("token", j);
        navigate("/logbook")
      });
    
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

        
        <div class="flex items-center justify-center">
          <div
            class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg"
            role="group"
          >
            <div
              aria-current="page"
              class="
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
<br></br>



<div className="register-main"> 
<section>
     
     <p className="text-gray-600 pt-2">Please login here</p>
     </section>
<section className="mt-10">
        <label>Email:</label>
        <input className="register-box" type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
 
      
      
        <label>Password</label>
        <input className="register-box"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
         <button onClick={getLogin}> Login </button>
      </section>
      
   </div>
     
  

    </>
  );
}
