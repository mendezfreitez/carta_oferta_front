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