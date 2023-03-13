import { PropsWithChildren } from "react";
import { Grid, Typography } from "@mui/material";

const AuthLayout = ({ children }: PropsWithChildren) => {
    return (
        <Grid container justifyContent="center" alignItems="center" height="100vh">
            <Grid item xs={12} md={7}>
                <Typography variant="h2">
                    Sign Up to get your
                </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
                {children}
            </Grid>
            <Grid item xs={1} />
        </Grid>
    );
};

export default AuthLayout