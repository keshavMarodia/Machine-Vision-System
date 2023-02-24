import "./App.css";
import Login from "./components/Login/Login";
import ProcessingPage from "./components/ProcessingPage/ProcessingPage";
import SignUp from "./components/Signup/SignUp";
import Wirelocking from "./components/ProcessingPage/Landing Pages/wirelocking";
import Torquing from "./components/ProcessingPage/Landing Pages/torquing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/process" element={<ProcessingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/torquing" element={<Torquing />} />
          <Route path="/wirelocking" element={<Wirelocking/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
