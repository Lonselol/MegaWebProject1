import { useContext } from "react";
import { AuthContext, AuthContextProvider } from "../contexts/AuthContext";
import { ProfileContext, ProfileContextProvider } from "../contexts/ProfileContext";
import AuthPage from "../pages/AuthPage";
import ProfilePage from "../pages/ProfilePage";
import { Grid } from "@mui/material";

const HomePage = () => {
    const { isAuthenticated } = useContext(AuthContext);
    if (isAuthenticated) {
        return (
            <Grid
                container
                spacing={2}
                direction="row"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '100vh' }}>
                <Grid
                    item
                    container
                    xs={12}
                    direction="row"
                    alignItems="center"
                    justifyContent="center">
                    {
                        <ProfileContextProvider>
                            <ProfilePage />
                        </ProfileContextProvider>
                    }
                </Grid>
            </Grid>
        )
    }
    else {
        return (
            <Grid
                container
                spacing={2}
                direction="row"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '100vh' }}>
                <Grid
                    item
                    container
                    xs={12}
                    direction="row"
                    alignItems="center"
                    justifyContent="center">
                    {<AuthPage />}
                </Grid>
            </Grid>
        )
    }
}

export default HomePage;