import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { isAdmin } from '../utils/auth'

const AdminRoute = ({ children }) => {
  const location = useLocation()
  return isAdmin() ? children : <Navigate to="/login?role=admin" state={{ from: location.pathname }} replace />
}

export default AdminRoute