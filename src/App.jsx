import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "styles/styles.css";
import Login from "pages/Login.jsx";
import Registro from "pages/Registro.jsx";
import AuthLayaout from "layouts/AuthLayaout";
import PrivateLayaout from "layouts/PrivateLayaout";
import Admin from "pages/admin/Index";
import PublicLayout from "layouts/PublicLayout";
import Index from "pages/Index";
import Clientes from "pages/admin/Clientes";
import Vehiculos from "pages/admin/Vehiculos";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateLayaout />}>
          <Route path="admin" element={<Admin />} />
          <Route path="vehiculos" element={<Vehiculos />} />
          <Route path="clientes" element={<Clientes />} />
        </Route>
        <Route element={<AuthLayaout />}>
          <Route path="login" element={<Login />} />
          <Route path="registro" element={<Registro />} />
        </Route>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Index />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;


