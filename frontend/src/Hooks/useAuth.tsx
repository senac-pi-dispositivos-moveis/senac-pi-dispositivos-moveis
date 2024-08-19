import {createContext, ReactNode, useContext, useMemo} from 'react';
import {useNavigate} from 'react-router-dom';
import useCookie from './useCookie';
import {AuthContextType, AuthType} from "../Types.ts";

const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = ({children}: {children?: ReactNode}) => {
    const [username, setUsername] = useCookie('user')
    const [token, setToken] = useCookie('token')
    const navigate = useNavigate()

    const login = async (data: AuthType) => {
        const {username, token} = data
        const urlParams = new URLSearchParams(window.location.search);
        setUsername(username);
        setToken(token);
        navigate(urlParams.get('next') || '/');
    }

    const logout = () => {
        setUsername('');
        setToken('');
        navigate('/', {replace: true});
    }

    const value = useMemo(
        () => ({
            username,
            token,
            login,
            logout,
        }),
        [token]
    )

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = (): AuthContextType => useContext(AuthContext) as AuthContextType