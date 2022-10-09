import { useState } from "react"
import { useParams } from "react-router-dom"


export default function NewUserRegistered(){

   let token= JSON.parse(localStorage.getItem('email'))

    const[firstName, setFirstName] = useState('')
    const {id} = useParams('')

    return(
        <>
            <p> enter your log hours </p>

            <p style={{margin:'0px 15px'}}>Logged in as {token}</p>
            
            <p> your log history </p>
        </>
    )
}