import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import Register from './registration/Register'
import HomePage from './HomePage';
import Login from './logbook/Login';
import LogBook from './logbook/LogBook';

function App() {
  return (
    
    <div className="App bg-gradient-to-t from-indigo-100 via-sky-600 to-blue-900 h-screen w-screen">
    <br></br>
    <center>
      {/* <h1 className="font-light text-2xl ">Welcome to the NSW Driving Licence Application Page </h1> */}
     <br />

      <Routes>
        <Route path="/" element={< HomePage />} /> 
        <Route path="/register" element={< Register />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/logbook" element={<LogBook />} />

      </Routes>
      </center>
    </div>
  );
}

export default App;
