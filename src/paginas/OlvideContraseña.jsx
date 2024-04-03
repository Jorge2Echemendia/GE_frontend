import { useState } from 'react';
import Alerta from '../components/Alerta';
import clienteAxios from '../config/Axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import hat from "../assets/imagenes/hat.svg";
import { Link } from 'react-router-dom';
const OlvidePassword = () => {
  const [email, setEmail] = useState('');
  const [alerta, setAlerta] = useState({});
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (email === '') {
      setAlerta({ msg: 'El email es obligatorio', success: false })
      return
    }
    setAlerta({});
    try {
      const { data } = await clienteAxios.post('/usuario/olvide-password', { email })
      setAlerta({ msg: data.msg, success: true })
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg
      })

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
            Recupera tu Cuenta
          </p>
          <p className=" parrafo1 ">No Pierdas tus Expedientes</p>
        </div>
      </div>
      <div
        className=" col-12 col-md-6 d-flex justify-content-center align-items-center "
        style={{ height: "100vh" }}
      >
        <div className="caja mt-3" style={{ width: "500px", height: "auto" }}>
          <Link
          to="/"
          >
          <div className="thumbnail mt-3">
            <img src={hat} style={{ display: "block", width: "100%" }} />
          </div>
          </Link>
          <div className="mx-3 d-flex justify-content-center align-items-center mensaje">
            {msg && <Alerta alerta={alerta} />} </div>
          <form
            onSubmit={handleSubmit}
            className="p-2 mt-2"
            noValidate>
            <div className="mb-2 form-floating ">
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Tu email"
                required
              />
              <label htmlFor="email" className="form-label">
                Email
              </label>
              
            </div>
 <div className="px-10 py-auto d-flex justify-content-center align-items-center " style={{ width: "100%" }}><button
            type="submit"
            className="btn btn-primary d-inline mt-3 boton-primario"
            style={{ fontSize: '1rem', padding: '0.5rem 1rem', width: '150px' }}

          >
            Enviar Instruciones
          </button></div>

          </form>
         
          <div className="text-center my-2 px-4 py-2 d-flex flex-column flex-sm-row justify-content-between">
            <div className="mb-2 mb-sm-0">
              <span className="text-dark">¿Ya tienes una cuenta?</span>
              <Link
                to="/principal/autenticar"
                className="text-decoration-none text-dark fs-6 mx-2 md-2 d-inline linea"
              >
                Iniciar Sesión
              </Link>
            </div>
            <div className="d-inline-block">
              <Link to="/principal/registrarse" className="text-decoration-none text-dark fs-6 mb-1 ml-2 d-inline linea">Registrarse</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OlvidePassword;
