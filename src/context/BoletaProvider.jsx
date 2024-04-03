/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import useValidation from "../hooks/useValidation";
import clienteAxios from "../config/Axios";
import useAuth from '../hooks/useAuth';
const BoletaContext = createContext();

const BoletaProvider = ({ children }) => {
  const [boleta, setBoleta] = useState([]);
  const [editBoleta, setEditBoleta] = useState([]);
  const [verBoleta, setVerBoleta] = useState([]);
  const [alerta, setAlerta] = useState({});
  const [loading, setLoading] = useState(false);
  const [boletaActualizada, setBoletaActualizada] = useState(false);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [nombre_estudiante, setNombreEstudiante] = useState("");
  const [errorNombreEstudiante, setErrorNombreEstudiante] = useState("");
  const [validoNombreEstudiante, setValidoNombreEstudiante] = useState("");
  const [telefono_estudiante, setTelefonoEstudiante] = useState("");
  const [errorTelefonoEstudiante, setErrorTelefonoEstudiante] = useState("");
  const [validoTelefonoEstudiante, setValidoTelefonoEstudiante] = useState("");
  const [ci, setCi] = useState("");
  const [errorCi, setErrorCi] = useState("");
  const [validoCi, setValidoCi] = useState("");
  const {
    setValidoNombreTutor,
    setValidoFecha,
    setValidoEscuelaActual,
    setValidoEscuelaTraslado,
    setValidoMotivoTraslado,
    setNombreTutor,
    setFecha,
    setEscuelaActual,
    setEscuelaTraslado,
    setMotivoTraslado,
  } = useValidation();
  const{auth}=useAuth();
  const{tipo_usuario}=auth;
  const limpiarDatosBoleta = ()=>{
    setNombreEstudiante("");
    setNombreTutor("");
    setTelefonoEstudiante("");
    setFecha("");
    setEscuelaActual("");
    setEscuelaTraslado("");
    setCi("");
    setMotivoTraslado("");
    setValidoNombreEstudiante("");
    setValidoNombreTutor("");
    setValidoEscuelaActual("");
    setValidoTelefonoEstudiante("");
    setValidoFecha("");
    setValidoCi("");
    setValidoEscuelaTraslado("");
    setValidoMotivoTraslado("");
  }

  const formatearFecha = (fecha)=> {
    // Dividir la cadena de fecha en sus componentes
    let dia;
   let mes ;
    let year;
    if(fecha.includes('/')){
      let partes = fecha.split('/');
     dia = partes[0];
     mes = partes[1];
     year = partes[2].split(' ')[0]; // Asegurarse de obtener solo la parte del year
    }
    if(fecha.includes('-')){
        let partes = fecha.split('-');
         dia = partes[0];
         mes = partes[1];
         year = partes[2].split(' ')[0]; // Asegurarse de obtener solo la parte del year
      }
    // Mapear el número del mes a su nombre en español
    const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    let mesNombre = meses[parseInt(mes, 10) - 1]; // Los meses en el array comienzan en 0

    // Formatear la fecha al formato deseado
    let fechaFormateada = `${dia} de ${mesNombre} del ${year}`;

    return fechaFormateada;
}
  const crearBoleta = () => {
   limpiarDatosBoleta();
    setMostrarFormulario(false);
    setEditBoleta([]);
  };
  const handleValidarTelefonoEstudiante = (valor) => {
    return new Promise((resolve, reject) => {
      if (valor === "") {
        setErrorTelefonoEstudiante("Por favor, completa este campo");
        setValidoTelefonoEstudiante("is-invalid");
        reject("Teléfono inválido");
      } else if (/^[a-zA-Z\s]*$/.test(valor)) {
        setErrorTelefonoEstudiante("No se admiten letras");
        setValidoTelefonoEstudiante("is-invalid");
        reject("Teléfono inválido");
      } else if (!/^\d{8}$/.test(valor)) {
        setErrorTelefonoEstudiante(
          "Por favor, introduce un número de teléfono válido"
        );
        setValidoTelefonoEstudiante("is-invalid");
        reject("Teléfono inválido");
      } else {
        setValidoTelefonoEstudiante("is-valid");
        setErrorTelefonoEstudiante("");
        resolve("Teléfono válido");
      }
      setTelefonoEstudiante(valor);
    });
  };
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

  const handleValidarNombreEstudiante = (valor) => {
    return new Promise((resolve, reject) => {
      if (valor === "") {
        setErrorNombreEstudiante("Por favor, completa este campo");
        setValidoNombreEstudiante("is-invalid");
        reject("Nombre del estudiante inválido");
      } else if (!/^[a-zA-Z\s]*$/.test(valor)) {
        setErrorNombreEstudiante("No se admiten números");
        setValidoNombreEstudiante("is-invalid");
        reject("Nombre del estudiante inválido");
      } else {
        setValidoNombreEstudiante("is-valid");
        setErrorNombreEstudiante("");
        resolve("Nombre del estudiante válido");
      }
      setNombreEstudiante(valor);
    });
  };
  useEffect(() => {
    obtenerBoletas();
   }, [tipo_usuario]);

  useEffect(() => {
    obtenerBoletas();
  }, [boletaActualizada]);
  const obtenerBoletas = async () => {
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
        "/boletaMovimiento/listar-boletas",
        config
      );
      setBoleta(data);
    } catch (error) {
      console.log(error);
    }
  };

  const visualizarBoleta = (bol) => {
    setVerBoleta(bol);
    setMostrarFormulario(true);
  };
  const boletaGuardado = async (boletaedit) => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    if (boletaedit?.id) {
      try {
        // Conectando con la Api

        setLoading(true);
        const { data } = await clienteAxios.put(
          `/boletaMovimiento/actualizar-boleta/${boletaedit.ci}`,
          boletaedit,
          config
        );
        setAlerta({
          msg: data.msg,
          success: true,
        });
        limpiarDatosBoleta();
        setBoletaActualizada((prevState) => !prevState);
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
          "/boletaMovimiento/crear-boleta",
          boletaedit,
          config
        );

        setBoleta([data, ...boleta]);
        setAlerta({
          msg: data.msg,
          success: true,
        });
        limpiarDatosBoleta();
        setBoletaActualizada((prevState) => !prevState);
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

  const editarBoleta = async (bol) => {
    setEditBoleta(bol);
    setMostrarFormulario(false);
  };

  return (
    <BoletaContext.Provider
      value={{
        boleta,
        alerta,
        loading,
        setAlerta,
        boletaGuardado,
        editarBoleta,
        editBoleta,
        visualizarBoleta,
        verBoleta,
        mostrarFormulario,
        setMostrarFormulario,
        crearBoleta,
        nombre_estudiante,
        setNombreEstudiante,
        errorNombreEstudiante,
        validoNombreEstudiante,
        ci,
        setCi,
        setValidoCi,
        telefono_estudiante,
        setTelefonoEstudiante,
        setValidoTelefonoEstudiante,
        errorTelefonoEstudiante,
        validoTelefonoEstudiante,
        errorCi,
        validoCi,
        handleValidarCI,
        handleValidarNombreEstudiante,
        handleValidarTelefonoEstudiante,
        formatearFecha,
        limpiarDatosBoleta
      }}
    >
      {children}
    </BoletaContext.Provider>
  );
};

export { BoletaProvider };

export default BoletaContext;
