import { Route, Redirect } from 'react-router-dom'
import { useAuth } from '../contexts/AuthProvider'

interface IProps {
    component: React.FC,
    path: string,
    exact: boolean
}

export const PrivateRoute = ({ component: Component, path, exact }: IProps) => {
    const { user } = useAuth()

    let isPrivateRouteRendered = user.email ? true : false

    console.log('logged in user', user)

    console.log('is private route rendered', isPrivateRouteRendered)

    return isPrivateRouteRendered ?
        <Route path={path} exact={exact} component={Component} /> :
        <Redirect to='/login' />
}