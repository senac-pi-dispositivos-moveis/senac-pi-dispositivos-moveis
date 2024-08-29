import {Route, Routes} from "react-router-dom";
import Home from "./Screens/Home/Home.tsx";
import Login from "./Screens/Login/Login.tsx";
// import {ProtectedRoute} from "./ProtectedRoute.tsx";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={<Home/>}
            />
            <Route
                path="/login"
                element={<Login/>}
            />
            {/*<Route*/}
            {/*    path="/foo"*/}
            {/*    element={*/}
            {/*        <ProtectedRoute>*/}
            {/*            <Foo/>*/}
            {/*        </ProtectedRoute>*/}
            {/*    }*/}
            {/*/>*/}
        </Routes>
    )
}

export default AppRoutes