import { useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";


export default function CreateEntry(){

    const[startTime,setStartTime] = useState('')
    const[endTime,setEndTime] = useState('')
    const[isNight,seIsNight] = useState('')
    const[instructorLed, setInstructorLed] = useState('')
    const {id} = useParams('')
    const [logentries, setLogentries] = useState([]);
    const navigate = useNavigate("")

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
    return(
    <>
        <div>

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
            
        </div>
  
       
    </>
    );
}
