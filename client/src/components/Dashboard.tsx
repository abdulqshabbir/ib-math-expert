import React, { useContext } from 'react'
import { AuthContext } from './AuthProvider'
import { Message } from 'semantic-ui-react'

export const DashBoard = () => {
    const user = useContext(AuthContext)
    let Render = null
    if (user.id !== null) {
        Render = 
            <Message positive>
                <p>
                    You are logged in as {user.email}
                </p>
            </Message>
    }
    return Render
}