/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import clienteAxios from "../config/Axios";
import useAuth from '../hooks/useAuth';
import useValidation from "../hooks/useValidation";

const ExpedienteContext = createContext();

const ExpedienteProvider = ({ children }) => {
  const [expediente, setExpediente] = useState([]);
  const [editExpediente, setEditExpediente] = useState([]);
  const [verExpediente, setVerExpediente] = useState([]);
  const [alerta, setAlerta] = useState({});
  const [loading, setLoading] = useState(false);
  const [expedienteActualizado, setExpedienteActualizado] = useState(false);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const[mostrarEdicion,setMostrarEdicion]=useState(false);
  const {
    setValidoNombreEstudiante,
    setValidoApellidoEstudiante,
    setValidoTelefonoEstudiante,
    setValidoCi,
    setValidoDireccion,
    setValidoPromedio,
    setNombreEstudiante,
    setApellido,
    setTelefonoEstudiante,
    setDireccion,
    setPromedio,
    setCi,
  } = useValidation();
  const{auth}=useAuth();
  const{tipo_usuario}=auth;
  

  const limpiarDatosExpediente = () => {
    setNombreEstudiante("");
    setApellido("");
    setTelefonoEstudiante("");
    setDireccion("");
    setPromedio("");
    setCi("");
    setValidoNombreEstudiante("");
    setValidoApellidoEstudiante("");
    setValidoDireccion("");
    setValidoTelefonoEstudiante("");
    setValidoPromedio("");
    setValidoCi("");
  };
  useEffect(() => {
    obtenerExpedientes();
   }, [tipo_usuario]);
  useEffect(() => {
    obtenerExpedientes();
  }, [expedienteActualizado]);
  const obtenerExpedientes = async () => {
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
        "expediente/listar-expedientes",
        config
      );
      setExpediente(data);
    } catch (error) {
      console.log(error);
    }
  };
 
  const visualizarExpediente = (ex) => {
    setVerExpediente(ex);
    setMostrarFormulario(true);
    setMostrarEdicion(false)
  };
  const crearExpediente = () => {
    limpiarDatosExpediente();
    setMostrarFormulario(false);
    setEditExpediente([]);
  };

  const expedienteGuardado = async (expedienteedit) => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    if (expedienteedit?.id) {
      try {
        // Conectando con la Api

        setLoading(true);
        const { data } = await clienteAxios.put(
          `expediente/actualizar-expediente/${expedienteedit.ci}`,
          expedienteedit,
          config
        );
        setAlerta({
          msg: data.msg,
          success: true,
        });
        limpiarDatosExpediente();
        setExpedienteActualizado((prevState) => !prevState);
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
        }, 7000);
      }
    } else {
      try {
        // Conectando con la Api

        setLoading(true);
        const { data } = await clienteAxios.post(
          "/expediente/crear-expediente",
          expedienteedit,
          config
        );
        setExpediente([data, ...expediente]);
        setAlerta({
          msg: data.msg,
          success: true,
        });
        limpiarDatosExpediente();
        setExpedienteActualizado((prevState) => !prevState);
      } catch (error) {
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
        }, 7000);
      }
    }
  };
  const expedienteGuardadoP = async (expedienteedit) => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    if (expedienteedit?.id) {
      try {
        // Conectando con la Api
 console.log(expedienteedit.ci)
        setLoading(true);
        const { data } = await clienteAxios.put(
          `expediente/actualizar-expediente-profesor/${expedienteedit.ci}`,
          expedienteedit,
          config
        );
        setAlerta({
          msg: data.msg,
          success: true,
        });
        limpiarDatosExpediente();
        setExpedienteActualizado((prevState) => !prevState);
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
        }, 5000);
        setTimeout(() => {
          setMostrarEdicion(false);
          limpiarDatosExpediente();
        }, 6000);
      }
    }
  };

  const editarExpediente = async (exped) => {
    setEditExpediente(exped);
    setMostrarFormulario(false);
    setMostrarEdicion(true);
  };

  return (
    <ExpedienteContext.Provider
      value={{
        expediente,
        alerta,
        loading,
        setAlerta,
        expedienteGuardado,
        editarExpediente,
        editExpediente,
        visualizarExpediente,
        verExpediente,
        mostrarFormulario,
        setMostrarFormulario,
        crearExpediente,
        expedienteGuardadoP,
        limpiarDatosExpediente,
        setMostrarEdicion,mostrarEdicion
      }}
    >
      {children}
    </ExpedienteContext.Provider>
  );
};

export { ExpedienteProvider };

export default ExpedienteContext;
