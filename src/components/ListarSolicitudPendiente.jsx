import useSolicitud from "../hooks/useSolicitud";
import Solicitud from "./Solicitud";
import useAuth from "../hooks/useAuth";
const ListarSolicitudPendiente = () => {
  const { solicitud } = useSolicitud();
  const { auth } = useAuth();

  const { tipo_usuario } = auth;

  return (
    <>
      {tipo_usuario === "Secretaria" && solicitud.length ? (
          <div className="container-fluid pb-4">
            <div className="text-center p-4" style={{ fontWeight: "700" }}>
              <h1>Listado de Solicitudes Actuales</h1>
            </div>
            <div>
              <ul className="list-group">
                {solicitud
                  .filter((solicitud) => solicitud.confirmado === null)
                  .map((solicitud) => (
                    <Solicitud
                      key={solicitud.id_solicitud}
                      solicitud={solicitud}
                    />
                  ))}
              </ul>
            </div>
          </div>
      ) : tipo_usuario === "Profesor" && solicitud.length ? (
          <div className="container-fluid pb-4">
            <div>
              <ul className="list-group">
                {solicitud
                  .filter((solicitud) => solicitud.confirmado === null)
                  .map((solicitud) => (
                    <Solicitud
                      key={solicitud.id_solicitud}
                      solicitud={solicitud}
                    />
                  ))}
              </ul>
            </div>
          </div>
      ) : tipo_usuario === "Tutor" && solicitud.length ? (
          <div className="container-fluid pb-4">
            <div>
              <ul className="list-group">
                {solicitud
                  .filter((solicitud) => solicitud.confirmado === null)
                  .map((solicitud) => (
                    <Solicitud
                      key={solicitud.id_solicitud}
                      solicitud={solicitud}
                    />
                  ))}
              </ul>
            </div>
          </div>
      ) : (
          <div className="text-center p-4">
            <h2 style={{ fontWeight: "700" }}>No hay Solicitudes Pendientes</h2>
          </div>
      )}
    </>
  );
};

export default ListarSolicitudPendiente;
