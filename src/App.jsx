import { Routes, Route } from "react-router-dom"
import Home  from './components/Home'
import Login  from './components/Login'
import Singup  from './components/Singup'
import { AuthProvider } from "./context/authContext"
import { ProtectedRoute } from './components/ProtectedRoute'

const App = () => {
  return (
    <div className="bg-gray-400 h-screen text-black flex">
      <AuthProvider>
        <Routes>
          <Route path="/" element={
            <ProtectedRoute>
              <Home/>
            </ProtectedRoute>
          }/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/singup" element={<Singup/>}/>
        </Routes>
      </AuthProvider>
    </div>
  )
}

export default App