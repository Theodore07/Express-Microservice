import { Route, Routes } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import HomePage from "./pages/HomePage"
import ProtectedRoute from "./components/routing/ProtectedRoute"
import AttendancePage from "./pages/AttendancePage"
import DashboardPage from "./pages/AdminDashboardPage"

const App = () => {
  return(
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={
        <ProtectedRoute>
          <HomePage />
        </ProtectedRoute>  
      } />
      <Route path="/attendance" element={
        <ProtectedRoute>
          <AttendancePage />
        </ProtectedRoute>  
      } />
      <Route path="/dashboard" element={
        <ProtectedRoute>
          <DashboardPage />
        </ProtectedRoute>  
      } />
    </Routes>
  )

}

export default App
