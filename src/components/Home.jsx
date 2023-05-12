import { useAuth } from "../context/authContext"

const Home = () => {
  const {user, logout, loading} = useAuth()
  const handleLogout = async () =>{
   try{
    await logout()
   }catch(error){
    console.error(error)
   }
  }

  if (loading)  return <h1>loading</h1>
  
  
  return (
    <div>
      <h1>
        Welcome{user.displayName || user.email}
      </h1>
      <button onClick={handleLogout}>
        logout
      </button>
    </div>
  )
}

export default Home