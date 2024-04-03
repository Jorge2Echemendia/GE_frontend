import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faCheck,
  faEye,
  faHourglassHalf,
} from "@fortawesome/free-solid-svg-icons";
import useSolicitud from "../hooks/useSolicitud";
import useAuth from "../hooks/useAuth";
const Solicitud = ({ solicitud }) => {
  const { tipo_solicitud, confirmado, id_solicitud } = solicitud;
  const { visualizarSolicitud } = useSolicitud();
  const { auth } = useAuth();
  const { tipo_usuario } = auth;

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span>
        Solicitud de {tipo_solicitud} {id_solicitud}
      </span>
      <div className="d-flex">
        {confirmado === null && tipo_usuario === "Secretaria" ? (
          <button
            type="button"
            className="btn btn-md btn-primary"
            onClick={() => visualizarSolicitud(solicitud)}
          >
            <FontAwesomeIcon icon={faEye} className="me-2" />
            Ver
          </button>
        ) : (
          ""
        )}
        
        {confirmado === true && tipo_usuario === "Secretaria" ? (
          <div className="d-flex align-items-end text-success">
            <FontAwesomeIcon icon={faCheck} className="me-2 fs-2" />
          </div>
        ) : (
          ""
        )}
        {confirmado === false && tipo_usuario === "Secretaria" ? (
          <div className="d-flex align-items-end text-danger">
            <FontAwesomeIcon icon={faTimes} className="me-2 fs-3" />
          </div>
        ) : (
          ""
        )}
        {confirmado === null && tipo_usuario === "Profesor" ? (
          <div className="d-flex align-items-end text-warning">
            <FontAwesomeIcon icon={faHourglassHalf} className="me-2 fs-2" />
          </div>
        ) : (
          ""
        )}
          {confirmado === true && tipo_usuario === "Profesor" ? (
          <div className="d-flex align-items-end text-success">
            <FontAwesomeIcon icon={faCheck} className="me-2 fs-2" />
          </div>
        ) : (
          ""
        )}
        {confirmado === false && tipo_usuario === "Profesor" ? (
          <div className="d-flex align-items-end text-danger">
            <FontAwesomeIcon icon={faTimes} className="me-2 fs-3" />
          </div>
        ) : (
          ""
        )}

        {confirmado === null && tipo_usuario === "Tutor" ? (
          <div className="d-flex align-items-end text-warning">
            <FontAwesomeIcon icon={faHourglassHalf} className="me-2 fs-2" />
          </div>
        ) : (
          ""
        )}
         {confirmado === true && tipo_usuario === "Tutor" ? (
          <div className="d-flex align-items-end text-success">
            <FontAwesomeIcon icon={faCheck} className="me-2 fs-2" />
          </div>
        ) : (
          ""
        )}
        {confirmado === false && tipo_usuario === "Tutor" ? (
          <div className="d-flex align-items-end text-danger">
            <FontAwesomeIcon icon={faTimes} className="me-2 fs-3" />
          </div>
        ) : (
          ""
        )}
      </div>
    </li>
  );
};

export default Solicitud;
