import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Register from "./registration/Register";
import HomePage from "./HomePage";
import Login from "./logbook/Login";
import LogBook from "./logbook/LogBook";
import Testing from "./testing";
import CreateEntry from "./logbook/CreateEntry";
import DeleteEntry from "./logbook/DeleteEntry";
import NewUserRegistered from "./registration/NewUserRegistered";
import { loginStorageKey } from "./web-helpers";
import LoginAsInCustomer from "./logbook/LoginAsCustomer";
import React from "react";
import nswlogo from "./img/nswlogo.png";
import PracticeLogEntry from "./logbook/PracticeLogEntry";

export const TokenContext = React.createContext();

function App() {
  const { roles, email } = JSON.parse(
    localStorage.getItem(loginStorageKey) ?? JSON.stringify({ roles: [] })
  );

  return (
    <div className="main-app">
      <br></br>

      <center>
        <div>
         
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/newuserregistered" element={<NewUserRegistered />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logbook" element={<LogBook />} />
            <Route path="loginAsCustomer" element={<LoginAsInCustomer />} />
            <Route path="/testing" element={<Testing />} />
            <Route path="/create" element={<CreateEntry />} />
            <Route path="delete/:id" element={<DeleteEntry />} />
          </Routes>
        </div>
      </center>
    </div>
  );
}

export default App;