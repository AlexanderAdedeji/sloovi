import { useState } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import AddTask from "./components/AddTask";
import TaskHeader from "./components/TaskHeader";
import Tasks from "./components/TasksList";
import EditTask from "./components/EditTask";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {

  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <h3 className="text-primary">Hello world</h3>

      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
