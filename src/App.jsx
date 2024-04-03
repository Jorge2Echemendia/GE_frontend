import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstLayout from "../src/layouts/FirstLayout";
import AuthLayout from "../src/layouts/AuthLayout";
import Autenticar from "./paginas/Autenticar";
import Registrarse from "./paginas/Registrarse";
import ConfirmarCuenta from "./paginas/ConfirmarCuenta";
import OlvidePassword from "./paginas/OlvideContraseña";
import NuevoPassword from "./paginas/NuevoPassword";
import { AuthProvider } from "./context/AuthProvider";
import RutaProtegida from "./layouts/RutaProtegida";
import Expediente from "./paginas/Expedientes";
import Solicitudes from "./paginas/Solicitudes";
import Boletas from "./paginas/Boletas";
import Home from "./paginas/Home";
import Bandeja from "./paginas/Bandeja";
import { ValidationProvider } from "./context/ValidationProvider";
import { ExpedienteProvider } from "./context/ExpedienteProvider";
import { SolicitudProvider } from "./context/SolicitudProvider";
import { BoletaProvider } from "./context/BoletaProvider";
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ValidationProvider>
        <SolicitudProvider>
           <ExpedienteProvider>
              <BoletaProvider>
                <Routes>
                  <Route path="/" element={<FirstLayout />} />
                  <Route path="/principal/" element={<AuthLayout />}>
                    <Route path="autenticar" element={<Autenticar />} />
                    <Route path="registrarse" element={<Registrarse />} />
                    <Route path="olvide-mi-password" element={<OlvidePassword />} />
                    <Route
                      path="olvide-mi-password/:token"
                      element={<NuevoPassword />}
                    ></Route>
                    <Route path="confirmar/:token" element={<ConfirmarCuenta />} />
                  </Route>

                  <Route path="/usuario" element={<RutaProtegida />}>
                    <Route path="home/" element={<Home />} />
                    <Route path="expedientes" element={<Expediente />} />
                    <Route path="solicitudes-profesor" element={<Solicitudes />} />
                    <Route path="solicitudes-tutor" element={<Solicitudes />} />
                    <Route path="boletas" element={<Boletas />} />
                    <Route path="inbox" element={<Bandeja />} />
                  </Route>
                </Routes>
              </BoletaProvider>
             </ExpedienteProvider>
             </SolicitudProvider>
        </ValidationProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
