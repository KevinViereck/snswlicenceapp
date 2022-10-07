import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


export default function CreateEntry(){
    const {id} = useParams('')
    const navigate = useNavigate("")
    

    const addLogEntry = () => {
       
      let entry = {
          startTime:Date.getLongFromDateTimeInput(startTime),
          endTime:Date.getLongFromDateTimeInput(endTime),
          isNight: isNight,
          instructor:instructor
      }; 
  
  }

  const LogEntry = (props)=>{
    let e = props.entry; 
    return (
        <div className="tile">
            <label>StartTime: {new Date(e.startTime).toLocalString()}</label><br />
            <label>EndTime: {new Date(e.endTime).toLocalString()}</label><br />           
            <label>Hours: {e.duration.hours} Minutes: {e.duration.minutes}</label><br />
            <label>Instructor: {e.instructor ? 'Yes':'No'}</label><br />
            {e.instructor && 
                <div>
                    <label>Instructor Bonus: Hours: {e.bonus.hours} Minutes: {e.bonus.minutes}</label><br />
                    <label>Hours: {e.total.hours} Minutes: {e.total.minutes}</label><br />
                </div>
            }
        </div>
    ); 
}
    async function PostEntry(){
    let config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',},
            body: JSON.stringify({ startTime, endTime, isNight, instructorLed }),
        }

        let response = await fetch(`http://localhost:8080/loghours/${id}`, config);
        let json = await response.json();
        alert("Logbook entry created");
        navigate ("/loginAsCustomer")
    }

    return(
    <>
  
  
       
    </>
    );
}
