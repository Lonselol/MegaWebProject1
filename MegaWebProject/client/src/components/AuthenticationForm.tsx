import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { Typography } from '@mui/material';
import AuthInput from "../objects/AuthInput";
import React from "react";
import authRepository from "../repositories/AuthRepository";
import profileRepository from "../repositories/ProfileRepository";
import { useContext } from "react";
import { AuthContext, AuthContextProvider } from "../contexts/AuthContext";


const AuthenticationForm = () => {
    const { isAuthenticated, login } = useContext(AuthContext);
    const loginRef: React.RefObject<HTMLInputElement> = React.createRef();
    const passwordRef: React.RefObject<HTMLInputElement> = React.createRef();

    const handleLogin = () => {
        const authInput: AuthInput = {
            login: loginRef.current?.value ?? "",
            password: passwordRef.current?.value ?? ""
        }
        login(authInput.login, authInput.password);
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
                        Authentication
                    </Typography>
                </Grid>
                <Grid item width={300}>
                    <TextField id="standard-basic" label="Login" variant="standard" fullWidth inputRef={loginRef} />
                </Grid>
                <Grid item width={300}>
                    <TextField id="standard-basic" label="Password" variant="standard" fullWidth type="password" inputRef={passwordRef} />
                </Grid>
                <Grid item>
                    <Button onClick={handleLogin} variant="contained">Log in</Button>
                </Grid>
            </Grid>
        </Box>
    )
}

export default AuthenticationForm;