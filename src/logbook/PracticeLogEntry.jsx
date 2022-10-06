import { useEffect, useState } from "react"

export default function PracticeLogEntry({logbook}){

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

                    {
                        logbook.map((le) => (
                            <tr> 
                                <td> {new Date(le.startTime).toLocaleString()} </td>
                                <td> {new Date(le.endTime).toLocaleString()} </td>
                                <td> {(le.endTime - le.startTime) / 1000 / 60 / 60} </td>
                            </tr>
                        ))

                    }
                
                </tbody>
            </table>
        </>
    )
}