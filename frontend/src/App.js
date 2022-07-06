import { Routes, Route } from "react-router";

// Components
import Registration from "./pages/registration";
import Login from "./pages/login";

// Styles
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Registration />} />
      </Routes>
    </div>
  );
}

export default App;
