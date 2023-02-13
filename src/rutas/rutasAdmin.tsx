import { RevisionRenta } from "../views/admin/revisionRenta"
import { AdminLayout } from "../layouts/admin/_contenedor"
import { Routes, Route, Navigate } from "react-router-dom"
import { Movimientos } from "../views/admin/movimientos"
import { CartaOferta } from "../views/admin/cartaOferta"


export const RutasAdmin = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/" element={<AdminLayout />}>
        <Route path="/cartaOferta" element={<CartaOferta />} />
        <Route path="/cartaOferta/*" element={<Navigate to="/cartaOferta" />} />

        <Route path="/movimientos" element={<Movimientos />} />
        <Route path="/movimientos/*" element={<Navigate to="/movimientos" />} />

        <Route path="/revisionRenta" element={<RevisionRenta />} />
        <Route path="/revisionRenta/*" element={<Navigate to="/revisionRenta" />} />
      </Route>
    </Routes>
  )
}