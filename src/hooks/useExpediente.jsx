import { useContext } from "react";
import ExpedienteContext from "../context/ExpedienteProvider";

const useExpediente = ()=>{
    return useContext(ExpedienteContext);
}

export default useExpediente;
