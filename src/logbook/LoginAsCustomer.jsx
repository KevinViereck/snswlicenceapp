import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import nswlogo from "../img/nswlogo.png";
export default function LoginAsInCustomer() {
  const [licence, setLicence] = useState();
  const [logentries, setLogentries] = useState([]);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("true");
  const [isNight, setIsNight] = useState(false);
  const [instructorLed, setInstructorLed] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    getLogHoursAsync();
  }, []);
  function getLogHoursAsync() {
    const login = localStorage.getItem("login");
    const loginObject = JSON.parse(login);
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + loginObject.token);
    const config = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    fetch(`http://localhost:8080/loghours`, config)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Unable to fetch entries from database");
        }
        return response.json();
      })
      .then((json) => {
        console.log(json);
        setLogentries(json);
      });
  }
  async function getLicenceAsync() {
    const login = localStorage.getItem("login");
    const loginObject = JSON.parse(login);
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + loginObject.token);
    const config = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    const response = await fetch(`http://localhost:8080/loghours`, config);
    const json = await response.json();
    console.log(json);
    setLicence(json);
  }
  async function postEntry() {
    const login = localStorage.getItem("login");
    const loginObject = JSON.parse(login);
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + loginObject.token);
    myHeaders.append("Content-Type", "application/json");
    const config = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify({
        // Sends the date back in milliseconds
        startTime: Date.parse(startTime),
        // Sends the date back in milliseconds
        endTime: Date.parse(endTime),
        isNight: isNight,
        instructorLed: instructorLed,
      }),
    };
    fetch(`http://localhost:8080/loghours`, config)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Unable to add entry to database");
        }
        alert("Logbook entry created");
      })
      .then(() => {
        getLogHoursAsync();
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
      <p> Log Book Details htmlFor USER </p>
      <div>
        <label> Start: </label>
        <input
          type="datetime-local"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        />
      </div>
      <div>
        <label> End: </label>
        <input
          type="datetime-local"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          required
        />
      </div>
      <div>
        <label style={{ marginLeft: 25 }}>
          <input
            type="checkbox"
            checked={isNight}
            onChange={() => setIsNight(!isNight)}
            required
          />{" "}
          IsNight
        </label>
      </div>
      <div>
        <label style={{ marginLeft: 25 }}>
          <input
            type="checkbox"
            checked={instructorLed}
            onChange={() => setInstructorLed(!instructorLed)}
          />{" "}
          InstructorLed
        </label>
      </div>
      <button className="navi" onClick={postEntry}>
        Add Hours
      </button>
      <button className="navi" onClick={() => {}}>
        Delete Hours
      </button>
      <div>
        <table>
          <thead>
            <tr>
              <th>Licence Id:</th>
              <th>Start Time:</th>
              <th>End Time:</th>
              <th>Is Night:</th>
              <th>Instructor Led:</th>
            </tr>
          </thead>
          <tbody>
            {logentries.map((entry) => {
              return (
                <tr key={entry._id}>
                  <td>{entry.licenceId}</td>
                  <td>{entry.startTime}</td>
                  <td>{entry.endTime}</td>
                  <td>{entry.isNight ? "True" : "False"}</td>
                  <td>{entry.instructorLed ? "True" : "False"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
