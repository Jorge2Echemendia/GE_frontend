import FormularioBoleta from "../components/FormularioBoleta";
import ListarBoleta from "../components/ListarBoleta";
import "bootstrap/dist/css/bootstrap.min.css";
import useAuth from "../hooks/useAuth";
import boleta from '../assets/imagenes/boleta.jpg';
import useBoleta from "../hooks/useBoleta";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSave } from '@fortawesome/free-solid-svg-icons';
const Boleta = () => {
    const { auth } = useAuth();
    const { verBoleta, mostrarFormulario,crearBoleta, formatearFecha} = useBoleta();

    if (auth?.tipo_usuario !== "Secretaria") {
        return (
            <div className="d-flex row" style={{ paddingTop: '140px', paddingBottom: '80px', width: '100%', minHeight: 'auto', backgroundImage: `url(${boleta})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                {!mostrarFormulario && (<div className="col-md-6 col-lg-4 ">
                    <FormularioBoleta />
                </div>)}
                <div className="col-12 bg-">
                    <ListarBoleta />
                </div>
            </div>
        );
    }

    return (

        <div className="d-flex flex-column flex-md-row px-4" style={{ paddingTop: '140px', paddingBottom: '80px', width: '100%', minHeight: '90vh', backgroundImage: `url(${boleta})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            {!mostrarFormulario ? (
                <div className="col-md-6 col-lg-4 ">
                    <FormularioBoleta />
                </div>

            ) : (<div className="caja px-3" style={{ width: "auto", height: "100%" }}>
                <h1 className="mx-3 my-3 text-center"> Boleta de Movimiento </h1>
                <div className="d-flex "><p className="fs-2 me-2">Nombre: </p><span className="fs-3 py-1">{verBoleta.nombre_estudiante}</span></div>
                <div className="d-flex "><p className="fs-2 me-2">CI:</p><span className="fs-3 py-1">{verBoleta.ci}</span></div>
                <div className="d-flex "><p className="fs-2 me-2">Tutor: </p><span className="fs-3 py-1">{verBoleta.nombre_tutor}</span></div>
                <div className="d-flex "><p className="fs-2 me-2">Teléfono: </p><span className="fs-3 py-1">{verBoleta.telefono_estudiante}</span></div>
                <div className="d-flex "><p className="fs-2 me-2">Fecha:</p><span className="fs-3 py-1">{formatearFecha(verBoleta.fecha)}</span></div>
                <div className="d-flex "><p className="fs-2 me-2">Escuela Actual: </p><span className="fs-3 py-1">{verBoleta.escuela_actual}</span></div>
                <div className="d-flex "><p className="fs-2 me-2">Escuela de Taslado: </p><span className="fs-3 py-1">{verBoleta.escuela_traslado}</span></div>
                <div className="d-flex "><p className="fs-2 me-2">Motivo:</p><span className="fs-3 py-1">{verBoleta.motivo_traslado}</span></div>
                
               <div className="mb-3 d-flex justify-content-center align-items-center "> <button
                 type="button"
                 className="btn btn-md btn-guardar me-2"
                 onClick={()=>crearBoleta()}
               >
                 <FontAwesomeIcon icon={faSave} className="me-2" />
                 Crear Nueva Boleta de Movimiento
               </button>
               </div>
              
            </div>)}

            <div className="col-md-6 col-lg-8 px-4 ">
                <ListarBoleta />
            </div>
        </div>
    );
};

export default Boleta;