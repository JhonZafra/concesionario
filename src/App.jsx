import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "styles/styles.css";
import Login from "pages/Login.jsx";
import Registro from "pages/Registro.jsx";
import AuthLayaout from "layouts/AuthLayaout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<AuthLayaout />}>
          <Route path={"login"} element={<Login />}></Route>
          <Route path={"registro"} element={<Registro />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
