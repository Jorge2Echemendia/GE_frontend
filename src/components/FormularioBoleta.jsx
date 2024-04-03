import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faSave } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import useValidation from "../hooks/useValidation";
import Alerta from "./Alerta";
import useBoleta from "../hooks/useBoleta";
import Spinner from "./Spinner";
import { useEffect, useState } from "react";

const FormularioBoleta = () => {
  const {
    nombre_tutor,
    setNombreTutor,
    errorNombreTutor,
    validoNombreTutor,
    fecha,
    setFecha,
    errorFecha,
    validoFecha,
    escuela_actual,
    setEscuelaActual,
    errorEscuelaActual,
    validoEscuelaActual,
    escuela_traslado,
    setEscuelaTraslado,
    errorEscuelaTraslado,
    validoEscuelaTraslado,
    motivo_traslado,
    setMotivoTraslado,
    errorMotivoTraslado,
    validoMotivoTraslado,
    handleValidarNombreTutor,
    handleValidarFecha,
    handleValidarEscuelaTraslado,
    handleValidarEscuelaActual,
    handleValidarMotivoTraslado,
  } = useValidation();
  const {
    setAlerta,
    loading,
    alerta,
    boletaGuardado,
    editBoleta,
    ci,
    setCi,
    errorCi,
    validoCi,
    nombre_estudiante,
    setNombreEstudiante,
    errorNombreEstudiante,
    validoNombreEstudiante,
    telefono_estudiante,
    setTelefonoEstudiante,
    errorTelefonoEstudiante,
    validoTelefonoEstudiante,
    handleValidarNombreEstudiante,
    handleValidarTelefonoEstudiante,
    handleValidarCI,
    limpiarDatosBoleta
  } = useBoleta();
  const [id, setId] = useState(null);
  useEffect(() => {
    if (editBoleta?.nombre_estudiante) {
      setNombreEstudiante(editBoleta.nombre_estudiante);
      setNombreTutor(editBoleta.nombre_tutor);
      setTelefonoEstudiante(editBoleta.telefono_estudiante);
      setFecha(editBoleta.fecha);
      setEscuelaActual(editBoleta.escuela_actual);
      setEscuelaTraslado(editBoleta.escuela_traslado);
      setMotivoTraslado(editBoleta.motivo_traslado);
      setCi(editBoleta.ci);
      setId(editBoleta.id_boleta);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editBoleta]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Espera a que se completen todas las validaciones

    await Promise.all([
      handleValidarNombreEstudiante(nombre_estudiante),
      handleValidarNombreTutor(nombre_tutor),
      handleValidarTelefonoEstudiante(telefono_estudiante),
      handleValidarFecha(fecha),
      handleValidarEscuelaTraslado(escuela_traslado),
      handleValidarEscuelaActual(escuela_actual),
      handleValidarMotivoTraslado(motivo_traslado),
      handleValidarCI(ci),
    ]);
    setAlerta({});
    boletaGuardado({
      nombre_estudiante,
      nombre_tutor,
      telefono_estudiante,
      fecha,
      escuela_actual,
      escuela_traslado,
      ci,
      id: editBoleta.id_boleta,
      motivo_traslado,
    });
  };

  const { msg } = alerta;

  return (
    <div className="form-container caja text-center py-4">
      <h2 className="mb-4 mt-2">
        {editBoleta?.nombre_estudiante
          ? "Editando Boleta"
          : "Crear Nueva Boleta"}
      </h2>
      <div className="mx-3 d-flex justify-content-center align-items-center mensaje">
        {loading ? <Spinner /> : msg && <Alerta alerta={alerta} />}{" "}
      </div>
      <form className="px-4 mt-3 row" onSubmit={handleSubmit} noValidate>
        <div className="form-row">
          <div className="col-md-12">
            <div className="form-group form-floating mb-2">
              <input
                type="text"
                className={`form-control ${validoNombreEstudiante}`}
                id="nombreCompleto"
                placeholder="Ingrese su nombre completo"
                value={nombre_estudiante}
                onChange={(e) => setNombreEstudiante(e.target.value)}
              />
              <label htmlFor="nombreCompleto" className="form-label">
                Nombre Completo
              </label>
              {errorNombreEstudiante && (
                <div className="invalido">{errorNombreEstudiante}</div>
              )}
            </div>
            <div className="form-group form-floating mb-2">
              <input
                type="text"
                className={`form-control ${validoNombreTutor}`}
                id="tutot"
                placeholder="Nombre del Tutor"
                value={nombre_tutor}
                onChange={(e) => setNombreTutor(e.target.value)}
              />
              <label htmlFor="tutor" className="form-label">
                Nombre del Tutor
              </label>
              {errorNombreTutor && (
                <div className="invalido">{errorNombreTutor}</div>
              )}
            </div>
            <div className="form-group form-floating mb-2">
              <input
                type="text"
                className={`form-control ${validoCi}`}
                id="carnetIdentidad"
                placeholder="Ingrese su número de carnet de identidad"
                value={ci}
                onChange={(e) => setCi(e.target.value)}
              />
              <label htmlFor="carnetIdentidad" className="form-label">
                Carnet de Identidad
              </label>
              {errorCi && <div className="invalido">{errorCi}</div>}
            </div>
            <div className="form-group form-floating mb-2">
              <input
                type="text"
                className={`form-control ${validoFecha}`}
                id="fecha"
                placeholder="Ingrese su Fecha actual"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
              />
              <label htmlFor="fecha" className="form-label">
                Fecha
              </label>
              {errorFecha && <div className="invalido">{errorFecha}</div>}
            </div>
            <div className="form-group form-floating mb-2">
              <input
                type="text"
                className={`form-control ${validoTelefonoEstudiante}`}
                id="telefono"
                placeholder="Ingrese un número de contacto"
                value={telefono_estudiante}
                onChange={(e) => setTelefonoEstudiante(e.target.value)}
              />
              <label htmlFor="telefono" className="form-label">
                Telefono de Contacto
              </label>
              {errorTelefonoEstudiante && (
                <div className="invalido">{errorTelefonoEstudiante}</div>
              )}
            </div>
            <div className="form-group form-floating mb-3">
              <input
                type="text"
                className={`form-control ${validoEscuelaActual}`}
                id="escuelaActual"
                placeholder="Ingrese el promedio del estudiante"
                value={escuela_actual}
                onChange={(e) => setEscuelaActual(e.target.value)}
              />
              <label htmlFor="escuelaActual" className="form-label">
                Escuela Actual
              </label>
              {errorEscuelaActual && (
                <div className="invalido">{errorEscuelaActual}</div>
              )}
            </div>
            <div className="form-group form-floating mb-3">
              <input
                type="text"
                className={`form-control ${validoEscuelaTraslado}`}
                id="escuelaTraslado"
                placeholder="Ingrese el promedio del estudiante"
                value={escuela_traslado}
                onChange={(e) => setEscuelaTraslado(e.target.value)}
              />
              <label htmlFor="escuelaTraslado" className="form-label">
                Escuela de Traslado
              </label>
              {errorEscuelaTraslado && (
                <div className="invalido">{errorEscuelaTraslado}</div>
              )}
            </div>
            <div className="form-group form-floating mb-3">
              <input
                type="text"
                className={`form-control ${validoMotivoTraslado}`}
                id="motivo"
                placeholder="Ingrese el motivo"
                value={motivo_traslado}
                onChange={(e) => setMotivoTraslado(e.target.value)}
              />
              <label htmlFor="motivo" className="form-label">
                Motivo
              </label>
              {errorMotivoTraslado && (
                <div className="invalido">{errorMotivoTraslado}</div>
              )}
            </div>
          </div>
        </div>

        <div className="form-actions text-center py-3">
          <button type="button" className="btn btn-cancelar btn-lg "
          onClick={()=>limpiarDatosBoleta()}
          >
            <FontAwesomeIcon icon={faTimes} className="me-2" />
            Cancelar
          </button>
          <button type="submit" className="btn btn-guardar btn-lg">
            <FontAwesomeIcon icon={faSave} className="me-2" />
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};
export default FormularioBoleta;
