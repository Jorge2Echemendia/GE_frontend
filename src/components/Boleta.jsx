import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faEye } from '@fortawesome/free-solid-svg-icons';
import useBoleta from '../hooks/useBoleta';
// eslint-disable-next-line react/prop-types
const Boleta = ({boleta}) => {
const {nombre_estudiante}=boleta;
const {editarBoleta,visualizarBoleta,}=useBoleta();
   
        return (
            <li className="list-group-item d-flex justify-content-between align-items-center">
            <span>Boleta de Movimiento del Estudiante {nombre_estudiante}</span>
            <div className="d-flex">
              
              <button
                type="button"
                className="btn btn-md btn-editar me-2"
                onClick={()=> editarBoleta(boleta)}
              >
                <FontAwesomeIcon icon={faEdit} className="me-2" />
                Editar
              </button>
              <button
                type="button"
                className="btn btn-md btn-primary"
                onClick={()=> visualizarBoleta(boleta)}
              >
                <FontAwesomeIcon icon={faEye} className="me-2" />
                Ver
              </button>
            </div>
          </li>
         
        );
}
export default Boleta;