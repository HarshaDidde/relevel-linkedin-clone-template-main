import React from "react";
import '../styles/app.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Sidebar from "./sidebar";
import Home from "../pages/home";
import Login from "../pages/login";

function App() {
  return (
      <Router>
        <Sidebar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='login' element= {<Login/>} />
        </Routes>
      </Router>
  );
}

export default App;