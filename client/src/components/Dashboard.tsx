import { useAuth } from '../contexts/AuthProvider'
import { Message } from 'semantic-ui-react'

export const DashBoard = () => {
    const user = useAuth()
    let Render = null
    if (user.id !== null) {
        Render = 
            <Message positive>
                You are logged in as {user.email}
            </Message>
    }
    return Render
}