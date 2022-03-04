import React from "react";
import {Button, Grid} from "@mui/material"
import {Link} from "react-router-dom"

export default function Login() {

    return (
        <div>
            <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}
            >
                <Grid item xs={3}>
                    <div>
                        <Link to={'/questions'}>
                            <Button variant="contained">Login</Button>
                        </Link>
                    </div>
                </Grid>   
            </Grid> 
        </div>
    );
}