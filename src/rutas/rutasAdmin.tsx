import { Routes, Route, Navigate } from "react-router-dom"
import { AdminLayout } from "../layouts/admin/admin"

export const RutasAdmin = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/" element={<AdminLayout />} />
    </Routes>
  )
}