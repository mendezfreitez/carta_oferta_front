import { FC, ReactElement } from "react"

interface inputProps {
  ejecutar: (e: string) => void,
  place: string,
  data: string
}

export const InputText = ({ ejecutar, place, data }: inputProps) => {
  // export const InputText = (ejecutar: any, place: string, data: string) => {
  return (
    <>
      <input
        onKeyUp={() => { ejecutar(EventTarget.toString()) }}
        placeholder={place}
        value={data}
      />
    </>
  )
}