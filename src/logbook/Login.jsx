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
        return j;
      });
    navigate("/logbook");
  }

  return (
    <>
      <div class="content-center">
      
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
            <a
              href="#"
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
            </a>
            <a
              href="#"
              class="
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
            </a>

            <a
              href="#"
              class="
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
            </a>
          </div>
        </div>
      </div>
<br></br>
      <div className="App">
        <table>      </table>
        <label>Email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button onClick={getLogin}> Login </button>
      </div>

    </>
  );
}
