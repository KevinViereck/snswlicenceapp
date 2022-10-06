import { useState , useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import PracticeLogEntry from "./PracticeLogEntry";

export default function LogBook(){

   const[logbook, setLogBook] = useState()
   const[isLoading, setIsLoading] = useState(true)
   
    function getLogBook(){
        var login = localStorage.getItem("login")
        var loginObject = JSON.parse(login)
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+ loginObject.token)

        const config = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };       
        fetch(`http://localhost:8080/loghours`,config)
        .then(response => response.json())
        .then(json => {
          console.log(json)
          setLogBook(json)
          setIsLoading(false)
        })
    }

    useEffect(() => { 
      getLogBook();
    }, []);

// //     function calculateDayHours(){

// // enter logic, if day hours add to total, but if day and assisted 
// by Instructor add and multiply by 3

// //     }

// //     function calculateNightHours(){

// // enter logic, if day hours add to total, but if day and assisted 
// by Instructor add and multiply by 3

// //     }

if(isLoading) {
  return <div>Is Loading...</div>
}

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