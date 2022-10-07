import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import nswlogo from "../img/nswlogo.png";
import { login } from "../web-helpers";
import CreateEntry  from "./CreateEntry";
import DeleteEntry  from "./DeleteEntry";


export default function LoginAsInCustomer() {
  const [licence,setLicence] = useState()
  const [logentries, setLogentries] = useState([]);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [isNight, setIsNight] = useState("");
  const [instructorLed, setInstructorLed] = useState("");
  const{id} = useParams()



useEffect(()=>{

  (async()=>{
      await getLicenceAsync()
      await getLogHoursAsync()
  })()
  
},[])

async function getLogHoursAsync(){
    var login = localStorage.getItem("login")
    var loginObject = JSON.parse(login)
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer "+ loginObject.token)

    const config = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };       
    let response = await fetch(`http://localhost:8080/loghours`,config)
    let json = await response.json()
    debugger
    console.log(json)
    setLogentries(json)
}

async function getLicenceAsync(){
  var login = localStorage.getItem("login")
  var loginObject = JSON.parse(login)
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer "+ loginObject.token)

  const config = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };       

  let response = await fetch(`http://localhost:8080/logbook`,config)
  let json = await  response.json()
  debugger
    console.log(json)
    setLicence(json)
}


async function postEntry(){
  let config = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',},
          body: JSON.stringify({ startTime, endTime, isNight, instructorLed }),
      }

      let response = await fetch(`http://localhost:8080/loghours`, config);
      let json = await response.json();
      await getLogHoursAsync()
      alert("Logbook entry created");
  }


  return (
    <>
      <div className="content-center">
        <section>
          <img
            className="nsw-logo"
            src={nswlogo}
            width={200}
            height={200}
            alt="NSW Government"
          />
        </section>
        <br></br>

        <div className="flex items-center justify-center">
          <div
            className="inline-flex shadow-md hover:shadow-lg focus:shadow-lg"
            role="group"
          >
            <div className="navi">
              {" "}
              <Link to="/"> Home </Link>{" "}
            </div>
            <div className="navi">
              {" "}
              <Link to="/register"> Register </Link>{" "}
            </div>

            <div className="navi">
              {" "}
              <Link to="/login"> Login </Link>{" "}
            </div>
          </div>
        </div>
      </div>
      <br></br>

      <p> Log Book Details htmlFor USER </p>
                    <div>
                        <label> Start: </label>
                        <input type="datetime-local" value={startTime} onChange={e=>setStartTime(e.target.value)}/>
                    </div>
                    <div>
                        <label> End: </label>
                        <input type="datetime-local" value={endTime} onChange={e=>setEndTime(e.target.value)}/>
                    </div>
                    <div>
                        <label style={{marginLeft:25}}>
                        <input type="checkbox" checked={isNight} onChange={()=>setIsNight(!isNight)}/> IsNight 
                    </label>
                    </div>
                    <div>
                        <label style={{marginLeft:25}}>
                        <input type="checkbox" checked={instructorLed} onChange={()=>setInstructorLed(!instructorLed)}/> InstructorLed 
                    </label>
                    </div>
          <button className="navi" onClick={postEntry}>Add Hours</button>
          <button className="navi" onClick={()=>{}}>Delete Hours</button>

      <div>
        {
          logentries.map((le) => <div key={le._id}>{JSON.stringify(le)}</div>)
        }
      </div>    
         
      
    
    </>
  );
}
