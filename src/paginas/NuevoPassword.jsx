import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom";
import Alerta from "../components/Alerta";
import clienteAxios from "../config/Axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import hat from "../assets/imagenes/hat.svg";
const NuevoPassword = () => {
    const[password,setPassword]=useState('');
    const[repetirPassword,setRepetirPassword]=useState('');
    const params = useParams();
    const{token}=params;
    const[alerta,setAlerta]=useState({});
    const[tokenValido,setTokenValido]=useState(false);
    const[passwordModificado,setPasswordMofificado]=useState(false);
    useEffect(()=>{
        const comprobarToken = async()=>{
            setAlerta({});
try {
    await clienteAxios(`/usuario/olvide-password/${token}`)
    setAlerta({
        msg: 'Coloca tu Nuevo Password',
        success:true
    })
    setTokenValido(true);
    
} catch (error) {
    setAlerta({
        msg:'Hubo un error con el enlace',
        success:false
    });
    
}
  };
  comprobarToken();
      
    },[]);
  
    const handleSubmit = async(e)=>{
        e.preventDefault();
      setAlerta({});
        try {
            const url = `usuario/olvide-password/${token}`;
            const {data}= await clienteAxios.post(url,{password});
            setAlerta({
                msg:data.msg,
                success:true
            });
            setPasswordMofificado(true);
        } catch (error) {
            setAlerta({
                msg:error.response.data.msg,
                success: false
            })
            
        }
    }
    



 const{msg}=alerta;
  return (
    <>
    <div
        className="col-12 col-md-6 text-center d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div>
          <p className="parrafo text-white pt-5 ">
            Reestablece tu Password y no Pierdas Acceso a la Informacion
          </p>
          <p className=" parrafo1 ">De manera facil y comoda</p>
        </div>
      </div>
      <div
        className=" col-12 col-md-6 d-flex justify-content-center align-items-center "
        style={{ height: "100vh" }}
      >
        <div className="caja mt-3" style={{ width: "400px", height: "auto" }}>
          <Link
          to="/"
          >
          <div className="thumbnail mt-3">
            <img src={hat} style={{ display: "block", width: "100%" }} />
          </div></Link>
          <div className="mx-3 pb-3 d-flex justify-content-center align-items-center mensaje">
            {msg && <Alerta alerta={alerta}/>} </div>
           {tokenValido && (<>
  <form className="px-4 mt-3"
  onSubmit={handleSubmit}
  noValidate
  > 
  <div className="mb-2 form-floating ">
  <input type="password" className={`form-control`} id="password" placeholder="Ingresa tu password" value={password} onChange={(e)=>setPassword(e.target.value)} required  />
  <label htmlFor="password" className="form-label">Contraseña</label>
   </div>
   
   <div className="mb-2 form-floating ">
  <input type="password" className={`form-control `} id="repeatpassword" placeholder="Ingresa tu password" value={repetirPassword} onChange={(e)=>setRepetirPassword(e.target.value)} required  />
  <label htmlFor="repeatpassword" className="form-label">Repetir Contraseña</label>
   </div>
   <div className="px-10 py-auto d-flex justify-content-center align-items-center " style={{width:"100%"}}>
    <button
      type="submit"
      className="btn btn-primary mb-4 mt-3 boton-primario"
      style={{ fontSize: '1rem', padding: '0.5rem 1rem', width:'150px'}}
    >
      Guardar Nuevo Password
    </button>
    </div>
  </form>
  
  
   
  </>
)}
{passwordModificado &&  <div className="text-center my-2 px-4 py-2 d-flex  justify-content-center align-items-center">
        <Link
          to="/principal/autenticar"
          className="text-decoration-none text-dark fs-6 mx-2 md-2 d-inline linea"
        >
          Iniciar Sesión
        </Link>
  </div>}
     
        </div>
      </div>
    </>
  )
}

export default NuevoPassword;
