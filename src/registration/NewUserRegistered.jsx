import { useState } from "react"

export default function NewUserRegistered(){

    const[firstName, setFirstName] = useState('')

    return(
        <>
            <p> enter your log hours </p>
            <p> your log history </p>
        </>
    )
}