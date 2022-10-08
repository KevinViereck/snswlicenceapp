import { useState } from "react"
import { useParams } from "react-router-dom"


export default function NewUserRegistered(){

   

    const[firstName, setFirstName] = useState('')
    const {id} = useParams('')

    return(
        <>
            <p> enter your log hours </p>

            <p style={{margin:'0px 15px'}}>Logged in as {}</p>
            
            <p> your log history </p>
        </>
    )
}