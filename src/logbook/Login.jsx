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
    navigate("/logbook");
  }

  return (
    <>



    
    <script src="../path/to/flowbite/dist/flowbite.js"></script>
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

      <div className="register-main">
        <section>
          <p className="text-gray-600 pt-2">Please login here</p>
        </section>
        <section className="mt-10">
          <table>
            <thead>
              <tr>

              </tr>
            </thead>
            <tbody> 
            <tr>
              <td width="10">
                <label>Your Email</label>
                <input
                  className="register-box"
                  type="text"
                  placeholder="email@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Password</label>

                <input
                  className="register-box"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </td>
            </tr>
            
            <tr>
              <td align="center">
                <button className="submit" onClick={submit}>
                  {" "}
                  Login{" "}
                </button>{" "}
              </td>
            </tr>
            </tbody>
          </table>
        </section>
        <br></br>
      </div>
    </>
  );
}
