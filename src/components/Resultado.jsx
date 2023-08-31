import { useMemo,useRef } from "react";
import useCotizador from "../hooks/useCotizador"
import { MARCAS,PLANES } from "../constants";

const Resultado = () => {
    const {resultado,datos} = useCotizador();
    const {marca,plan,year} = datos;

    const yearRef = useRef(year) //Congela el valor del año, y solo se va actualizar cuando oprimamos el botón de cotizar.


    const [nombreMarca] = useMemo ( () =>
        MARCAS.filter( item => item.id === Number(marca) ), //Primero pasamos la función. 
         [resultado ] //Lo que queremos validar que cambie.
      )
  
    const [nombrePlan] =useMemo ( () =>
      PLANES.filter( item => item.id === Number(plan) ), //Primero pasamos la función. 
      [resultado] //Lo que queremos validar que cambie.
    )

    if (resultado === 0) return null;
  return (
    <div className="bg-gray-100 text-center mt-5 p-5 shadow">
      <h2 className="text-gray-600 font-black text-3xl">
        Resumen 
      </h2>

      <p className="my-2">
        <span className="font-bold">Marca: </span>
        {nombreMarca.nombre}
      </p>

      <p className="my-2">
        <span className="font-bold">Plan: </span>
        {nombrePlan.nombre}
      </p>

      <p className="my-2">
        <span className="font-bold">Año del auto: </span>
        {yearRef.current}
      </p>

      <p className="my-2 text-2xl">
        <span className="font-bold">Total de la cotización: </span>
        {resultado}
      </p>
    </div>
  )
}

export default Resultado
