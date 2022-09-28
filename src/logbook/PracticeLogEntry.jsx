import { useState } from "react"

export default function PracticeLogEntry(){

    const[practiceLogEntries, setPracticeLogEntries] = useState([''])
    const[startTime, setStartTime] = useState()
    const[endTime, setEndTime] = useState()
    const[instructorLed, setInstructorLed] = useState()

    return(
        <>
            <button> Log Hours </button>
            <table>
                <thead>
                    <tr>
                        <th> Start Time:</th>
                        <th> End Time: </th>
                        <th> Total Hours </th>
                    </tr>
                </thead>
                <tbody>
                    <tr> 
                    {
                        practiceLogEntries.map( (le) => <td> {le.startTime}</td>)
                    }
                    </tr>
                </tbody>
            </table>
        </>
    )
}