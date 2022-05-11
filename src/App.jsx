import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "styles/styles.css";
import Login from "pages/Login.jsx";
import Registro from "pages/Registro.jsx";
import Admin from "pages/Admin.jsx";
import Index from "pages/Index.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/" element={<Index />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
