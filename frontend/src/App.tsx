import "./App.css";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import {BrowserRouter} from "react-router-dom";
import {AuthProvider} from "./Hooks/useAuth.tsx";
import {ptBR} from '@mui/x-data-grid/locales';
import {ptBR as corePtBR} from '@mui/material/locale';
import AppRoutes from "./AppRoutes.tsx";


const defaultTheme = createTheme(
    {},
    corePtBR,
    ptBR,
);

function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <BrowserRouter>
                <Box sx={{display: "flex"}}>
                    <CssBaseline/>
                    <AuthProvider>
                        <AppRoutes/>
                    </AuthProvider>
                </Box>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
