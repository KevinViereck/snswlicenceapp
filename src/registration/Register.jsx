import "../App.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import nswlogo from "../img/nswlogo.png";
import { Link } from "react-router-dom";
export default function Register() {
  const [firstName, setFirstName] = useState("Tom");
  const [lastName, setLastName] = useState("Smith");
  const [email, setEmail] = useState("t@e.com");
  const [dateOfBirth, setDateOfBirth] = useState("2001-05-14");
  const [mobile, setMobile] = useState("0123456");
  const [password, setPassword] = useState("password");
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
    let token = await response.json();
    debugger;
    alert("User Registered");
    navigate("/");
  }
  return (
    <>
      {" "}
      <div className="drop-shadow-xl">
        {" "}
        <section>
          {" "}
          <img
            className="nsw-logo"
            src={nswlogo}
            width={200}
            height={200}
            alt="NSW Government"
          />{" "}
        </section>{" "}
        <br></br>{" "}
        <div className="justify-center">
          {" "}
          <div
            className="inline-flex shadow-md hover:shadow-lg focus:shadow-lg"
            role="group"
          >
            {" "}
            <div className="navi">
              {" "}
              <Link to="/"> Home </Link>{" "}
            </div>{" "}
            {/* PLACEHOLDER */}
            <div className="navi">
              {" "}
              <Link to="/register"> Register </Link>{" "}
            </div>{" "}
            <div className="navi">
              {" "}
              <Link to="/login"> Login </Link>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="register-main">
        {" "}
        <section>
          {" "}
          {/* <p className="text-gray-600 pt-2">Please register here</p> */}
        </section>{" "}
        <table>
          {" "}
          <tbody>
            {" "}
            <tr>
              {" "}
              <td width="10px">
                {" "}
                <label> First Name </label>{" "}
                <input
                  className="register-box"
                  type="text"
                  value={firstName}
                  required="required"
                  onChange={(e) => setFirstName(e.target.value)}
                />{" "}
              </td>{" "}
            </tr>{" "}
            <tr>
              {" "}
              <td>
                {" "}
                <label> Last Name </label>{" "}
                <input
                  className="register-box"
                  type="text"
                  value={lastName}
                  required="required"
                  onChange={(e) => setLastName(e.target.value)}
                />{" "}
              </td>{" "}
            </tr>{" "}
            <tr>
              {" "}
              <td>
                {" "}
                <label> Your Email</label>{" "}
                <input
                  className="register-box"
                  type="text"
                  value={email}
                  required="required"
                  placeholder="email@email.com"
                  onChange={(e) => setEmail(e.target.value)}
                />{" "}
              </td>{" "}
            </tr>{" "}
            <tr>
              {" "}
              <td>
                {" "}
                <label> Date of Birth </label>{" "}
                <input
                  className="register-box"
                  type="date"
                  value={dateOfBirth}
                  required="required"
                  onChange={(e) => setDateOfBirth(e.target.value)}
                />{" "}
              </td>{" "}
            </tr>{" "}
            <tr>
              {" "}
              <td>
                {" "}
                <label> Mobile Number</label>{" "}
                <input
                  className="register-box"
                  type="text"
                  value={mobile}
                  required="required"
                  placeholder="+61"
                  onChange={(e) => setMobile(e.target.value)}
                />{" "}
              </td>{" "}
            </tr>{" "}
            <tr>
              {" "}
              <td>
                {" "}
                <label> Password </label>{" "}
                <input
                  className="register-box"
                  type="password"
                  value={password}
                  required="required"
                  onChange={(e) => setPassword(e.target.value)}
                />{" "}
              </td>{" "}
            </tr>{" "}
          </tbody>{" "}
        </table>{" "}
        <br></br>{" "}
        <button className="navi" onClick={getData}>
          {" "}
          Submit Registration{" "}
        </button>{" "}
      </div>{" "}
    </>
  );
}
