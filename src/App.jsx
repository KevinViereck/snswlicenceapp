import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import Register from './registration/Register'
import HomePage from './HomePage';

function App() {
  return (
    <div class="App bg-gradient-to-t from-indigo-100 via-sky-600 to-blue-900 h-screen w-screen">
    <center>
      <h1 class="text-3xl">Welcome to the NSW Driving Licence Application </h1>
      </center>
      <br></br>
   
      <Routes>
        <Route path="/" element={< HomePage />} /> 
        <Route path="/register" element={< Register />} />

      </Routes>
    </div>
  );
}

export default App;
