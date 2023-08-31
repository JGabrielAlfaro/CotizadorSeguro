import { useContext } from "react";
import CotizadorContext from "../context/ContizadorProvider";

const useCotizador = () =>{

    return useContext(CotizadorContext)
}

export default useCotizador;