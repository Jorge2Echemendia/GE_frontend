import { Outlet } from "react-router-dom"
import bg from "../assets/imagenes/bg.jpg";
const AuthLayout = () => {

  return (
    <div className="container row m-0 p-0 " style={{minWidth:'100vw',minHeight:'100vh', backgroundImage: `url(${bg})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}  >
      
        <Outlet />
      
    </div>
  )
}

export default AuthLayout
