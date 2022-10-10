import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function CreateEntry() {
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [isNight, setIsNight] = useState(false);
  const [instructorLed, setInstructorLed] = useState(false);
  const { id } = useParams("");
  const [logentries, setLogentries] = useState([]);
  const navigate = useNavigate("");

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
        navigate("/loginAsCustomer");
      });
  }

  return (
    <>

    <div className="logbook-box">
      <form
        action=""
        onSubmit={(e) => {
          postEntry();
          e.preventDefault();
        }}
      >
        <label> Start: </label>
        <input
          type="datetime-local"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        />
        <label> End: </label>
        <input
          type="datetime-local"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          min={startTime}
          required
        />
        <label style={{ marginLeft: 25 }}>
          <input
            type="checkbox"
            checked={isNight}
            onChange={() => setIsNight(!isNight)}
          />{" "}
          IsNight
        </label>
        <label style={{ marginLeft: 25 }}>
          <input
            type="checkbox"
            checked={instructorLed}
            onChange={() => setInstructorLed(!instructorLed)}
          />{" "}
          InstructorLed
        </label>
       
        <div> <button className="navi">Add Hours</button></div>
        <br></br>
      </form>
      
      </div>
    </>
  );
}