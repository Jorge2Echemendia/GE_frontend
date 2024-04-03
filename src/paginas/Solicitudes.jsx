
import inbox from '../assets/imagenes/inbox.jpg';
import ListarSolicitudDenegada from '../components/ListarSolicitudDenegada';
import ListarSolicitudPendiente from '../components/ListarSolicitudPendiente';
import '../style.css';
import '../index.css';
import FormularioSolicitud from '../components/FormularioSolicitud';
import ListarSolicitudConfirmada from '../components/ListarSolicitudConfirmada';

const Solicitudes = ()=>{
    
    
 //justify-content-end

    return(
        <>
         <div className={`container-custom d-flex flex-column flex-md-row justify-content-between`} style={{paddingLeft:'20px', width: '100%', minHeight: 'auto', backgroundImage: `url(${inbox})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
         <div
      className=" text-center py-4 d-flex justify-content-center align-items-center "
      style={{ height: "100vh", width: "100%" }}
    >
        <FormularioSolicitud/>
    </div>


         <div className="col-md-4 col-lg-4" style={{borderLeft: '2px solid white'}}>
               <div style={{width:'auto',height:'350px',overflowY:'auto',borderBottom: '2px solid white',borderTop: '2px solid white'}}> <h3 className='text-center mt-3 text-warning'>Solicitudes Pendientes</h3>
                <ListarSolicitudPendiente/>
               </div>
               <div style={{width:'auto',height:'350px',overflowY:'auto',borderBottom: '2px solid white'}}> <h3 className='text-center mt-3 text-success'>Solicitudes Confirmadas</h3>
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
export default Solicitudes;