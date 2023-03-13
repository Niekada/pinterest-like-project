import { Paper, Box, Avatar, Typography, TextField } from "@mui/material";
import LockIcon from '@mui/icons-material/Lock';

const Login = () => {
  return (
    <div>
        <Paper elevation={24}>
            <Box padding={2}>
                <Box display="flex" justifyContent="center" margin-bottom={1}>
                    <Avatar>
                        <LockIcon />
                    </Avatar>
                </Box>
                <Typography variant="h6" textAlign="center" margin-bottom={1}>
                    Sign In
                </Typography>
                <TextField 
                    label="Email Address" 
                    sx={{ mb:2 }} 
                    fullWidth 
                    required 
                />
            </Box>
        </Paper>
    </div>
  )
}

export default Login