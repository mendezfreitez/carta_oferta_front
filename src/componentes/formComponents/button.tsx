interface props {
  texto: string,
  funcion: () => void
}

export const Boton = ({ funcion, texto }: props) => {
  return (
    <>
      <button
        type="button"
        className="bgAzulOscuroCopec text-white btnCopec mt-3"
        onClick={funcion}
      >
        {texto}
      </button>
    </>
  )
}