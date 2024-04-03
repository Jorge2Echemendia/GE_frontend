import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faEye } from '@fortawesome/free-solid-svg-icons';
import useExpediente from '../hooks/useExpediente';
// eslint-disable-next-line react/prop-types
const Expediente = ({expediente}) => {
const {nombre_estudiante}=expediente;
const {editarExpediente,visualizarExpediente,}=useExpediente();
   
        return (
            (<li className="list-group-item d-flex justify-content-between align-items-center">
            <span>Expediente del Estudiante {nombre_estudiante}</span>
            <div className="d-flex">
              
              <button
                type="button"
                className="btn btn-md btn-editar me-2"
                onClick={()=> editarExpediente(expediente)}
              >
                <FontAwesomeIcon icon={faEdit} className="me-2" />
                Editar
              </button>
              <button
                type="button"
                className="btn btn-md btn-primary"
                onClick={()=> visualizarExpediente(expediente)}
              >
                <FontAwesomeIcon icon={faEye} className="me-2" />
                Ver
              </button>
            </div>
          </li>)
         
        );


}
export default Expediente;