import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import Register from './registration/Register'
import HomePage from './HomePage';

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Issue Licence</h1>
      <Routes>
        <Route path="/" element={< HomePage />} /> 
        <Route path="/register" element={< Register />} />

      </Routes>
    </div>
  );
}

export default App;
