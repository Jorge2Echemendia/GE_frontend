import FormularioExpediente from "../components/FormularioExpediente";
import ListarExpediente from "../components/ListarExpediente";
import "bootstrap/dist/css/bootstrap.min.css";
import useAuth from "../hooks/useAuth";
import expediente from '../assets/imagenes/administraExpediente.jpg';
import useExpediente from "../hooks/useExpediente";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faSave } from '@fortawesome/free-solid-svg-icons';
const Expediente = () => {
    const { auth } = useAuth();
    const { verExpediente, mostrarFormulario, crearExpediente,mostrarEdicion,setMostrarFormulario } = useExpediente();

    if (auth?.tipo_usuario !== "Secretaria") {
        return (
            
            <div className={`d-flex flex-column flex-md-row px-4 ${!mostrarFormulario ? 'justify-content-center align-items-center':' '}`} style={{ paddingTop: '140px', paddingBottom: '80px', width: '100%', minHeight: 'auto', backgroundImage: `url(${expediente})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                  {mostrarFormulario &&
                  (<div className="caja px-3" style={{ width: "auto", height: "100%" }}>
                <h1 className="mx-3 my-3 text-center"> Expediente</h1>
                <div className="d-flex "><p className="fs-2 me-2">Nombre: </p><span className="fs-3 py-1">{verExpediente.nombre_estudiante}</span></div>
                <div className="d-flex "><p className="fs-2 me-2">Apellido: </p><span className="fs-3 py-1">{verExpediente.apellido_estudiante}</span></div>
                <div className="d-flex "><p className="fs-2 me-2">Teléfono: </p><span className="fs-3 py-1">{verExpediente.telefono_estudiante}</span></div>
                <div className="d-flex "><p className="fs-2 me-2">Dirección: </p><span className="fs-3 py-1">{verExpediente.direccion_estudiante}</span></div>
                <div className="d-flex "><p className="fs-2 me-2">Promedio: </p><span className="fs-3 py-1">{verExpediente.promedio}</span></div>
                <div className="d-flex "><p className="fs-2 me-2">CI:</p><span className="fs-3 py-1">{verExpediente.ci}</span></div>
                <div className="mb-3 d-flex justify-content-center align-items-center "> <button
                    type="button"
                    className="btn btn-md btn-cancelar me-2"
                    onClick={()=>setMostrarFormulario(false)}
                >
                    <FontAwesomeIcon icon={faTimes} className="me-2" />
                    Cerrar
                </button>
                </div>

            </div>)}

                {mostrarEdicion && (<div className="col-md-6 col-lg-4 ">
                  <FormularioExpediente />
                </div>)}
                <div className={`col-md-8 ${mostrarFormulario ? 'col-lg-8' : 'col-12'} px-4`}>
                    <ListarExpediente />
                </div>
            </div>
        );
    }

    return (

        <div className="d-flex flex-column flex-md-row px-4" style={{ paddingTop: '140px', paddingBottom: '80px', width: '100%', minHeight: '90vh', backgroundImage: `url(${expediente})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            {!mostrarFormulario ? (
                <div className="col-md-6 col-lg-4 ">
                    <FormularioExpediente />
                </div>

            ) : (<div className="caja mt-3 px-3" style={{ width: "auto", height: "100%" }}>
                <h1 className="mx-3 text-center"> Expediente</h1>
                <div className="d-flex "><p className="fs-2 me-2">Nombre: </p><span className="fs-3 py-1">{verExpediente.nombre_estudiante}</span></div>
                <div className="d-flex "><p className="fs-2 me-2">Apellido: </p><span className="fs-3 py-1">{verExpediente.apellido_estudiante}</span></div>
                <div className="d-flex "><p className="fs-2 me-2">Teléfono: </p><span className="fs-3 py-1">{verExpediente.telefono_estudiante}</span></div>
                <div className="d-flex "><p className="fs-2 me-2">Dirección: </p><span className="fs-3 py-1">{verExpediente.direccion_estudiante}</span></div>
                <div className="d-flex "><p className="fs-2 me-2">Promedio: </p><span className="fs-3 py-1">{verExpediente.promedio}</span></div>
                <div className="d-flex "><p className="fs-2 me-2">CI:</p><span className="fs-3 py-1">{verExpediente.ci}</span></div>
                <div className="mb-3 d-flex justify-content-center align-items-center "> <button
                    type="button"
                    className="btn btn-md btn-guardar me-2"
                    onClick={() => crearExpediente()}
                >
                    <FontAwesomeIcon icon={faSave} className="me-2" />
                    Crear Nuevo Expediente
                </button>
                </div>

            </div>)}

            <div className="col-md-6 col-lg-8 px-4 ">
                <ListarExpediente />
            </div>
        </div>
    );
};

export default Expediente;
