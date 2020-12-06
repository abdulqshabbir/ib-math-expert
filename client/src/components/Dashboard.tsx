import React from 'react'
import { useAuth } from '../contexts/AuthProvider'
import { Message } from 'semantic-ui-react'

export const DashBoard = () => {
    const user = useAuth()
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