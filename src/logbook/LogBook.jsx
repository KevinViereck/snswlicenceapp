import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import PracticeLogEntry from "./PracticeLogEntry";

export default function LogBook(){

    const[dateIssued, setDateIssued] = useState('')
    const[userId,setUserId] = useState('')

    async function getLogBook(){

        const config = {
            method: "POST",
            headers: {'Content-type':'application/json'},
            body: JSON.stringify ({ dateIssued,userId})

        }

        const response = await fetch(`http://localhost:8080/logbook`,config)
        const result = response.json()

        alert()
    }



    return(
        <>
            
            <label> Date Issued: </label>
            <input type="date" value={dateIssued}/>
            <PracticeLogEntry />

        </>
    )
}