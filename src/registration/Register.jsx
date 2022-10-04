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

      
      <h3 className="font-bold text-2xl">
            Welcome to the NSW Driving Licence Application
          </h3>
      <div className="register-main">
    
        
          <p className="text-gray-600 pt-2">Please register here</p>
          <br></br>
          <div class="flex-inline space-x-1 space-y-3">
	<div className=""><label> First Name: </label>
          <input
            className="register-box"
            type="text"
            value={firstName}
            required="required"
            onChange={(e) => setFirstName(e.target.value)}
          /></div>
	<div className=""><label> Last Name: </label>
          <input
            className="register-box"
            type="text"
            value={lastName}
            required="required"
            onChange={(e) => setLastName(e.target.value)}
          /></div>
	<div className=""><label> Email: </label>
          <input
            className="register-box"
            type="text"
            value={email}
            required="required"
            onChange={(e) => setEmail(e.target.value)}
          /></div>
	<div className=""><label> Date of Birth: </label>
          <input
            className="register-box"
            type="text"
            value={dateOfBirth}
            required="required"
            onChange={(e) => setDateOfBirth(e.target.value)}
          /></div>
	<div className=""><label> Password: </label>
          <input
            className="register-box"
            type="password"
            value={password}
            required="required"
            onChange={(e) => setPassword(e.target.value)}
          /></div>
                <button className="navi" onClick={getData}>
          {" "}
          Submit Registration{" "}
        </button>

</div>
       
      </div>
    </>
  );
}
