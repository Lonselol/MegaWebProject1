import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Button, Checkbox, } from "@mui/material";
import { Typography } from '@mui/material';
import React from "react";
import { useContext, useState, useRef } from "react";
import profileRepository from "../repositories/ProfileRepository";
import { AuthContext, AuthContextProvider } from "../contexts/AuthContext";
import { ProfileContext, ProfileContextProvider } from "../contexts/ProfileContext";
import ProfileInfo from "../objects/ProfileInfo";

const AuthPage = () => {
    const [isProfilePage, setIsProfilePage] = useState(true);
    const { isAuthenticated, logout } = useContext(AuthContext);
    const { getInfo } = useContext(ProfileContext);
    const [userData, setUserData] = useState( { name: "", about: "", wantsToBeMentor: false, wantsAMentor: false });
    getInfo().then(data => {
        setUserData({
            name: data.name, about: data.about,
            wantsToBeMentor: data.wantsToBeMentor, wantsAMentor: data.wantsAMentor
        });
    });
    const handleLogout = () => {
        logout();
    }

    return (
        <Box
            sx={{
                width: 550,
                height: 350,
                backgroundColor: "white",
                borderRadius: "15px"
            }}
        >
            <Grid
                sx={{
                    width: 550,
                    height: 350
                }}
                container
                spacing={2}
                direction="column"
                alignItems="center"
                justifyContent="center">
                <Grid item>
                    <Typography variant="h5">
                        Profile page
                    </Typography>
                </Grid>
                <Grid item width={300}>
                    <Typography variant="h5">
                        Name {userData.name}
                    </Typography>
                </Grid>
                <Grid item width={300}>
                    <Typography variant="h6">
                        About me <>{userData.about}</>
                    </Typography>
                </Grid>
                <Grid item width={300}>
                    <Typography variant="h6">
                        Want to be a mentor <Checkbox disabled checked={userData.wantsToBeMentor} />
                    </Typography>
                </Grid>
                <Grid item width={300}>
                    <Typography variant="h6">
                        Want to find a mentor <Checkbox disabled checked={userData.wantsAMentor} />
                    </Typography>
                </Grid>
                <Grid item>
                    <Button onClick={handleLogout} variant="contained">Log out</Button>
                </Grid>
            </Grid>
        </Box>
        
        
    )
}

export default AuthPage;