import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Dashboard from "./pages/logged/dashboard";
import LoginScreen from "./pages/loginScreen";
import PrivateRoute from "./components/privateroute";

function App() {
  return (
    <BrowserRouter>
          <h1 className="text-6xl font-mono font-bold text-black bg-white bg-opacity-20 p-4 top-0">
          Telaria post
        </h1>
      <Routes>
        <Route index element={<LoginScreen />}/>
        <Route element={<PrivateRoute/>}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

const isAllowed = localStorage.getItem("token"); 
