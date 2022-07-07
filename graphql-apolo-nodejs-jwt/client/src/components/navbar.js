import React, { Fragment, useContext } from "react";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";

function Navbar() {
    const { user, logout } = useContext(AuthContext);
    let navigate = useNavigate();
    const onLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h5" component="div">
                        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>ReactLogin</Link>
                    </Typography>
                    <Box alignItems="right" sx={{ flexGrow: 1, textAlign: 'right' }}>
                        {!user ? (
                            <Fragment>
                                <Link to="/login" style={{ textDecoration: 'none', color: 'white', marginRight: 10 }}>Login</Link>
                                <Link to="/register" style={{ textDecoration: 'none', color: 'white' }}>Register</Link>
                            </Fragment>

                        ) : (
                            <Button style={{ textDecoration: 'none', color: 'white' }} onClick={onLogout}>Logout</Button>
                        )
                        }
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
};

export default Navbar;