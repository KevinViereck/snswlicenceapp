import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


export default function CreateEntry(){

    const[startTime,setStartTime] = useState('')
    const[endTime,setEndTime] = useState('')
    const[isNight,seIsNight] = useState('')
    const[instructorLed, setInstructorLed] = useState('')
    const {id} = useParams('')
    const navigate = useNavigate("")
    

    const addLogEntry = () => {
       
      let entry = {
          startTime:Date.getLongFromDateTimeInput(startTime),
          endTime:Date.getLongFromDateTimeInput(endTime),
          isNight: isNight,
          instructorLed:instructorLed
      }; 
  
  }

 ; 

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
        <div>
            
        </div>
  
       
    </>
    );
}
