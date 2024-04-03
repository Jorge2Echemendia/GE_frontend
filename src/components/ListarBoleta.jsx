import useBoleta from "../hooks/useBoleta";
import Boleta from "./Boleta";
const ListarBoleta = () => {
    const { boleta } = useBoleta();




    return (<>
        {boleta.length ? (
            <>
                <div className="container-fluid">
                    <div className="text-center p-4" style={{ fontWeight: '700' }}>
                        <h1>Listado de Boletas Actuales</h1>
                    </div>
                    <div  >
                        <ul className="list-group">
                            {boleta.map(boleta =>
                                <Boleta
                                    key={boleta.id_boleta}
                                    boleta={boleta}
                                />

                            )}
                        </ul>
                    </div>
                </div>

            </>
        ) : (<>
            <div className="text-center  p-4">
                <h2 style={{ fontWeight: '700' }}>No hay Boletas, comienza creando una.</h2>
            </div>
        </>

        )}
    </>
    )
}

export default ListarBoleta;