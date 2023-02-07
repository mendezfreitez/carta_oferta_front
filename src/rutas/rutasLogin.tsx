import { Routes, Route, Navigate } from "react-router-dom"
import { Login } from "../layouts/login/login"

export const RutasLogin = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/login" />} />
      <Route path="/" element={<Login />} />
    </Routes>
  )
}