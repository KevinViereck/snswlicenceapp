import { useParams } from "react-router-dom"
import { useState } from "react"


export default function UpdateEntry(){
    
const[practiceLogEntries, setPracticeLogEntries] = useState([''])
const[startTime, setStartTime] = useState()
const[endTime, setEndTime] = useState()
const[instructorLed, setInstructorLed] = useState()


    fetch(`http://localhost:8080/logbook/${practiceLogEntries._id}`, {
        method:"PUT",
        headers:{'Content-type':'application/json'},
        body:JSON.stringify({_id:practiceLogEntries._id, startTime,endTime,instructorLed})
    })
    .then(r=>r.json())
    .then(j=> {
        setPracticeLogEntries(practiceLogEntries.map(p=>p._id == practiceLogEntries.id ? j : p));
    
    })
    .catch(e => alert(e.message));

return(
<div>
    <div>
        <h1>Update Log Entries</h1>
        <label>Start Time</label>
        <input value={startTime} onChange={e=> setStartTime} />
    </div>
     <div>
            <label>End Time</label>
        <input value={endTime} onChange={e=> setEndTime} />
    </div>
    <div>
            <label>Instructor Led</label>
        <input value={instructorLed} onChange={e=> setInstructorLed} />
    </div>
</div>


    );
}