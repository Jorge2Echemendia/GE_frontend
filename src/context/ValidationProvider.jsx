import { useState, createContext } from "react";
const ValidationContext = createContext();

// eslint-disable-next-line react/prop-types
const ValidationProvider = ({ children }) => {
  const [activoHome, setActivoHome] = useState("active");
  const [activoExpediente, setActivoExpediente] = useState("");
  const [activoBoleta, setActivoBoleta] = useState("");
  const [activoSolicitudP, setActivoSolicitudP] = useState("");
  const [activoSolicitudT, setActivoSolicitudT] = useState("");
  const [activoBandeja, setActivoBandeja] = useState("");
  const [errorNombre, setErrorNombre] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorRepetirPassword, setErrorRepetirPassword] = useState("");
  const [errorTelefono, setErrorTelefono] = useState("");
  const [errorTipoDeUsuario, setErrorTipoDeUsuario] = useState("");
  const [validoNombre, setValidoNombre] = useState("");
  const [validoEmail, setValidoEmail] = useState("");
  const [validoPassword, setValidoPassword] = useState("");
  const [validoRepetirPassword, setValidoRepetirPassword] = useState("");
  const [validoTelefono, setValidoTelefono] = useState("");
  const [validoTipoDeUsuario, setValidoTipoDeUsuario] = useState("");
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [password, setPassword] = useState("");
  const [repetirPassword, setRepetirPassword] = useState("");
  const [tipo_usuario, setTipoDeUsuario] = useState("");
  const [ci, setCi] = useState("");
  const [errorCi, setErrorCi] = useState("");
  const [validoCi, setValidoCi] = useState("");
  const [nombre_estudiante, setNombreEstudiante] = useState("");
  const [errorNombreEstudiante, setErrorNombreEstudiante] = useState("");
  const [validoNombreEstudiante, setValidoNombreEstudiante] = useState("");
  const [nombre_tutor, setNombreTutor] = useState("");
  const [errorNombreTutor, setErrorNombreTutor] = useState("");
  const [validoNombreTutor, setValidoNombreTutor] = useState("");
  const [telefono_estudiante, setTelefonoEstudiante] = useState("");
  const [errorTelefonoEstudiante, setErrorTelefonoEstudiante] = useState("");
  const [validoTelefonoEstudiante, setValidoTelefonoEstudiante] = useState("");
  const [fecha, setFecha] = useState("");
  const [errorFecha, setErrorFecha] = useState("");
  const [validoFecha, setValidoFecha] = useState("");
  const [escuela_actual, setEscuelaActual] = useState("");
  const [errorEscuelaActual, setErrorEscuelaActual] = useState("");
  const [validoEscuelaActual, setValidoEscuelaActual] = useState("");
  const [escuela_traslado, setEscuelaTraslado] = useState("");
  const [errorEscuelaTraslado, setErrorEscuelaTraslado] = useState("");
  const [validoEscuelaTraslado, setValidoEscuelaTraslado] = useState("");
  const [motivo_traslado, setMotivoTraslado] = useState("");
  const [errorMotivoTraslado, setErrorMotivoTraslado] = useState("");
  const [validoMotivoTraslado, setValidoMotivoTraslado] = useState("");
  const [apellido_estudiante, setApellido] = useState("");
  const [errorApellidoEstudiante, setErrorApellidoEstudiante] = useState("");
  const [validoApellidoEstudiante, setValidoApellidoEstudiante] = useState("");
  const [promedio, setPromedio] = useState("");
  const [errorPromedio, setErrorPromedio] = useState("");
  const [validoPromedio, setValidoPromedio] = useState("");
  const [direccion_estudiante, setDireccion] = useState("");
  const [errorDireccion, setErrorDireccion] = useState("");
  const [validoDireccion, setValidoDireccion] = useState("");
  const [confirmado, setConfirmado] = useState(null);

  const handleActivo = (enlace) => {
    switch (enlace) {
      case "home":
        setActivoHome("active");
        setActivoExpediente("");
        setActivoBoleta("");
        setActivoSolicitudT("");
        setActivoSolicitudP("");
        setActivoBandeja("");
        break;
      case "expediente":
        setActivoHome("");
        setActivoExpediente("active");
        setActivoBoleta("");
        setActivoSolicitudT("");
        setActivoSolicitudP("");
        setActivoBandeja("");
        break;
      case "boleta":
        setActivoHome("");
        setActivoExpediente("");
        setActivoBoleta("active");
        setActivoSolicitudT("");
        setActivoSolicitudP("");
        setActivoBandeja("");
        break;
      case "solicitudP":
        setActivoHome("");
        setActivoExpediente("");
        setActivoBoleta("");
        setActivoSolicitudT("");
        setActivoSolicitudP("active");
        setActivoBandeja("");
        break;
      case "solicitudT":
        setActivoHome("");
        setActivoExpediente("");
        setActivoBoleta("");
        setActivoSolicitudT("active");
        setActivoSolicitudP("");
        setActivoBandeja("");
        break;
      case "bandeja":
        setActivoHome("");
        setActivoExpediente("");
        setActivoBoleta("");
        setActivoSolicitudT("");
        setActivoSolicitudP("");
        setActivoBandeja("active");
        break;
      default:
        break;
    }
  };
  const handleValidarNombre = (valor) => {
    return new Promise((resolve, reject) => {
      if (valor === "") {
        setErrorNombre("Por favor, completa este campo");
        setValidoNombre("is-invalid");
        reject("Nombre inválido");
      } else if (!/^[a-zA-Z\s]*$/.test(valor)) {
        setErrorNombre("No se admiten números");
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

  const handleValidarEmail = (valor) => {
    return new Promise((resolve, reject) => {
      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (valor === "") {
        setErrorEmail("Por favor, completa este campo");
        setValidoEmail("is-invalid");
        reject("Email inválido");
      } else if (!regex.test(valor)) {
        setErrorEmail("Por favor, introduce un email válido");
        setValidoEmail("is-invalid");
        reject("Email inválido");
      } else {
        setValidoEmail("is-valid");
        setErrorEmail("");
        resolve("Email válido");
      }
      setEmail(valor);
    });
  };

  const handleValidarTelefono = (valor) => {
    return new Promise((resolve, reject) => {
      if (valor === "") {
        setErrorTelefono("Por favor, completa este campo");
        setValidoTelefono("is-invalid");
        reject("Teléfono inválido");
      } else if (/^[a-zA-Z\s]*$/.test(valor)) {
        setErrorTelefono("No se admiten letras");
        setValidoTelefono("is-invalid");
        reject("Teléfono inválido");
      } else if (!/^\d{8}$/.test(valor)) {
        setErrorTelefono("Por favor, introduce un número de teléfono válido");
        setValidoTelefono("is-invalid");
        reject("Teléfono inválido");
      } else {
        setValidoTelefono("is-valid");
        setErrorTelefono("");
        resolve("Teléfono válido");
      }
      setTelefono(valor);
    });
  };

  const handleValidarPassword = () => {
    return new Promise((resolve, reject) => {
      if (password.length < 8) {
        setErrorPassword("La contraseña debe tener al menos 8 caracteres");
        setValidoPassword("is-invalid");
        reject("Contraseña inválida");
      } else if (password === "") {
        setErrorPassword("Por favor, completa este campo");
        setValidoPassword("is-invalid");
        reject("Contraseña inválida");
      } else {
        setValidoPassword("is-valid");
        setErrorPassword("");
        resolve("Contraseña válida");
      }
      setPassword(password);
    });
  };

  const handleValidarRepetirPassword = (valor) => {
    return new Promise((resolve, reject) => {
      if (password !== valor) {
        setErrorRepetirPassword("Las contraseñas no coinciden");
        setValidoRepetirPassword("is-invalid");
        reject("Contraseñas no coinciden");
      } else if (valor === "") {
        setErrorRepetirPassword("Por favor, completa este campo");
        setValidoRepetirPassword("is-invalid");
        reject("Contraseñas no coinciden");
      } else {
        setErrorRepetirPassword("");
        setValidoRepetirPassword("is-valid");
        resolve("Contraseñas coinciden");
      }
      setRepetirPassword(valor);
    });
  };

  const handleValidarTipoDeUsuario = (tipoDeUsuario) => {
    return new Promise((resolve, reject) => {
      if (tipoDeUsuario === "") {
        setErrorTipoDeUsuario("Por favor, selecciona un tipo de usuario");
        setValidoTipoDeUsuario("is-invalid");
        reject("Tipo de usuario inválido");
      } else {
        setTipoDeUsuario(tipoDeUsuario);
        setErrorTipoDeUsuario("");
        setValidoTipoDeUsuario("is-valid");
        resolve("Tipo de usuario válido");
      }
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

  const handleValidarApellidoEstudiante = (valor) => {
    return new Promise((resolve, reject) => {
      if (valor === "") {
        setErrorApellidoEstudiante("Por favor, completa este campo");
        setValidoApellidoEstudiante("is-invalid");
        reject("Apellido del estudiante inválido");
      } else if (!/^[a-zA-Z\s]*$/.test(valor)) {
        setErrorApellidoEstudiante("No se admiten números");
        setValidoApellidoEstudiante("is-invalid");
        reject("Apellido del estudiante inválido");
      } else {
        setValidoApellidoEstudiante("is-valid");
        setErrorApellidoEstudiante("");
        resolve("Apellido del estudiante válido");
      }
      setApellido(valor);
    });
  };

  const handleValidarNombreTutor = (valor) => {
    return new Promise((resolve, reject) => {
      if (valor === "") {
        setErrorNombreTutor("Por favor, completa este campo");
        setValidoNombreTutor("is-invalid");
        reject("Nombre del tutor inválido");
      } else if (!/^[a-zA-Z\s]*$/.test(valor)) {
        setErrorNombreTutor("No se admiten números");
        setValidoNombreTutor("is-invalid");
        reject("Nombre del tutor inválido");
      } else {
        setValidoNombreTutor("is-valid");
        setErrorNombreTutor("");
        resolve("Nombre del tutor válido");
      }
      setNombreTutor(valor);
    });
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

  const handleValidarFecha = (valor) => {
    return new Promise((resolve, reject) => {
      // Expresión regular para validar el formato "DD/MM/YYYY"
      const regex =
        /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;

      if (valor === "") {
        setErrorFecha("Por favor, completa este campo");
        setValidoFecha("is-invalid");
        reject("Fecha inválida");
      } else if (!regex.test(valor)) {
        setErrorFecha("Formato de fecha inválido.");
        setValidoFecha("is-invalid");
        reject("Formato de fecha inválido");
      } else {
        setValidoFecha("is-valid");
        setErrorFecha("");
        resolve("Fecha válida");
      }

      setFecha(valor);
    });
  };

  const handleValidarEscuelaActual = (valor) => {
    return new Promise((resolve, reject) => {
      if (valor === "") {
        setErrorEscuelaActual("Por favor, completa este campo");
        setValidoEscuelaActual("is-invalid");
        reject("Escuela actual inválida");
      } else {
        setValidoEscuelaActual("is-valid");
        setErrorEscuelaActual("");
        resolve("Escuela actual válida");
      }
      setEscuelaActual(valor);
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
  const handleValidarEscuelaTraslado = (valor) => {
    return new Promise((resolve, reject) => {
      if (valor === "") {
        setErrorEscuelaTraslado("Por favor, completa este campo");
        setValidoEscuelaTraslado("is-invalid");
        reject("Escuela de traslado inválida");
      } else {
        setValidoEscuelaTraslado("is-valid");
        setErrorEscuelaTraslado("");
        resolve("Escuela de traslado válida");
      }
      setEscuelaTraslado(valor);
    });
  };

  const handleValidarMotivoTraslado = (valor) => {
    return new Promise((resolve, reject) => {
      if (valor === "") {
        setErrorMotivoTraslado("Por favor, completa este campo");
        setValidoMotivoTraslado("is-invalid");
        reject("Motivo de traslado inválido");
      } else {
        setValidoMotivoTraslado("is-valid");
        setErrorMotivoTraslado("");
        resolve("Motivo de traslado válido");
      }
      setMotivoTraslado(valor);
    });
  };

  const handleValidarPromedio = (valor) => {
    return new Promise((resolve, reject) => {
      if (valor === "") {
        setErrorPromedio("Por favor, completa este campo");
        setValidoPromedio("is-invalid");
        reject("Promedio inválido");
      } else if (!/^\d{1,3}$/.test(valor)) {
        setErrorPromedio(
          "Por favor, introduce un promedio válido entre 0 y 100"
        );
        setValidoPromedio("is-invalid");
        reject("Promedio inválido");
      } else {
        setValidoPromedio("is-valid");
        setErrorPromedio("");
        resolve("Promedio válido");
      }
      setPromedio(valor);
    });
  };
  const handleValidarDireccion = (valor) => {
    return new Promise((resolve, reject) => {
      if (valor === "") {
        setErrorDireccion("Por favor, completa este campo");
        setValidoDireccion("is-invalid");
        reject("Dirección inválida");
      } else {
        setValidoDireccion("is-valid");
        setErrorDireccion("");
        resolve("Dirección válida");
      }
      setDireccion(valor);
    });
  };

  return (
    <ValidationContext.Provider
      value={{
        activoBoleta,
        activoExpediente,
        activoHome,
        activoSolicitudP,
        activoSolicitudT,
        activoBandeja,
        handleActivo,
        errorNombre,
        errorEmail,
        errorPassword,
        errorTelefono,
        errorRepetirPassword,
        errorTipoDeUsuario,
        errorCi,
        validoCi,
        validoNombre,
        validoEmail,
        validoTelefono,
        validoPassword,
        validoRepetirPassword,
        validoTipoDeUsuario,
        handleValidarNombre,
        handleValidarEmail,
        handleValidarTelefono,
        handleValidarPassword,
        handleValidarRepetirPassword,
        handleValidarTipoDeUsuario,
        handleValidarCI,
        nombre,
        setNombre,
        email,
        setEmail,
        telefono,
        setTelefono,
        password,
        setPassword,
        repetirPassword,
        setRepetirPassword,
        tipo_usuario,
        setTipoDeUsuario,
        ci,
        setCi,
        setValidoNombre,
        setValidoEmail,
        setValidoPassword,
        setValidoRepetirPassword,
        setValidoTelefono,
        setValidoTipoDeUsuario,
        nombre_estudiante,
        setNombreEstudiante,
        errorNombreEstudiante,
        validoNombreEstudiante,
        nombre_tutor,
        setNombreTutor,
        errorNombreTutor,
        validoNombreTutor,
        telefono_estudiante,
        setTelefonoEstudiante,
        errorTelefonoEstudiante,
        validoTelefonoEstudiante,
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
        apellido_estudiante,
        setApellido,
        errorApellidoEstudiante,
        validoApellidoEstudiante,
        promedio,
        setPromedio,
        errorPromedio,
        validoPromedio,
        confirmado,
        setConfirmado,
        handleValidarNombreEstudiante,
        handleValidarTelefonoEstudiante,
        handleValidarPromedio,
        handleValidarNombreTutor,
        handleValidarEscuelaActual,
        handleValidarEscuelaTraslado,
        handleValidarFecha,
        handleValidarMotivoTraslado,
        handleValidarApellidoEstudiante,
        direccion_estudiante,
        setDireccion,
        validoDireccion,
        errorDireccion,
        handleValidarDireccion,
        setValidoApellidoEstudiante,
        setValidoNombreEstudiante,
        setValidoTelefonoEstudiante,
        setValidoCi,
        setValidoDireccion,
        setValidoEscuelaActual,
        setValidoEscuelaTraslado,
        setValidoFecha,
        setValidoPromedio,
        setValidoNombreTutor,
        setValidoMotivoTraslado,
      }}
    >
      {children}
    </ValidationContext.Provider>
  );
};
export { ValidationProvider };

export default ValidationContext;
