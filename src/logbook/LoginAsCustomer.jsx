import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { calculateTotalHours, getTotalMilliseconds } from "../helpers";
import nswlogo from "../img/nswlogo.png";
import CreateEntry from "./CreateEntry";
import { getLogin, logout } from "../web-helpers";

export default function LoginAsInCustomer() {
  const [logentries, setLogentries] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const token = getLogin();

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

  function deleteEntry(id) {
    const login = localStorage.getItem("login");
    const loginObject = JSON.parse(login);
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + loginObject.token);
    const config = {
      method: "DELETE",
      headers: myHeaders,
      redirect: "follow",
    };
    fetch(`http://localhost:8080/loghours/${id}`, config)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Unable to delete entry");
        }
      })
      .then(() => {
        setLogentries(logentries.filter((entry) => entry._id !== id));
      });
  }

  useEffect(() => {
    getLogHoursAsync();
  }, []);

  // function handleSubmit() {
  //   return (
  //     <>
  //       <Link to="/create"> {<CreateEntry />} </Link>
  //     </>
  //   );
  // }

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

            {token ? (
              <button className="navi"
                onClick={() => {
                  logout();
                  navigate("/");
                }}
              >
                Logout
              </button>
            ) : (
              <>
                <div className="navi">
                  <Link to="/register"> Register </Link>
                </div>
                <div className="navi">
                  <Link to="/login"> Login </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <br></br>

      <p> {calculateTotalHours(getTotalMilliseconds(logentries))}</p>
      <p> Log Book Details for {token.email} </p>

      <button className="navi" onClick={() => navigate("/create")}>
        Add Hours
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
                  <td>{new Date(entry.startTime).toLocaleString()}</td>
                  <td>{new Date(entry.endTime).toLocaleString()}</td>
                  <td>{entry.isNight ? "True" : "False"}</td>
                  <td>{entry.instructorLed ? "True" : "False"}</td>
                  <td>
                    <button onClick={() => deleteEntry(entry._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}