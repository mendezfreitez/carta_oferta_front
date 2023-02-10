import { useBarraLateral } from "./tsBarraLateral"

export const BarraLateral = () => {
  const { toogleBarraLateral, visibleBarra } = useBarraLateral()

  return (
    <div className="d-flex">
      <aside className={`barraLateral ${!visibleBarra ? 'barraNoVisible' : 'barraVisible'}`}>
        <div className='d-flex justify-content-center bgAzulOscuroCopec'>
          <span className='text-white py-3'>Nombre plataforma</span>
        </div>
      </aside>
      <button
        id="btnSideBarOpen"
        className="bgAzulOscuroCopec"
        onClick={toogleBarraLateral}
      >
      </button>
    </div>
  )
}