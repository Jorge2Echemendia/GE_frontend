import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import hat from "../assets/imagenes/hat.svg";
import Alerta from "../components/Alerta";
import { Link, useNavigate} from "react-router-dom";
import clienteAxios from '../config/Axios';
import useAuth from "../hooks/useAuth";
import { useState } from "react";
const Autenticar = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alerta, setAlerta] = useState({});
  const navigate = useNavigate(); 
     const {setAuth}=useAuth();
   const handleSubmit = async(e)=>{
    e.preventDefault();

    if([email,password].includes("")){
      setAlerta({
        msg:'Todos los campos son obligatorios',
        success:false
      });
      return
    }
   try {
    const{data}=await clienteAxios.post('/usuario/login', {email,password});
    localStorage.setItem('token', data.token);
    setAuth(data);
    navigate('/usuario/home');
   } catch (error) {
    setAlerta({
      msg: error.response.data.msg,
      success: false
    })
   }


  }



  const { msg } = alerta;
  return (
    <>
      <div
        className="col-12 col-md-6 text-center d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div>
          <p className="parrafo text-white ">
            Comienze a Gestionar su Expediente
          </p>
          <p className=" parrafo1 ">Facil y seguro</p>
        </div>
      </div>
      <div
        className=" col-12 col-md-6 d-flex justify-content-center align-items-center "
        style={{ height: "100vh" }}
      >
        <div className="caja" style={{ width: "400px", height: "auto" }}>
          <Link
          to="/"
          >
          <div className="thumbnail mt-3">
            <img src={hat} style={{ display: "block", width: "100%" }} />
          </div></Link>
          <div className="mx-3 mt-4 d-flex justify-content-center align-items-center mensaje">
            {msg && <Alerta alerta={alerta} />}
          </div>
          <form className="px-4 py-4"
           onSubmit={handleSubmit}
           noValidate
          >
            <div className="mb-2 form-floating ">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Ingresa tu email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
              <label htmlFor="email" className="form-label">
                Email
              </label>
            </div>
            <div className="mb-2 form-floating">
              <input
                type="password"
                className="form-control rounded"
                id="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Ingresa tu contraseña"
                required
              />
              <label htmlFor="password" className="form-label">
                Contraseña
              </label>
            </div>
            
           <div className="px-10 py-auto d-flex justify-content-center align-items-center " style={{width:"100%"}}>
          <button
              type="submit"
              className="btn btn-primary mt-3 boton-primario"
              style={{ fontSize: '1rem', padding: '0.5rem 1rem', width:'150px'}}
            >
              Iniciar Sesión
            </button>
          </div>
          
          </form>
          
          <div className="text-center my-3 d-flex flex-column flex-sm-row justify-content-between px-4">
            <div className="d-inline-block">
              <Link
                to="/principal/olvide-mi-password"
                className="text-decoration-none text-dark fs-6 mb-1 md-2 d-inline linea"
              >
                Olvidé mi contraseña
              </Link>
            </div>
            <div className="d-inline-block">
              <Link
                to="/principal/registrarse"
                className="text-decoration-none text-dark fs-6 mb-1 ml-2 d-inline linea"
              >
                Registrarse
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Autenticar;
