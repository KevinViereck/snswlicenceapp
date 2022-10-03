import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import nswlogo from "../img/nswlogo.png";
import { login } from "../web-helpers";


export default function LoginAsInCustomer(){

    const[logentries, setLogentries] = useState('')
    const[startTime,setStartTime] = useState('')
    const[finish, setFinish] = useState('')
    const[day, setDay] = useState('')
    const[night, setNight] = useState('')
    const[instructorLed, setInstructorLed] = useState('')

    return(
        <>
            <div>
                <p> Log Book Details </p>
            </div>
            <form>
                <fieldset>
                    <label> Start Time </label>
                    <input type="" value={startTime} onChange={(e) => setStartTime(e.target.value)}/>
                    <div>

                    </div>
                </fieldset>
                <fieldset>
                    <p> Remaining Hours </p>
                    <p> calculate the hours display those hours</p>
                </fieldset>
                <fieldset>
                    <p> Logged as Customer name to be displayed</p>
                </fieldset>
                <button> Add entries </button>
                <button> Delete entries </button>
            </form>
            
        </>
    )
}