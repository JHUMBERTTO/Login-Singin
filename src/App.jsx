import { Routes, Route } from "react-router-dom"
import Home  from './components/Home'
import Login  from './components/Login'
import Register  from './components/Register'
import { AuthProvider } from "./context/authContext"

const App = () => {
  return (
    <div className="bg-gray-500 h-screen text-white flex">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </AuthProvider>
    </div>
  )
}

export default App