import useSolicitud from "../hooks/useSolicitud";
import Solicitud from "./Solicitud";
const ListarSolicitudConfirmada = () => {
  const { solicitud } = useSolicitud();

  return (
    <>
      {solicitud.length ? (
        <>
          <div className="container-fluid pb-4">
            <div>
              <ul className="list-group">
                {solicitud
                  .filter((solicitud) => solicitud.confirmado === true)
                  .map((solicitud) => (
                    <Solicitud
                      key={solicitud.id_solicitud}
                      solicitud={solicitud}
                    />
                  ))}
              </ul>
            </div>
          </div>
        </>
      ) :  (
        <>
          <div className="text-center  p-4">
            <h2 style={{ fontWeight: "700" }}>No hay Solicitudes Confirmadas</h2>
          </div>
        </>
      )}
    </>
  );
};

export default ListarSolicitudConfirmada;
