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

      <div className="logbook-box grid overflow-hidden grid-cols-5 grid-rows-6 gap-2">
        <div className="box">Start time</div>
        <div className="box">End Time</div>
        <div className="box">Remaining required hours</div>
        <div className="box">Add Hours</div>
        <div className="box">Delete Hours</div>
      </div>
    </>
  );
}
