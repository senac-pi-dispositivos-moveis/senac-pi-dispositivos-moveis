import Stack from '@mui/material/Stack';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";

export default function Home() {
    const navigate = useNavigate()
    const handleLogin = () => navigate('/login')

    return (
        <Stack spacing={1} sx={{my: 3, mx: 'auto'}}>
            <Typography variant="h5">Olá!</Typography>
            <Button variant="contained" onClick={handleLogin}>Entrar</Button>
        </Stack>
    )
}
