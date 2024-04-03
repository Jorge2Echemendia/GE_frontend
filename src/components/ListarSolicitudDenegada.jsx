import useSolicitud from "../hooks/useSolicitud";
import Solicitud from "./Solicitud";
const ListarSolicitudDenegada = () => {
  const { solicitud } = useSolicitud();

  return (
    <>
      {solicitud.length ? (
        <>
          <div className="container-fluid pb-4">
            <div>
              <ul className="list-group">
                {solicitud
                  .filter((solicitud) => solicitud.confirmado === false)
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
            <h2 style={{ fontWeight: "700" }}>No hay Solicitudes Denegadas</h2>
          </div>
        </>
      )}
    </>
  );
};

export default ListarSolicitudDenegada;