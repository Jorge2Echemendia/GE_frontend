import "bootstrap/dist/css/bootstrap.min.css";
import boleta from "../assets/imagenes/boleta.jpg";
import expediente from "../assets/imagenes/administraExpediente.jpg";
import solicitud from "../assets/imagenes/request.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFile,
  faTicket,
  faEnvelope,
  faInbox,
} from "@fortawesome/free-solid-svg-icons"; //
import useAuth from "../hooks/useAuth";
import useValidation from "../hooks/useValidation";
const Home = () => {
  const { auth } = useAuth();
  const{tipo_usuario}=auth;
  const { handleActivo } = useValidation();
 
  return (
    <>
      {auth?.tipo_usuario === "Secretaria" ? (
        <>
          <div className="header-carousel owl-carousel">
            <div className="header-carousel-item">
              <img src={expediente} className="img-fluid w-100" alt="Image" />
              <div className="carousel-caption">
                <div className="carousel-caption-content p-3">
                  <h5
                    className="text-white text-uppercase fw-bold mb-4"
                    style={{ letterSpacing: "3px" }}
                  >
                    Agencia de la Docencia
                  </h5>
                  <h1 className="display-1 text-capitalize text-white mb-4">
                    Expediente Académico Centralizado
                  </h1>
                  <p className="mb-5 fs-5">
                    Gestiona, organiza y accede a todos tus registros académicos
                    en un solo lugar de manera eficiente.
                  </p>
                  <Link
                    onClick={() => handleActivo("expediente")}
                    className="btn btn-primary rounded-pill text-white py-3 px-5 entrada"
                    to="/usuario/expedientes"
                  >
                    <div className="d-inline" style={{ position: "relative" }}>
                      <FontAwesomeIcon
                        icon={faFile}
                        className="me-2"
                        style={{
                          position: "absolute",
                          top: "3px",
                          left: "-20px",
                        }}
                      />
                    </div>
                    Administar Expediente
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-sm-100" style={{ height: "50px" }}></div>
            <div className="header-carousel-item">
              <img src={boleta} className="img-fluid w-100" alt="Image" />
              <div className="carousel-caption">
                <div className="carousel-caption-content p-3">
                  <h5
                    className="text-white text-uppercase fw-bold mb-4"
                    style={{ letterSpacing: "3px" }}
                  >
                    Agencia de la Docencia
                  </h5>
                  <h1 className="display-1 text-capitalize text-white mb-4">
                    Boleta de Movimiento Electrónica
                  </h1>
                  <p className="mb-5 fs-5 animated slideInDown">
                    Registra y administra los datos clave cuando un estudiante
                    se traslada a otra escuela de manera ágil.
                  </p>
                  <Link
                    onClick={() => handleActivo("boleta")}
                    className="btn btn-primary rounded-pill text-white py-3 px-5 entrada"
                    to="/usuario/boletas"
                  >
                    <div className="d-inline" style={{ position: "relative" }}>
                      <FontAwesomeIcon
                        icon={faTicket}
                        className="me-2"
                        style={{
                          position: "absolute",
                          top: "3.5px",
                          left: "-23px",
                        }}
                      />
                    </div>
                    Administrar Boleta
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-100" style={{ height: "50px" }}></div>
            <div className="header-carousel-item">
              <img src={solicitud} className="img-fluid w-100" alt="Image" />
              <div className="carousel-caption">
                <div className="carousel-caption-content p-3">
                  <h5
                    className="text-white text-uppercase fw-bold mb-4"
                    style={{ letterSpacing: "3px" }}
                  >
                    Agencia de la Docencia
                  </h5>
                  <h1 className="display-1 text-capitalize text-white mb-4">
                    Nuevas Solicitudes Recibidas
                  </h1>
                  <p className="mb-5 fs-5 animated slideInDown">
                    Expedientes: Solicita y gestiona la documentación necesaria
                    para trámites académicos de forma sencilla y transparente.
                  </p>
                  <p className="mb-5 fs-5 animated slideInDown">
                    Registro: Registra y sigue el progreso de todas tus
                    solicitudes, manteniendo un historial claro y organizado.
                  </p>
                  <p className="mb-5 fs-5 animated slideInDown">
                    Traslado: Solicita y supervisa transferencias estudiantiles
                    de forma eficiente.
                  </p>
                  <Link
                    onClick={() => handleActivo("bandeja")}
                    className="btn btn-primary rounded-pill text-white py-3 px-5 entrada"
                    to="/usuario/inbox"
                  >
                    <div className="d-inline" style={{ position: "relative" }}>
                      <FontAwesomeIcon
                        icon={faInbox}
                        className="me-2"
                        style={{
                          position: "absolute",
                          top: "4px",
                          left: "-21px",
                        }}
                      />
                    </div>
                    Inbox
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : auth?.tipo_usuario === "Profesor" ? (
        <>
          <div className="header-carousel owl-carousel">
            <div className="header-carousel-item">
              <img src={expediente} className="img-fluid w-100" alt="Image" />
              <div className="carousel-caption">
                <div className="carousel-caption-content p-3">
                  <h5
                    className="text-white text-uppercase fw-bold mb-4"
                    style={{ letterSpacing: "3px" }}
                  >
                    Agencia de la Docencia
                  </h5>
                  <h1 className="display-1 text-capitalize text-white mb-4">
                    Expediente Académico Centralizado
                  </h1>
                  <p className="mb-5 fs-5">
                    Gestiona, organiza y accede a todos tus registros académicos
                    en un solo lugar de manera eficiente.
                  </p>
                  <Link
                    onClick={() => handleActivo("expediente")}
                    className="btn btn-primary rounded-pill text-white py-3 px-5 entrada"
                    to="/usuario/expedientes"
                  >
                    <div className="d-inline" style={{ position: "relative" }}>
                      <FontAwesomeIcon
                        icon={faFile}
                        className="me-2"
                        style={{
                          position: "absolute",
                          top: "3px",
                          left: "-20px",
                        }}
                      />
                    </div>
                    Administar Expediente
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-100" style={{ height: "50px" }}></div>
            <div className="header-carousel-item">
              <img src={solicitud} className="img-fluid w-100" alt="Image" />
              <div className="carousel-caption">
                <div className="carousel-caption-content p-3">
                  <h5
                    className="text-white text-uppercase fw-bold mb-4"
                    style={{ letterSpacing: "3px" }}
                  >
                    Agencia de la Docencia
                  </h5>
                  <h1 className="display-1 text-capitalize text-white mb-4">
                    Sistema Integrado de Solicitudes
                  </h1>
                  <p className="mb-5 fs-5 animated slideInDown">
                    Expedientes: Solicita y gestiona la documentación necesaria
                    para trámites académicos de forma sencilla y transparente.
                  </p>
                  <p className="mb-5 fs-5 animated slideInDown">
                    Registro: Registra y sigue el progreso de todas tus
                    solicitudes, manteniendo un historial claro y organizado.
                  </p>
                  <p className="mb-5 fs-5 animated slideInDown">
                    Traslado: Solicita y supervisa transferencias estudiantiles
                    de forma eficiente.
                  </p>
                  <Link
                    onClick={() => handleActivo("solicitudP")}
                    className="btn btn-primary rounded-pill text-white py-3 px-5 entrada"
                    to="/usuario/solicitudes-profesor"
                  >
                    <div className="d-inline" style={{ position: "relative" }}>
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="me-2"
                        style={{
                          position: "absolute",
                          top: "5px",
                          left: "-21px",
                        }}
                      />
                    </div>
                    Solicitudes
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : auth?.tipo_usuario === "Tutor" ? (
        <div className="header-carousel owl-carousel">
          <div className="header-carousel-item">
            <img src={solicitud} className="img-fluid w-100" alt="Image" />
            <div className="carousel-caption">
              <div className="carousel-caption-content p-3">
                <h5
                  className="text-white text-uppercase fw-bold mb-4"
                  style={{ letterSpacing: "3px" }}
                >
                  Agencia de la Docencia
                </h5>
                <h1 className="display-1 text-capitalize text-white mb-4">
                  Sistema Integrado de Solicitudes
                </h1>
                <p className="mb-5 fs-5 animated slideInDown">
                  Registro: Registra y sigue el progreso de todas tus
                  solicitudes, manteniendo un historial claro y organizado.
                </p>
                <p className="mb-5 fs-5 animated slideInDown">
                  Traslado: Solicita y supervisa transferencias estudiantiles de
                  forma eficiente.
                </p>
                <Link
                  onClick={() => handleActivo("solicitudT")}
                  className="btn btn-primary rounded-pill text-white py-3 px-5 entrada"
                  to="/usuario/solicitudes-tutor"
                >
                  <div className="d-inline" style={{ position: "relative" }}>
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="me-2"
                      style={{
                        position: "absolute",
                        top: "7.5px",
                        left: "-21px",
                      }}
                    />
                  </div>
                  Solicitudes
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Home;
