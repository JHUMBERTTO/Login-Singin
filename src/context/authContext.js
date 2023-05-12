import { createContext, useContext } from 'react';

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext)
  return context
} 

export function AuthProvider ({children}){
  const user ={
    login: true
  }

  return(
    <context.Provider value={{user}}>
      {children}
    </context.Provider>
  )
}