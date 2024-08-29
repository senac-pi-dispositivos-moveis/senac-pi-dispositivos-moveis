import {Navigate} from 'react-router-dom';
import {useAuth} from './Hooks/useAuth';
import {ReactNode} from "react";
import {useLocation} from 'react-router-dom';

export const ProtectedRoute = ({children}: { children?: ReactNode }) => {
    const {token} = useAuth();
    const location = useLocation();
    if (token) {
        return children
    }
    return <Navigate to={`/login?next=${location.pathname}`}/>
}