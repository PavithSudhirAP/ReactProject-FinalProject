import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Grid, Typography, TextField, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  loginBox: {
    margin: "50px",
    padding: "20px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  formInput: {
    marginBottom: "10px",
  },
  submitButton: {
    marginTop: "10px",
  },
});

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const validate = () => {
    let errors = {};

    if (!username) {
      errors.username = "Username is required";
    }

    if (!password) {
      errors.password = "Password is required";
    } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(password)) {
      errors.password =
        "Password must contain at least one number, one uppercase and lowercase letter, and at least 8 characters";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validate()) {
      navigate.push("/dashboard");
    }
  };

  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.container}>
      <div className={classes.loginBox}>
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} className={classes.formInput}>
              <TextField
                fullWidth
                label="Username"
                value={username}
                onChange={handleUsernameChange}
                error={!!errors.username}
                helperText={errors.username}
              />
            </Grid>

            <Grid item xs={12} className={classes.formInput}>
              <TextField
                fullWidth
                label="Password"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                error={!!errors.password}
                helperText={errors.password}
              />
            </Grid>

            <Grid item xs={12} className={classes.submitButton}>
              <Button fullWidth variant="contained" type="submit">
                <Link to="/dashboard">Login</Link>
              </Button>
            </Grid>
          </Grid>
        </form>
        <Typography variant="body1" align="center">
          Don't have an account? <Link to="/register">Create account</Link>
        </Typography>
      </div>
    </Container>
  );
};

export default LoginPage;
