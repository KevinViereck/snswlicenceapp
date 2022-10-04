import { useState } from "react";


export default function CreateEntry(){

   
    const[startTime, setStartTime] = useState('')
    const[endTime, setEndTime] = useState('')
    const[day, setDay] = useState('')
    const[night, setNight] = useState('')
    const[instructorLed, setInstructorLed] =useState('')



    async function PostEntry(){
    let config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',},
            body: JSON.stringify({ startTime, endTime, instructorLed }),
        }

        let response = await fetch(`http://localhost:8080/loghours/${id}`, config);
        let json = await response.json();
        alert("Logbook entry created");
    }

    return(
    <>
     <table>
            <tr>
              <td width="10">
                <label>Start Time</label>
                <input
                  className="create-entry"
                  type="text"
                  placeholder="start time"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>End Time</label>
                <input
                  className="create-entry"
                  type="text"
                  placeholder="end time"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                />
              </td>
              </tr>
              <tr>
              <td width="100">
                <label>Instructor Led</label>
                  <select value={instructorLed} onChange={e=>setInstructorLed(e.target.value)}>
                  <option value="">-- Please Select Category</option>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </td>
            </tr>
               <button className="submit" onClick={PostEntry}> Log Hours</button> 
          </table>
    </>
    );
}
