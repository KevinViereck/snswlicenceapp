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
              <button
                className="navi"
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
      <br></br>
      <div className="register-main ">
        {" "}
        Log Book Details for user: {token.email}{" "}
        <tr>
                    {" "}
                    Total Hours:{" "}
                    {calculateTotalHours(getTotalMilliseconds(logentries))}
                  </tr>
      </div>
      
      <br></br>
      <button className="navi" onClick={() => navigate("/create")}>
        Add Hours
      </button>

      <div className="logbook-box">
        <br></br>
        <div className="flex flex-wrap text-left bg-gray-50 text-sm">
          <tbody className="w-auto px-4">
            {logentries.map((entry) => {
              return (
                <div key={entry._id}>
                  <div className="">
                    Licence Id: {entry.licenceId}
                    <div className="col-span-2">
                      Start Time: {new Date(entry.startTime).toLocaleString()}
                      <div className="col-span-2">
                        {" "}
                        <div className="col-span-2">
                          End Time:{new Date(entry.endTime).toLocaleString()}
                        </div>
                      </div>
                    </div>
                  </div>
                  <tr className="col-span-2 ">
                    Night Time Hours? {entry.isNight ? "True" : "False"}
                  </tr>
                  <td className="col-span-2">
                    Instructor Led Hours?{" "}
                    {entry.instructorLed ? "True" : "False"}
                  </td>
               
                  <button
                    className="navi"
                    onClick={() => deleteEntry(entry._id)}
                  >
                    Delete
                  </button>
                  <br></br>
                  &nbsp;
                </div>
              );
            })}
          </tbody>
        </div>
      </div>
    </>
  );
}
