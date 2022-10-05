import { useState , useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import PracticeLogEntry from "./PracticeLogEntry";

export default function LogBook(){

   const[logbook, setLogBook] = useState()
   
    async function getLogBook(){
        var login = localStorage.getItem("login")
        var loginObject = JSON.parse(login)
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+ loginObject.token)

        const config = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };       
        const response = await fetch(`http://localhost:8080/logbook/email`,config)
        const result =  await response.json()
        setLogBook(result)
    }

    useEffect(() => { 
      getLogBook();
    }, []);

    
    return(
        <>
           {
             logbook && <>
             <label> Date Issued: </label>
             <div> {logbook.dateIssued }</div>
             <PracticeLogEntry logbook={logbook} />
             </>
           } 
        </>
    )
}