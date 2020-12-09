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

const AuthContext = React.createContext<User>(defaultUser)
const UpdateAuthContext = React.createContext((email: string, id: string) => {})

export function useAuth() {
    return useContext(AuthContext)
}

export function useAuthUpdate() {
    return useContext(UpdateAuthContext)
}

export const AuthProvider = ({ children }: any) => {

    const [user, setUser] = useState(defaultUser)

    function authenticateUser(email: string, id: string) {
        setUser(prevState => {
            return {
                ...prevState,
                email,
                id
            }
        })
    }

    useEffect(() => {
        const listener = auth.onAuthStateChanged(user => {
            if (user && user.email) {
                setUser(prevState => {
                    return {
                        ...prevState,
                        email: user.email,
                        id: user.uid
                    }
                })
            }
        })
        return listener
    }, [])

    return(
        <AuthContext.Provider value={user}>
            <UpdateAuthContext.Provider value={authenticateUser}>
                {children}
            </UpdateAuthContext.Provider>
        </AuthContext.Provider>
    )
}