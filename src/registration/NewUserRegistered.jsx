import { useState } from "react"
import { useParams } from "react-router-dom"

export default function NewUserRegistered(){

    const[firstName, setFirstName] = useState('')
    const {id} = useParams('')

    return(
        <>
            <p> enter your log hours </p>
            
            <p> your log history </p>
        </>
    )
}