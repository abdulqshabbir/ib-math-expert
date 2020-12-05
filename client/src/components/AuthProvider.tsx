import React, {useState} from 'react'

interface User {
    email: string | null,
    id: string | null
}

const defaultUser: User = {
    email: null,
    id: null
}

export const AuthContext = React.createContext<User>(defaultUser)
export const UpdateAuthContext = React.createContext((email: string, id: string) => {})

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

    return(
        <AuthContext.Provider value={user}>
            <UpdateAuthContext.Provider value={authenticateUser}>
                {children}
            </UpdateAuthContext.Provider>
        </AuthContext.Provider>
    )
}