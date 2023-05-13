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
    <div className="w-full max-w-md m-auto text-white">
      <div className="bg-gray-700 shadow-lg rounded-3xl px-8 pt-6 pb-8 mb-4">
        <h1>
          Welcome {user.displayName || user.email}
        </h1>
        <div className='flex justify-end mt-10'>
          <button onClick={handleLogout} className='bg-sky-600 text-white  hover:bg-sky-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Logout</button>
        </div>
      </div>
    </div>
  )
}

export default Home