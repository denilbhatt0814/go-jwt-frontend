import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";

function App() {
  const [name, setName] = useState();

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:8585/api/user", {
        headers: { "Content-Type": "application/json" },
        credentials: "include", // to store cookies
      });

      const content = await response.json();
      setName(content.name);
    })();
  }, [name]);

  return (
    <div className="App">
      <Router>
        <Navbar name={name} setName={setName} />
        <main className="form-signin">
          <Routes>
            <Route path="/" exact element={<Home name={name} />} />
            <Route path="/login" element={<Login setName={setName} />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
