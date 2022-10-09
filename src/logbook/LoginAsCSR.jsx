import { useState } from "react"

export default function LoginInAsCSR(){

    const[licenceId, setLicenceId] = useState('')
    const[dateRegistered, setDateRegistered] = useState('')
    const[remainingHours, setRemainingHours] = useState('')
    const[email, setEmail] = useState('')
    const[userId, setUserId] = useState('')

    const server = 'http://localhost:8080'
    
    function getLicence(){
        let config = {
            method:'GET',
            headers: {'Authorization':`Bearer ${localStorage.getItem('token').replaceAll('"','')}`},
        }
        return fetch(`${server}/licences`,config)
                    .then(r=>r.json()) 
    }

    return(
        <>
            <div>
                <p> List of Customers </p>
            </div>
            <div>
                <p> link to each customer where their details are only displayed </p>
            </div>
            <div>
                <p> Check the condition whether they are have completed their 120hours and issue licence </p>
            </div>
            <div>
                <p> Issue Licence </p>
            </div>
        </>
    )
}
