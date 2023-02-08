interface props {
  funcion: (e: string) => void,
  place: string,
  valor: string,
  tipo: string,
}

export const InputText = ({ funcion, place, valor, tipo = 'text' }: props) => {
  return (
    <div className="d-flex flex-column">
      <label htmlFor="" className="ms-2">{place}</label>
      <input
        className="input inputText"
        onChange={(e) => { funcion(e.target.value) }}
        type={tipo}
        // placeholder={place}
        value={valor}
      />
    </div>
  )
}