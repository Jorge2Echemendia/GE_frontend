import { createContext, useState, useEffect } from "react";
import clienteAxios from "../config/Axios";
import useAuth from '../hooks/useAuth';
const SolicitudContext = createContext();

// eslint-disable-next-line react/prop-types
const SolicitudProvider = ({ children }) => {
  const [confirmado, setConfirmado] = useState(false);
  const [mostrarSolicitud, setMostrarSolicitud] = useState(false);
  const [solicitudActualizada, setSolicitudActualizada] = useState(false);
  const [solicitud, setSolicitud] = useState([]);
  const [verSolicitud, setVerSolicitud] = useState([]);
  const [alerta, setAlerta] = useState({});
  const [loading, setLoading] = useState(false);
  const [solicitudActual, setSolicitudActual] = useState([]);
  const [nombre_estudiante, setNombre] = useState("");
  const [ci, setCi] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [tipo_solicitud, setTipoSolicitud] = useState("");
  const [errorNombre, setErrorNombre] = useState("");
  const [errorCi, setErrorCi] = useState("");
  const [errorTipoSolicitud, setErrorTipoSolicitud] = useState("");
  const [errorDescripcion, setErrorDescripcion] = useState("");
  const [validoNombre, setValidoNombre] = useState("");
  const [validoCi, setValidoCi] = useState("");
  const [validoDescripcion, setValidoDescripcion] = useState("");
  const [validoTipoSolicitud, setValidoTipoSolicitud] = useState("");

  const{auth}=useAuth();
  const{tipo_usuario}=auth;
  const handleValidarCI = (valor) => {
    return new Promise((resolve, reject) => {
      const regex = /^\d{11}$/;
      if (valor === "") {
        setErrorCi("Por favor, completa este campo");
        setValidoCi("is-invalid");
        reject("CI inválido");
      } else if (!regex.test(valor)) {
        setErrorCi("Por favor, introduce un CI válido");
        setValidoCi("is-invalid");
        reject("CI inválido");
      } else {
        setValidoCi("is-valid");
        setErrorCi("");
        resolve("CI válido");
      }
      setCi(valor);
    });
  };
  const handleValidarTipoSolicitud = (valor) => {
    return new Promise((resolve, reject) => {
      if (valor === "") {
        setErrorTipoSolicitud("Por favor, completa este campo");
        setValidoTipoSolicitud("is-invalid");
        reject("Tipo de solicitud inválido");
      } else {
        setValidoTipoSolicitud("is-valid");
        setErrorTipoSolicitud("");
        resolve("Tipo de solicitud válido");
      }
      setTipoSolicitud(valor);
    });
  };
  const handleValidarNombre = (valor) => {
    return new Promise((resolve, reject) => {
      const regexNombre = /^[a-zA-Z\s]+$/; // Solo permite letras y espacios
      if (valor === "") {
        setErrorNombre("Por favor, completa este campo");
        setValidoNombre("is-invalid");
        reject("Nombre inválido");
      } else if (!regexNombre.test(valor)) {
        setErrorNombre("El nombre solo debe contener letras y espacios");
        setValidoNombre("is-invalid");
        reject("Nombre inválido");
      } else {
        setValidoNombre("is-valid");
        setErrorNombre("");
        resolve("Nombre válido");
      }
      setNombre(valor);
    });
  };

  const handleValidarDescripcion = (valor) => {
    return new Promise((resolve, reject) => {
      if (valor === "") {
        setErrorDescripcion("Por favor, completa este campo");
        setValidoDescripcion("is-invalid");
        reject("Descripción inválida");
      } else {
        setValidoDescripcion("is-valid");
        setErrorDescripcion("");
        resolve("Descripción válida");
      }
      setDescripcion(valor);
    });
  };
  const limpiarCampos = () => {
    // Restablecer los campos de entrada
    setNombre("");
    setCi("");
    setDescripcion("");
    setTipoSolicitud("");

    // Restablecer los estados de validación a su estado inicial
    setValidoNombre("");
    setValidoCi("");
    setValidoDescripcion("");
    setValidoTipoSolicitud("");

    // Restablecer los mensajes de error a su estado inicial
    setErrorNombre("");
    setErrorCi("");
    setErrorDescripcion("");
    setErrorTipoSolicitud("");
  };

  const visualizarSolicitud = (soli) => {
    setVerSolicitud(soli);
    setSolicitudActual(soli);
    setMostrarSolicitud(true);
  };
  const cerrarVentana = () => {
    setMostrarSolicitud(false);
    setSolicitudActual([]);
  };
  const confirmarEstadoSolicitud = async (soli, ask) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await clienteAxios(
        `/solicitud/confirmar-estado-solicitud/${soli}/${ask}`,
        config
      );
      setAlerta({
        msg: data.msg,
        success: true,
      });
      setSolicitudActualizada((prevState) => !prevState);
    } catch (error) {
      console.log(error);
      setAlerta({
        msg: error.response.data.msg,
        success: false,
      });
    } finally {
      // Asegúrate de que el spinner se muestre durante 1 segundo
      setTimeout(() => {
        setLoading(false);
      }, 1000);
      setTimeout(() => {
        setAlerta({ msg: "" });
      }, 4000);
      setTimeout(() => {
        setMostrarSolicitud(false);
        setSolicitudActual([]);
      }, 5000);
    }
  };
  useEffect(() => {
    obtenerSolicitudes();
   }, [tipo_usuario]);

  useEffect(() => {
    obtenerSolicitudes();
  }, [solicitudActualizada]);

  const obtenerSolicitudes = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await clienteAxios(
        "/solicitud/listar-solicitudes",
        config
      );
      setSolicitud(data);
    } catch (error) {
      console.log(error);
    }
  };

  const solicitudGuardada = async (soli) => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      setLoading(true);
      let url = "";
      // Determinar la URL de la API basada en el tipo de solicitud
      if (soli?.tipo_solicitud === "Registro") {
        url = "/solicitud/crear-solicitud-registro";
      } else {
        url = "/solicitud/crear-solicitud";
      }
      const { data } = await clienteAxios.post(url, soli, config);
      setSolicitud([data, ...solicitud]);
      setAlerta({
        msg: data.msg,
        success: true,
      });
      limpiarCampos(); // Limpia los campos del formulario
      setSolicitudActualizada((prevState) => !prevState); // Actualiza el estado para reflejar los cambios
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        success: false,
      });
      console.log(error);
    } finally {
      // Asegúrate de que el spinner se muestre durante 1 segundo
      setTimeout(() => {
        setLoading(false);
      }, 1000);

      setTimeout(() => {
        setAlerta({ msg: "" });
      }, 6000);
    }
  };

  return (
    <SolicitudContext.Provider
      value={{
        confirmado,
        setConfirmado,
        mostrarSolicitud,
        solicitud,
        visualizarSolicitud,
        verSolicitud,
        cerrarVentana,
        confirmarEstadoSolicitud,
        setAlerta,
        loading,
        alerta,
        solicitudActual,
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
        handleValidarCI,
        handleValidarDescripcion,
        handleValidarNombre,
        handleValidarTipoSolicitud,
        solicitudGuardada,
      }}
    >
      {children}
    </SolicitudContext.Provider>
  );
};

export { SolicitudProvider };

export default SolicitudContext;
