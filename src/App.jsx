import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import Register from './registration/Register'
import HomePage from './HomePage';
import Login from './logbook/Login';
import LogBook from './logbook/LogBook';
<<<<<<< HEAD
import CreateEntry from './logbook/CreateEntry';
=======
import Testing from './testing';



>>>>>>> 78e0be2d0dbe80aa014facfa31bef14f430c91bf

function App() {
  return (
    
    <div className="main-app">
    <br></br>
    <center>
      {/* <h1 className="font-light text-2xl ">Welcome to the NSW Driving Licence Application Page </h1> */}
     <br />

      <Routes>
        <Route path="/" element={< HomePage />} /> 
        <Route path="/register" element={< Register />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/logbook" element={<LogBook />} />
<<<<<<< HEAD
        <Route path="/create" element={<CreateEntry />} />
=======
        <Route path="/testing" element={<Testing />} />
>>>>>>> 78e0be2d0dbe80aa014facfa31bef14f430c91bf

      </Routes>
      </center>
    </div>
  );
}

export default App;
