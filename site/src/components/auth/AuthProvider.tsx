import { createContext, useContext, useEffect, useState } from "react"


interface iContext{
    loginData:{
        user_id:number;
        username:string;
        acces_token:string;
        token_type:string;
        expires_in:number;
    },
    setLoginData: React.Dispatch<string>
}

const AuthContext=createContext<iContext>({} as any)

const AuthProvider: React.FC = ({children}) => {
    const [loginData, setLoginData]= useState<any>('')

useEffect(() =>{
    const session_token =sessionStorage.getItem('token');
    if(session_token) {
        setLoginData(JSON.parse(session_token))
    }
}, [children])

    return (
        <>
<AuthContext.Provider value={{loginData, setLoginData}}>
{children}
</AuthContext.Provider>
        </>
    )
}

const useAuth = () => useContext(AuthContext)

export { AuthProvider, AuthContext, useAuth }