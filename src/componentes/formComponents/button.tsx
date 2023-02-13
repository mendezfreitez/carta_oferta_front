interface props {
  texto: string,
  funcion: () => void
}

export const Boton = ({ funcion, texto }: props) => {
  return (
    <>
      <button
        type="button"
        className="bgAzulOscuro text-white btnNormal mt-3"
        onClick={funcion}
      >
        {texto}
      </button>
    </>
  )
}