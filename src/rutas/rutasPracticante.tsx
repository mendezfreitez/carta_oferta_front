import { Routes, Route, Navigate } from "react-router-dom"
import { PracticanteLayout } from "../layouts/practicante/practicante"

export const RutasPracticante = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/" element={<PracticanteLayout />} />
    </Routes>
  )
}