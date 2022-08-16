import "./assets/styles/main.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";


function App() {
  return (
    <div className="app">
      <ToastContainer />
      <Routes>
        <Route path="/" exact element={<Login />} />

        <Route path="/home" element={<Home />} />
   
      </Routes>
    </div>
  );
}

export default App;
