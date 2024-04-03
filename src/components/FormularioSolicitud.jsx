import Alerta from "../components/Alerta";
import {
  faSave,
  faTimes,
  faHourglassHalf,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useAuth from "../hooks/useAuth";
import Spinner from "../components/Spinner";
import { useState } from "react";
import useSolicitud from "../hooks/useSolicitud";

const FormularioSolicitud = () => {
  const { auth } = useAuth();
  const { tipo_usuario } = auth;
  const {
    nombre_estudiante,
    setNombre,
    ci,
    setCi,
    descripcion,
    setDescripcion,
    tipo_solicitud,
    setTipoSolicitud,
    errorNombre,
    errorCi,
    errorTipoSolicitud,
    errorDescripcion,
    validoNombre,
    validoCi,
    validoDescripcion,
    validoTipoSolicitud,
    limpiarCampos,
    setAlerta,
    loading,
    alerta,
    handleValidarCI,
    handleValidarDescripcion,
    handleValidarNombre,
    handleValidarTipoSolicitud,
    solicitudGuardada,
  } = useSolicitud();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await Promise.all([
      handleValidarNombre(nombre_estudiante),
      handleValidarCI(ci),
      handleValidarDescripcion(descripcion),
      handleValidarTipoSolicitud(tipo_solicitud),
    ]);
    setAlerta({});

    solicitudGuardada({ tipo_solicitud, ci, descripcion, nombre_estudiante });
  };
  const { msg } = alerta;
  return (
    <div className="form-container caja">
      <h2 className="mb-4 mt-2">Crear Nueva Solicitud</h2>
      <div className="mx-3 d-flex justify-content-center align-items-center mensaje">
        {loading ? <Spinner /> : msg && <Alerta alerta={alerta} />}
      </div>
      <form
        className="px-4 mt-3 row"
        style={{ width: "100%", height: "auto" }}
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="form-row">
          <div className="col-md-12">
            <div className="form-group form-floating mb-2">
              <input
                type="text"
                className={`form-control ${validoNombre}`}
                id="nombreCompleto"
                placeholder="Ingrese su nombre completo"
                value={nombre_estudiante}
                onChange={(e) => setNombre(e.target.value)}
              />
              <label htmlFor="nombreCompleto" className="form-label">
                Nombre del Menor
              </label>
              {errorNombre && <div className="invalido">{errorNombre}</div>}
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
                Carnet de Identidad del Menor
              </label>
              {errorCi && <div className="invalido">{errorCi}</div>}
            </div>
            <div className="form-group form-floating mb-2">
              <input
                type="text"
                className={`form-control ${validoDescripcion}`}
                id="descripcion"
                placeholder="Ingrese la descripcion"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
              />
              <label htmlFor="descripcion" className="form-label">
                Descripcion
              </label>
              {errorDescripcion && (
                <div className="invalido">{errorDescripcion}</div>
              )}
            </div>
            <div className="form-group form-floating mb-2">
              <select
                className={`form-select ${validoTipoSolicitud}`}
                id="tipo_solicitud"
                value={tipo_solicitud}
                onChange={(e) => setTipoSolicitud(e.target.value)}
                required
              >
                <option value="">...</option>
                {tipo_usuario === "Profesor" ? (
                  <option value="Expediente">Expediente</option>
                ) : (
                  <>
                    <option value="Registro">Registro</option>
                    <option value="Traslado">Traslado</option>
                  </>
                )}
              </select>
              <label htmlFor="tipo_solicitud" className="form-label">
                Tipo de Solicitud
              </label>
              {errorTipoSolicitud && (
                <div className="invalido">{errorTipoSolicitud}</div>
              )}
            </div>
          </div>
        </div>

        <div className="form-actions text-center py-3">
          <button
            type="button"
            className="btn btn-cancelar btn-lg "
            onClick={limpiarCampos}
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

export default FormularioSolicitud;
