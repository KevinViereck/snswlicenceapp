import { useState } from "react";
import { Link } from "react-router-dom";

export default function LogBook(){

    const[dateIssued, setDateIssued] = useState('')
    const[practiceLogEntries, setPracticeLogEntries] = useState([''])
    const[userId,setUserId] = useState('')

    const {_id} = useParams()

    async function getLogBook(){

        const config = {
            method: "POST",
            headers: {'Content-type':'application/json'},
            body: JSON.stringify ({ dateIssued,practiceLogEntries})

        }

        const response = await fetch(`http://localhost:8080/logbook`,config)
        const result = response.json()

        alert()
    }



    return(
        <>
            <h1> Issue Learner Licence </h1>
            <p> You currently do not have a licence </p>
            <p> Need to register  </p>

        </>
    )
}