import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import hat from "../assets/imagenes/hat.svg";
import { Link } from "react-router-dom";
import Alerta from "../components/Alerta";
import clienteAxios from "../config/Axios";
import Spinner from "../components/Spinner";
import useValidation from "../hooks/useValidation";
const Registrarse = () => {
 const{errorNombre,
  errorEmail,
  errorPassword,
  errorTelefono,
  errorRepetirPassword,
  errorTipoDeUsuario,
  validoNombre,validoEmail,
  validoTelefono,
  validoPassword,
  validoRepetirPassword,
  validoTipoDeUsuario,
  handleValidarNombre,
  handleValidarEmail,
  handleValidarTelefono,handleValidarPassword,
  handleValidarRepetirPassword,
  handleValidarTipoDeUsuario,
  nombre,setNombre,
  email,setEmail,
  telefono,setTelefono,
  password,setPassword,
  repetirPassword,setRepetirPassword,
  tipo_usuario,setTipoDeUsuario,setValidoNombre,
  setValidoEmail,setValidoPassword,
  setValidoRepetirPassword,setValidoTelefono,setValidoTipoDeUsuario}=useValidation();

  const [alerta, setAlerta] = useState({});
  const [loading, setLoading] = useState(false);

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Espera a que se completen todas las validaciones

    await Promise.all([
      handleValidarNombre(nombre),
      handleValidarEmail(email),
      handleValidarTelefono(telefono),
      handleValidarPassword(),
      handleValidarRepetirPassword(repetirPassword),
      handleValidarTipoDeUsuario(tipo_usuario),
    ]);
    setAlerta({});
    // Conectando con la Api
    try {
      setLoading(true);
      const respuesta = await clienteAxios.post('/usuario', {
        nombre,
        email,
        telefono,
        password,
        tipo_usuario,
      });
      setAlerta({
        msg: respuesta.data.msg,
        success: true
      });
      setNombre("");
      setEmail("");
      setTelefono("");
      setPassword("");
      setRepetirPassword("");
      setTipoDeUsuario("");
      setValidoNombre("");
      setValidoEmail("");
      setValidoPassword("");
      setValidoTelefono("");
      setValidoRepetirPassword("");
      setValidoTipoDeUsuario("");
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        success: false
      })
    } finally {
      // Asegúrate de que el spinner se muestre durante 1 segundo
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }

  }

  const { msg } = alerta;

  return (
    <>
      <div
        className="col-12 col-md-6 text-center d-flex justify-content-center align-items-center"
        style={{ height: "100%" }}
      >
        <div>
          <p className="parrafo text-white pt-5 ">
            Crea una Cuenta para Gestionar los Expedientes
          </p>
          <p className=" parrafo1 ">Facil y seguro</p>
        </div>
      </div>
      <div
        className=" col-12 col-md-6 d-flex justify-content-center align-items-center  "
        style={{ height: "100vh" }}
      >
        <div className="caja mt-3" style={{ width: "auto", height: "auto" }}>
          <Link
          to="/"
          >
          <div className="thumbnail mt-3">
            <img src={hat} style={{ display: "block", width: "100%" }} />
          </div>
          </Link>
          <div className="mx-3 d-flex justify-content-center align-items-center mensaje">
            {loading ? <Spinner /> : msg && <Alerta alerta={alerta} />} </div>

          <form className="px-4 mt-3 row"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="mb-2 form-floating col-md-6 ">

              <input type="text" className={`form-control ${validoNombre}`} id="nombre" placeholder="Ingresa tu nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
              <label htmlFor="nombre" className="form-label">Nombre</label>
              {errorNombre && <div className="invalido">{errorNombre}</div>}
            </div>

            <div className="mb-2 form-floating col-md-6">
              <input type="email" className={`form-control ${validoEmail}`} id="email" placeholder="Ingresa tu email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <label htmlFor="email" className="form-label">Email</label>
              {errorEmail && <div className="invalido">{errorEmail}</div>}
            </div>

            <div className="mb-2 form-floating col-md-6">
              <input type="tel" className={`form-control ${validoTelefono}`} id="telefono" placeholder="Ingresa tu telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} required />
              <label htmlFor="telefono" className="form-label">Telefono</label>
              {errorTelefono && <div className="invalido">{errorTelefono}</div>}
            </div>

            <div className="mb-2 form-floating col-md-6">
              <input type="password" className={`form-control ${validoPassword}`} id="password" placeholder="Ingresa tu password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              <label htmlFor="password" className="form-label">Contraseña</label>
              {errorPassword && <div className="invalido">{errorPassword}</div>}
            </div>

            <div className="mb-2 form-floating col-md-6 ">
              <input type="password" className={`form-control ${validoRepetirPassword}`} id="repeatpassword" placeholder="Ingresa tu password" value={repetirPassword} onChange={(e) => setRepetirPassword(e.target.value)} required />
              <label htmlFor="repeatpassword" className="form-label">Repetir Contraseña</label>
              {errorRepetirPassword && <div className="invalido">{errorRepetirPassword}</div>}
            </div>

            <div className="mb-2 form-floating col-md-6">
              <select className={`form-select ${validoTipoDeUsuario}`} id="tipo_de_usuario" value={tipo_usuario} onChange={(e) => setTipoDeUsuario(e.target.value)} required   >
                <option value="">...</option>
                <option value="Tutor">Tutor</option>
                <option value="Profesor">Profesor</option>
                <option value="Secretaria">Secretaria</option>
              </select>
              <label htmlFor="tipo_de_usuario" className="form-label">Tipo de Usuario</label>
              {errorTipoDeUsuario && <div className="invalido">{errorTipoDeUsuario}</div>}
            </div>
            <div className="px-10 py-auto d-flex justify-content-center align-items-center " style={{width:"100%"}}>
            <button
              type="submit"
              className="btn btn-primary  mt-3 boton-primario"
              style={{ fontSize: '1rem', padding: '0.5rem 1rem', width:'150px'}}
            >
              Registrarse
            </button>
          </div>
          </form>
         
          <div className="text-center my-2 px-4 py-2">
            <span className="text-dark">¿Ya tienes una cuenta?</span>
            <div className="d-inline-block"><Link
              to="/principal/autenticar"
              className="text-decoration-none text-dark fs-6 mx-2 md-2 d-block d-sm-inline linea"
            >
              {" "}
              Iniciar Sesión
            </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registrarse;
