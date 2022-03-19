import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate, useLocation } from "react-router-dom";

export default function ButtonAppBar() {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="default">
                <Toolbar>
                    <Button
                        //Bottone home
                        onClick={() => {
                            navigate("/");
                        }}
                        color="primary"
                        variant={
                            location.pathname === "/" ? "outlined" : "text"
                        }
                    >
                        Home
                    </Button>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        Cocktail-Wiki
                    </Typography>
                    <Button
                        //Bottone che cerca un cocktail casuale
                        onClick={() => {
                            if (location.pathname === "/cocktail/random") {
                                window.location.reload();
                            } else {
                                navigate("/cocktail/random");
                            }
                        }}
                        color="primary"
                        variant={
                            location.pathname === "/" ? "outlined" : "text"
                        }
                    >
                        Random
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
