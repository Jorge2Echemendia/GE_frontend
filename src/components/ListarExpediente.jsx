import useExpediente from "../hooks/useExpediente";
import Expediente from "./Expediente";
const ListarExpediente = () => {
    const { expediente } = useExpediente();







    return (<>
        {expediente.length ? (
            <>
                <div className="container-fluid">
                    <div className="text-center p-4" style={{ fontWeight: '700' }}>
                        <h1>Listado de Expedientes Actuales</h1>
                    </div>
                    <div  >
                        <ul className="list-group">
                            {expediente.map(expediente =>
                                <Expediente
                                    key={expediente.id_expediente}
                                    expediente={expediente}
                                />

                            )}
                        </ul>
                    </div>
                </div>

            </>
        ) : (<>
            <div className="text-center  p-4">
                <h2 style={{ fontWeight: '700' }}>No hay Expediente, comienza creando uno.</h2>
            </div>
        </>

        )}
    </>
    )
}

export default ListarExpediente;