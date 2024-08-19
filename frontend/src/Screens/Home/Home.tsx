import Stack from '@mui/material/Stack';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";
import {AuthProvider, useAuth} from "../../Hooks/useAuth.tsx";

export default function Home() {
    const navigate = useNavigate()
    const handleLogin = () => navigate('/login')
    const {username, logout} = useAuth()

    return (
        <Stack spacing={1} sx={{my: 3, mx: 'auto'}}>
            <Typography variant="h5">Olá!</Typography>
            <AuthProvider>
                {username
                    ? <>
                        <Button color="inherit">{username}</Button>
                        <Button color="inherit" onClick={logout}>Sair</Button>
                    </>
                    : <Button variant="contained" onClick={handleLogin}>Entrar</Button>
                }
            </AuthProvider>
        </Stack>
    )
}
