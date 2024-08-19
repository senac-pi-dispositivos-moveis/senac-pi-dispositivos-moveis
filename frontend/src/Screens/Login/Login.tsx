import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import React, {Fragment, useState} from "react";
import {useAuth} from "../../Hooks/useAuth.tsx";
import {API_URL} from "../../Utils/Constants.ts";
import {IconButton, Snackbar} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export const TOKEN_AUTH_URL = `${API_URL}/api-token-auth/`

export const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {login} = useAuth()
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    const handleLogin = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        let ok = false
        return fetch(TOKEN_AUTH_URL, {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                ok = response.ok
                return response.json()
            })
            .then(data => {
                if (ok) {
                    const {token} = data
                    login({username, token})
                } else {
                    setPassword('')
                    setSnackbarMessage(data.detail || data.non_field_errors[0]);
                    setSnackbarOpen(true);
                }
            })
    }

    const handleClose = (_: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return
        }
        setSnackbarOpen(false);
    }

    const snackbarAction = (
        <Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small"/>
            </IconButton>
        </Fragment>
    )

    return (
        <Container component="main" maxWidth="xs">
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={6000}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                onClose={handleClose}
                message={snackbarMessage}
                action={snackbarAction}
            />
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Typography variant="h5">
                    Acessar a plataforma
                </Typography>
                <Box
                    component="form"
                    onSubmit={handleLogin}
                    sx={{mt: 1}}
                >
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        name="username"
                        label="Nome de usuário"
                        autoComplete="username"
                        autoFocus
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="password"
                        name="password"
                        label="Senha"
                        type="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2}}
                    >
                        Acessar
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default Login;
