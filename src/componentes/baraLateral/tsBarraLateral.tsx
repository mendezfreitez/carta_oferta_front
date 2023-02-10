import { useEffect, useState } from "react"

export const useBarraLateral = () => {
  const [visibleBarra, setVisibleBarra] = useState<boolean>(true);

  const toogleBarraLateral = () => {
    setVisibleBarra(!visibleBarra);

    // setVisibleBarra(window.innerWidth > 999 ? 'barraVisible' : 'barraNoVisible');
  }

  useEffect(() => { toogleBarraLateral() }, []);

  return {
    toogleBarraLateral, visibleBarra
  }
}

export const listaSidebarAdmin = [
  {
    ruta:'/cartaOferta',
    nombre: 'Carta oferta',
    icono: 'carta'
  },
  {
    ruta:'/movimientos',
    nombre: 'Movimientos',
    icono: 'movimientos'
  },
  {
    ruta:'/revisionRenta',
    nombre: 'Revisión de renta',
    icono: 'revision'
  },
]