import  { useState, useEffect } from "react"; // Asegúrate de importar useEffect
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import hat from "../assets/imagenes/hat.svg";
import { Link, useParams } from "react-router-dom";
import clienteAxios from "../config/Axios";
import Alerta from "../components/Alerta";

const ConfirmarCuenta = () => {
  const [cuentaConfirmada, setCuentaConfirmada] = useState(false);
  const [alerta, setAlerta] = useState({});
  const params = useParams();
  const { token } = params;
 
  useEffect(() => {
    const confirmarCuenta = async () => {
      try {
        const { data } = await clienteAxios(`/usuario/confirmar/${token}`);
        setAlerta({
          msg: data.msg,
          success: true,
        });
        setCuentaConfirmada(true);
      } catch (error) {
        console.log(error);
        setAlerta({
          msg: error.response.data.msg,
          success: false,
        });
      }
    };
    confirmarCuenta();
  }, []);

  const { msg } = alerta;
  return (
    <>
      <div
        className="col-12 col-md-6 text-center d-flex justify-content-center align-items-center"
        style={{ height: "100%" }}
      >
        <div>
          <p className="parrafo text-white pt-5 ">
            Confirma tu cuenta y Comienza a Gestiónar tus Expedientes
          </p>
          <p className=" parrafo1 ">Facil y Seguro</p>
        </div>
      </div>
      <div
        className=" col-12 col-md-6 py-5 d-flex justify-content-center align-items-center "
        style={{ height: "100%" }}
      >
        <div
          className="caja mt-3 py-4"
          style={{ width: "500px", height: "auto" }}
        > <Link
        to="/"
        >
          <div className="thumbnail mt-3">
            <img src={hat} style={{ display: "block", width: "100%" }} />
          </div>
          </Link>
          <div className="mx-3 d-flex justify-content-center align-items-center mensaje">
            <div className="mx-3 mt-4 d-flex justify-content-center align-items-center mensaje">
              {msg && <Alerta alerta={alerta} />}{" "}
            </div>
          </div>
          {cuentaConfirmada && (
            <>
              <div className="text-center my-2 px-4 py-2 d-flex  justify-content-center align-items-center">
                <Link
                  to="/principal/autenticar"
                  className="text-decoration-none text-dark fs-6 mx-2 md-2 d-inline linea"
                >
                  Iniciar Sesión
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ConfirmarCuenta;
