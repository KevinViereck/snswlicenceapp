import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import nswlogo from "../img/nswlogo.png";
import { login } from "../web-helpers";
import CreateEntry  from "./CreateEntry";
import DeleteEntry  from "./DeleteEntry";


export default function LoginAsInCustomer() {
  const [logentries, setLogentries] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [day, setDay] = useState("");
  const [night, setNight] = useState("");
  const [instructorLed, setInstructorLed] = useState("");

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

      <div className="logbook-box-user">

      <div className="flex items-end space-x-36">
      <div className="item w-46 h-10">
        <label htmlFor="starttime">Start Time</label>
          <input type="datetime-local" id="starttime" 
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          />
          </div>
          
          <div className="item w-46 h-10">
        <label htmlFor="endtime">End Time</label>
          <input type="datetime-local" id="endtime" 
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          /></div>
          
         
          <button className="navi" onClick={CreateEntry}>Add Hours</button>
          <button className="navi" onClick={DeleteEntry}>Delete Hours</button>

          <div className="item w-46 h-10">
          <label htmlFor="remaining">Remaining Hours</label>
          <input type="text" id="remaining" /></div>
        

        <div className="item w-46 h-10">
          <label htmlFor="remaining">Certified Instructor </label>
          <input type="checkbox" id="remaining" /></div>
      </div>
      </div>
    </>
  );
}
