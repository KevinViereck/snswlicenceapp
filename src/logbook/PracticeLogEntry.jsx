import { useState } from "react"

export default function PracticeLogEntry(){

    const[practiceLogEntries, setPracticeLogEntries] = useState([''])
    const[startTime, setStartTime] = useState()
    const[endTime, setEndTime] = useState()
    const[instructorLed, setInstructorLed] = useState()

    return(
        <>
            <h3> Log Hours </h3>
        </>
    )
}