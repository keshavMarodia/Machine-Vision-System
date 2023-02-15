import "./App.css";
import Login from "./components/Login/Login";
import ProcessingPage from "./components/ProcessingPage/ProcessingPage";
import SignUp from "./components/Signup/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/process" element={<ProcessingPage />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
