import './App.css';
import {Routes, Route, Link} from 'react-dom'
import Register from './registration/home'

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Issue Licence</h1>
      <Routes>
        <Route path="/home" element={< Register />} />

      </Routes>
    </div>
  );
}

export default App;
