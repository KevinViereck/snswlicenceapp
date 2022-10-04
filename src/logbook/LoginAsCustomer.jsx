import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import nswlogo from "../img/nswlogo.png";
import { login } from "../web-helpers";

export default function LoginAsInCustomer() {
  const [logentries, setLogentries] = useState("");
  const [startTime, setStartTime] = useState("");
  const [finish, setFinish] = useState("");
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

      <p> Log Book Details for USER </p>

      <div className="logbook-box-user">

      <div class="flex items-end space-x-36">
      <div class="item w-46 h-10">
        <label for="starttime">Start Time</label>
          <input type="datetime-local" id="starttime" /></div>
          
          <div class="item w-46 h-10">
        <label for="endtime">End Time</label>
          <input type="datetime-local" id="endtime" /></div>
          
         
          <div class="item w-46 h-10">Add Hours</div>
          <div class="item w-46 h-10">Delete Hours</div>

          <div class="item w-46 h-10">
          <label for="remaining">Remaining Hours</label>
          <input type="text" id="remaining" /></div>
        

        <div class="item w-46 h-10">
          <label for="remaining">Certified Instructor </label>
          <input type="checkbox" id="remaining" /></div>
      </div>
      </div>
    </>
  );
}
