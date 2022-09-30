import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import Register from './registration/Register'
import HomePage from './HomePage';
import Login from './logbook/Login';
import LogBook from './logbook/LogBook';
import Testing from './testing';
import CreateEntry from './logbook/CreateEntry';




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
        <Route path="/testing" element={<Testing />} />
        <Route path="/create" element={<CreateEntry />} />

      </Routes>
      </center>
    </div>
  );
}

export default App;
