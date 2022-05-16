import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "styles/styles.css";
import Login from "pages/auth/Login.jsx";
import Registro from "pages/auth/Registro";
import AuthLayaout from "layouts/AuthLayaout";
import PrivateLayaout from "layouts/PrivateLayaout";
import Admin from "pages/admin/Index";
import PublicLayout from "layouts/PublicLayout";
import Index from "pages/auth/Index";
import Clientes from "pages/admin/Clientes";
import Vehiculos from "pages/admin/Vehiculos";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateLayaout />}>
          <Route path="admin" element={<Admin />} />
          <Route path="admin/vehiculos" element={<Vehiculos />} />
          <Route path="admin/clientes" element={<Clientes />} />
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


