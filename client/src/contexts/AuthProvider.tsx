import React, {useContext, useEffect, useState} from 'react'
import { auth } from '../firebase'

interface User {
    email: string | null,
    id: string | null
}

const defaultUser: User = {
    email: null,
    id: null
}

interface AuthContext {
    user: User,
    login: (email: string, password: string) => Promise<firebase.default.auth.UserCredential>,
    signup: (email: string, password: string) => Promise<firebase.default.auth.UserCredential>,
    logout: () => Promise<void>
    
}

function login(email: string, password: string) {
    return auth.signInWithEmailAndPassword(email, password)
}

function signup(email: string, password: string) {
    return auth.createUserWithEmailAndPassword(email, password)
}

function logout() {
    return auth.signOut()
}

const authContext = React.createContext<AuthContext>({
    user: defaultUser,
    login,
    signup,
    logout,
})

export function useAuth() {
    return useContext(authContext)
}

export const AuthProvider = ({ children }: any) => {
    const [user, setUser] = useState(defaultUser)

    useEffect(() => {
        const listener = auth.onAuthStateChanged(user => {
            if (user) {
                setUser({
                    email: user.email,
                    id: user.uid
                })
            }
        })
        return listener
    }, [user.email])

    const value = {
        user,
        login,
        signup,
        logout
    }

    return(
        <authContext.Provider value={value}>
            {children}
        </authContext.Provider>
    )
}