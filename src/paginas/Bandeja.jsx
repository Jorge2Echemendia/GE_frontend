import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import inbox from '../assets/imagenes/inbox.jpg';
import '../style.css';
import '../index.css';
import useSolicitud from '../hooks/useSolicitud';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ListarSolicitudPendiente from '../components/ListarSolicitudPendiente';
import ListarSolicitudConfirmada from '../components/ListarSolicitudConfirmada';
import ListarSolicitudDenegada from '../components/ListarSolicitudDenegada';
import Alerta from '../components/Alerta';
import Spinner from '../components/Spinner';


const Bandeja = () => {
    const{alerta,loading,mostrarSolicitud,verSolicitud,cerrarVentana,solicitudActual,confirmarEstadoSolicitud}=useSolicitud();
    const{id_solicitud}=solicitudActual;
    const { msg } = alerta;
    
    return (
        <>
            <div className={`container-custom d-flex flex-column flex-md-row  ${mostrarSolicitud ? 'justify-content-between' : ''} `} style={{width: '100%', minHeight: 'auto', backgroundImage: `url(${inbox})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            {mostrarSolicitud && (<div className='d-flex justify-content-center align-items-center' style={{height: '100vh',width:'100%'}}>
                <div className="caja px-3 py-4 col-md-2 col-lg-2" style={{ width: "80%", height: "auto",position:'relative' }}>
                <div className="mx-3 d-flex justify-content-center align-items-center mensaje">
            {loading ? <Spinner /> : msg && <Alerta alerta={alerta} />} </div>
                <button
                            type="button"
                            className="btn btn-close"
                            style={{
                                position: 'absolute',
                                top: '-2px',
                                right: '2px',
                                background: 'none',
                                border: 'none'
                            }}
                            onClick={cerrarVentana}
                        >
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                <h1 className="mx-3 my-3 text-center"> Solicitud de {verSolicitud.tipo_solicitud}  </h1>
                <div className="d-flex "><p className="fs-2 me-2">Descripcion: </p><span className="fs-3 py-1">{verSolicitud.descripcion}</span></div>
                <div className="form-actions text-center py-3">
                <button
                    type="button"
                    className="btn btn-cancelar btn-lg "
                    onClick={()=>
                        confirmarEstadoSolicitud(id_solicitud,'false')}
                >
                    <FontAwesomeIcon icon={faTimes} className="me-2" />
                    Denegar
                </button>
                <button type="button" className="btn btn-guardar btn-lg"
                onClick={()=>
                    confirmarEstadoSolicitud(id_solicitud, 'true')}
                >
                    <FontAwesomeIcon icon={faCheck} className="me-2" />
                    Confirmar
                </button>
            </div>
            </div>
            </div>)}
            {!mostrarSolicitud &&
            (<div className="col-md-8 col-lg-8 px-3 ">
                <ListarSolicitudPendiente/>
            </div>)}
            <div className="col-md-4 col-lg-4" style={{borderLeft: '2px solid white'}}>
               <div style={{width:'auto',height:'350px',overflowY:'auto',borderBottom: '2px solid white',borderTop: '2px solid white'}}> <h3 className='text-center mt-3 text-success'>Solicitudes Confirmadas</h3>
                <ListarSolicitudConfirmada/>
               </div>
               <div style={{width:'auto',height:'350px',overflowY:'auto',borderBottom: '2px solid white'}}> <h3 className='text-center mt-3 text-danger'>Solicitudes Denegadas</h3>
               <ListarSolicitudDenegada/>
               </div>
            </div>
            </div>
        </>
    )
}
export default Bandeja;