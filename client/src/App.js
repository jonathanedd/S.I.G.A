import "./App.css";

//Components
import Home from "./components/Home/Home";
import AdminInterface from "./components/Admin/AdminInterface";
import Login from "./components/Home/Login";

//Roter Dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admininterface" element={<AdminInterface />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
