import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import expedienteImg from "../assets/imagenes/Expediente.jpg";
import boletaImg from "../assets/imagenes/Ticket.jpg";
import solicitudImg from "../assets/imagenes/Solicitud.jpg";
import fondo from "../assets/imagenes/fondo1.jpg";
import { Link} from 'react-router-dom';
import Footer from "../components/Footer";
const FirstLayout = () => {
  // Estado para manejar el efecto de escala y los cambios de clase
 const [autenticarScale, setAutenticarScale] = useState(1);
 const [enlaceScale, setEnlaceScale] = useState(1);
 const [enlaceClass, setEnlaceClass] = useState('bg-light');

 // Función para manejar el evento mouseenter en el botón de autenticación
 const handleAutenticarMouseEnter = () => {
    setAutenticarScale(1.1);
 };

 // Función para manejar el evento mouseleave en el botón de autenticación
 const handleAutenticarMouseLeave = () => {
    setAutenticarScale(1);
 };

 // Función para manejar el evento mouseenter en el botón de enlace
 const handleEnlaceMouseEnter = () => {
    setEnlaceScale(1.1);
    setEnlaceClass('bg-primary text-white');
 };

 // Función para manejar el evento mouseleave en el botón de enlace
 const handleEnlaceMouseLeave = () => {
    setEnlaceScale(1);
    setEnlaceClass('bg-light');
 };

  return (
    <>
      <header className="py-5" style={{ backgroundImage: `url(${fondo})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        <div className="container px-5">
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-6">
              <div className="text-center my-5">
                <h1 className="display-5 fw-bolder text-white mb-2">
                 Gestiona tu expediente de una manera Facil y Segura
                </h1>
                <p className="lead text-white mb-4">
                 Podras administrar el expediente academico y la boleta de
                 movimiento. Tambien los diferentes usuarios podran solicitar las
                 opciones que brinda esta pagina
                </p>
                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
                 <Link
                    className="btn btn-primary btn-lg px-4 me-sm-3"
                    to="/principal/autenticar"
                    id="autenticar"
                    style={{ transform: `scale(${autenticarScale})` }}
                    onMouseEnter={handleAutenticarMouseEnter}
                    onMouseLeave={handleAutenticarMouseLeave}
                 >
                    Autenticar
                 </Link>
                 <Link className={`btn btn-lg px-4 ${enlaceClass}`} id="enlace" to="/principal/registrarse"
                     style={{ transform: `scale(${enlaceScale})` }}
                     onMouseEnter={handleEnlaceMouseEnter}
                     onMouseLeave={handleEnlaceMouseLeave}>
                    Registrarte
                 </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Features section */}
      <section className="py-5 border-bottom" id="features">
        <div className="container px-5 my-5">
          <div className="row gx-5">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <div className="feature feature-container  bg-gradient text-white rounded-3 mb-3">
                <img src={expedienteImg} alt="expediente" style={{ width: '70px', height: '70px' }} />
              </div>
              <h2 className="h4 fw-bolder">Expediente</h2>
              <p>
                Administra el expediente academico. Podras buscar el expediente en
                la base de datos, modificarlo o crearlo desde cero. Tambien lo
                podras enviar hacia algun solicitante.
              </p>
              <Link className="text-decoration-none" to="/principal/autenticar">
                Entrar
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
            <div className="col-lg-4 mb-5 mb-lg-0">
              <div className="feature feature-container  bg-gradient text-white rounded-3 mb-3">
                <img src={solicitudImg} alt="Salicitud" style={{ width: '70px', height: '70px' }} />
              </div>
              <h2 className="h4 fw-bolder">Solicitud</h2>
              <p>
                Si necesitas el expediente para trabajar sobre él podras
                solicitarlo. Tambien tendras la opcion de solicitar un traslado o
                el ingreso de un nuevo estudiante.
              </p>
              <Link className="text-decoration-none" to="/principal/autenticar">
                Entrar
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
            <div className="col-lg-4">
              <div className="feature feature-container  bg-gradient text-white rounded-3 mb-3 ">
                <img src={boletaImg} alt="Boleta en movimiento" style={{ width: '70px', height: '70px' }}width="100%" />
              </div>
              <h2 className="h4 fw-bolder">Boleta de Movimiento</h2>
              <p>
                Administra todo el proceso relacionado con la boleta de
                movimiento.
              </p>
              <Link className="text-decoration-none" to="/principal/autenticar">
                Entrar
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
     <Footer/>
    </>
 );
};

export default FirstLayout;
