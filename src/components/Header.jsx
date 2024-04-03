import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../style.css";
import useAuth from "../hooks/useAuth";
import hat from "../assets/imagenes/hat.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFile, faTicket, faEnvelope,faInbox,faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import useValidation from "../hooks/useValidation";


const Header = () => {
  const { cerrarSesion } = useAuth();
  const{auth}=useAuth();
  const{handleActivo,activoHome,activoBoleta,activoExpediente,activoSolicitudT,activoSolicitudP,activoBandeja}=useValidation();
  
  return (
    <header >
      <nav className="navbar navbar-expand-lg navbar-light bg-white px-4 px-lg-5 py-3 py-lg-0">
        <Link to="/usuario/home" className="navbar-brand p-0"
        onClick={() => handleActivo('home')}>
          <div className=" d-flex align-item-center">
            <img src={hat} className="mx-2" alt="Logo" />
            <h1 className="text-primary m-0">EduRecord</h1>
          </div>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="fa fa-bars"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            <Link
              onClick={() => handleActivo('home')}
              to="/usuario/home"
              className={`nav-item nav-link ${activoHome}`}
            >
              <FontAwesomeIcon icon={faHome} className="me-2" /> Home
            </Link>
            {auth?.tipo_usuario === 'Secretaria' ? (
 <>
    <Link
      onClick={() => handleActivo('expediente')}
      to="/usuario/expedientes"
      className={`nav-item nav-link ${activoExpediente}`}
    >
      <FontAwesomeIcon icon={faFile} className="me-2" /> Expediente
    </Link>
    <Link
      onClick={() => handleActivo('boleta')}
      to="/usuario/boletas"
      className={`nav-item nav-link ${activoBoleta}`}
    >
      <FontAwesomeIcon icon={faTicket} className="me-2" /> Boleta
    </Link>
    <Link
    onClick={() => handleActivo('bandeja')}
    to="/usuario/inbox"
    className={`nav-item nav-link ${activoBandeja}`}
>
    <FontAwesomeIcon icon={faInbox} className="me-2" /> Inbox
</Link>
 </>
) : auth?.tipo_usuario === 'Profesor' ? (
 <>
    <Link
      onClick={() => handleActivo('expediente')}
      to="/usuario/expedientes"
      className={`nav-item nav-link ${activoExpediente}`}
    >
      <FontAwesomeIcon icon={faFile} className="me-2" /> Expediente
    </Link>
    <Link
      onClick={() => handleActivo('solicitudP')}
      to="/usuario/solicitudes-profesor"
      className={`nav-item nav-link ${activoSolicitudP}`}
    >
      <FontAwesomeIcon icon={faEnvelope} className="me-2" /> Solicitud
    </Link>
 </>
) : auth?.tipo_usuario === 'Tutor' ? (
 <Link
    onClick={() => handleActivo('solicitudT')}
    to="/usuario/solicitudes-tutor"
    className={`nav-item nav-link ${activoSolicitudT}`}
 >
    <FontAwesomeIcon icon={faEnvelope} className="me-2" /> Solicitud
 </Link>
) : null}
          </div>
          <button
            type="button"
            className="btn btn-primary rounded-pill text-white py-2 px-4  flex-sm-shrink-0 d-flex align-items-center justify-content-center text-top"
            onClick={cerrarSesion}
          ><div className="d-inline "style={{position:'relative',marginLeft:'12px'}}>
            <FontAwesomeIcon icon={faSignOutAlt} className="me-2" style={{position:'absolute',top:'-6px',left:'-20px'}}/></div>Cerrar Sesión
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
