import { useContext } from "react";
import BoletaContext from "../context/BoletaProvider";

const useBoleta = ()=>{
    return useContext(BoletaContext);
}

export default useBoleta;
