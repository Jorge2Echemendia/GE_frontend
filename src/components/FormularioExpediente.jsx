import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faSave } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import useValidation from '../hooks/useValidation';
import useAuth from '../hooks/useAuth';
import Alerta from './Alerta';
import useExpediente from "../hooks/useExpediente";
import Spinner from './Spinner';
import { useEffect, useState } from 'react';


const FormularioExpediente = ()=>{
    const{auth}=useAuth();
    const{tipo_usuario}=auth;
    const {
        ci, setCi,
        errorCi, 
        validoCi, 
        nombre_estudiante, setNombreEstudiante,
        errorNombreEstudiante,
        validoNombreEstudiante, 
        telefono_estudiante, setTelefonoEstudiante,
        apellido_estudiante, setApellido,
        errorApellidoEstudiante,
        validoApellidoEstudiante,
        direccion_estudiante,setDireccion,validoDireccion,errorDireccion,
        promedio, setPromedio,
        errorPromedio,
        validoPromedio, 
        errorTelefonoEstudiante, 
        validoTelefonoEstudiante,
        handleValidarNombreEstudiante,
        handleValidarTelefonoEstudiante,
        handleValidarPromedio,
        handleValidarDireccion,
        handleValidarCI,
        handleValidarApellidoEstudiante
     } = useValidation();
     const{setAlerta,loading,alerta,expedienteGuardado,expedienteGuardadoP,editExpediente, limpiarDatosExpediente}=useExpediente();
     const[id,setId]=useState(null);
     useEffect(()=>{
      if(editExpediente?.nombre_estudiante){
        setNombreEstudiante(editExpediente.nombre_estudiante);
        setApellido(editExpediente.apellido_estudiante);
        setTelefonoEstudiante(editExpediente.telefono_estudiante);
        setDireccion(editExpediente.direccion_estudiante);
        setPromedio(editExpediente.promedio);
        setCi(editExpediente.ci);
        setId(editExpediente.id_expediente);
      }

     // eslint-disable-next-line react-hooks/exhaustive-deps
     },[editExpediente])
   
   
     
     const handleSubmit = async (e) => {
       e.preventDefault();
       // Espera a que se completen todas las validaciones
   
       await Promise.all([
         handleValidarNombreEstudiante(nombre_estudiante),
         handleValidarApellidoEstudiante(apellido_estudiante),
         handleValidarTelefonoEstudiante(telefono_estudiante),
         handleValidarDireccion(direccion_estudiante),
         handleValidarPromedio(promedio),
         handleValidarCI(ci)
       ]);
       setAlerta({});
        if(tipo_usuario==='Secretaria'){
       expedienteGuardado({nombre_estudiante,apellido_estudiante,telefono_estudiante,direccion_estudiante
      ,promedio,ci,id:editExpediente.id_expediente});
    }else{
        expedienteGuardadoP({nombre_estudiante,apellido_estudiante,telefono_estudiante,direccion_estudiante
            ,promedio,ci,id:editExpediente.id_expediente}); 
    }
    }
  
    const { msg } = alerta;



    return(
        <div className="form-container caja text-center py-4">
            <h2 className='mb-4 mt-2'>{editExpediente?.nombre_estudiante ? 'Editando Expediente': 'Crear Nuevo Expediente'}</h2>
            <div className="mx-3 d-flex justify-content-center align-items-center mensaje">
            {loading ? <Spinner /> : msg && <Alerta alerta={alerta} />} </div>
        <form className="px-4 mt-3 row"
        onSubmit={handleSubmit}
        noValidate
        >
            <div className="form-row">
                <div className="col-md-12">
                    <div className="form-group form-floating mb-2">
                        <input type="text" className={`form-control ${validoNombreEstudiante}`} id="nombreCompleto" placeholder="Ingrese su nombre completo" value={nombre_estudiante} onChange={e=>setNombreEstudiante(e.target.value)} />
                        <label htmlFor="nombreCompleto" className="form-label">Nombre Completo</label>
                        {errorNombreEstudiante && <div className="invalido">{errorNombreEstudiante}</div>}
                    </div>
                    <div className="form-group form-floating mb-2">
                        <input type="text" className={`form-control ${validoApellidoEstudiante}`} id="apellidos" placeholder="Ingrese sus apellidos" value={apellido_estudiante} onChange={e=>setApellido(e.target.value)} />
                        <label htmlFor="apellidos" className="form-label">Apellidos</label>
                        {errorApellidoEstudiante && <div className="invalido">{errorApellidoEstudiante}</div>}
                       
                    </div>
                    <div className="form-group form-floating mb-2">
                        <input type="text" className={`form-control ${validoCi}`} id="carnetIdentidad" placeholder="Ingrese su número de carnet de identidad" value={ci} onChange={e=>setCi(e.target.value)}/>
                        <label htmlFor="carnetIdentidad" className="form-label">Carnet de Identidad</label>
                        {errorCi && <div className="invalido">{errorCi}</div>}
                        
                    </div>
                    <div className="form-group form-floating mb-2">
                       <input type="text" className={`form-control ${validoDireccion}`} id="direccion" placeholder="Ingrese su Dirección actual" value={direccion_estudiante} onChange={e=>setDireccion(e.target.value)}/>
                       <label htmlFor="direccion" className="form-label">Dirección</label>
                       {errorDireccion && <div className="invalido">{errorDireccion}</div>}
                        
                    </div>
                    <div className="form-group form-floating mb-2">
                        <input type="text" className= {`form-control ${validoTelefonoEstudiante}`} id="telefono" placeholder="Ingrese un número de contacto" value={telefono_estudiante} onChange={e=>setTelefonoEstudiante(e.target.value)}/>
                        <label htmlFor="telefono" className="form-label">Telefono de Contacto</label>
                        {errorTelefonoEstudiante && <div className="invalido">{errorTelefonoEstudiante}</div>}
                       
                    </div>
                    <div className="form-group form-floating mb-3">
                        <input type="text" className={`form-control ${validoPromedio}`} id="promedio" placeholder="Ingrese el promedio del estudiante" value={promedio} onChange={e=>setPromedio(e.target.value)}/>
                        <label htmlFor="promedio" className="form-label">Promedio</label>
                        {errorPromedio && <div className="invalido">{errorPromedio}</div>}
                    </div>
                </div>
            </div>

            <div className="form-actions text-center py-3">
                <button
                    type="button"
                    className="btn btn-cancelar btn-lg "
                    onClick={()=>limpiarDatosExpediente()}
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
    )

}
export default FormularioExpediente;