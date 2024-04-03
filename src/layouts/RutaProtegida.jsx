import { Outlet,Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Header from "../components/Header";
import Footer from "../components/Footer";
const RutaProtegida = () => {
const{auth,cargando}= useAuth();


  if(cargando) return 'cargando...';
 
  return (
    <div>
      <>
        <Header/>
       {auth?.id_usuario ? <Outlet/>:<Navigate to="/principal/autenticar"/>}
       <Footer/>
      </>
    </div>
  );
};

export default RutaProtegida;
