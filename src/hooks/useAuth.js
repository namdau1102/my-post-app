import { createContext, useContext, useEffect, useState } from "react";
import { auth, init, logIn as authLogin, logOut as authLogOut } from "../lib/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()
    useEffect(() => {
        init((user) => {
            console.log(user)
            setUser(user)
        })
        auth.on('login', (user) => {
            setUser(user)
        })
        return () => {
            auth.off('login', setUser)
        }
    }, []);
    function logIn() {
        authLogin();
    }
    function logOut() {
        authLogOut(() => {
            setUser(undefined)
        })
    }
    const contextValue = {
        user,
        logIn,
        logOut
    }
    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}
export function useAuth() {
    return useContext(AuthContext);
}