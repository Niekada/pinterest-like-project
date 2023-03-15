import { Avatar, Box, Button, Paper, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { loginFormInitialValues, loginValidationSchema } from "./const";

import LockIcon from "@mui/icons-material/Lock";
import { TextField } from "formik-mui";
import { User } from "../../types/user";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";

const Login = () => {
  const { handleLogIn } = useContext(UserContext);

  const onSubmit = (user: User) => {
    handleLogIn(user);
  };

  return (
    <Paper elevation={24}>
      <Box padding={2}>
        <Box display="flex" justifyContent="center" mb={1}>
          <Avatar>
            <LockIcon />
          </Avatar>
        </Box>
        <Typography variant="h6" textAlign="center" mb={2}>
          Sign In
        </Typography>
        <Formik
          initialValues={loginFormInitialValues}
          onSubmit={onSubmit}
          validationSchema={loginValidationSchema}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field
                component={TextField}
                name="email"
                label="Email Address"
                sx={{ mb: 2 }}
                fullWidth
                required
              />
              <Field
                component={TextField}
                name="password"
                type="password"
                label="Password"
                sx={{ mb: 2 }}
                fullWidth
                required
              />
              <Button
                type="submit"
                variant="contained"
                disabled={isSubmitting}
                sx={{ mb: 2 }}
                fullWidth
              >
                Sign In
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Paper>
  );
};

export default Login;