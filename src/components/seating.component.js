import React from "react";
import {Button, Grid} from "@mui/material"
import {Link} from "react-router-dom"


export default function Seating() {

    return (
        <Grid
            className="p-3"
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}
            >
                <Grid item xs={3}>
                    <div>
                        <Link to={'/seating'}>
                            <Button variant="contained">Confirm</Button>
                        </Link>
                        <br></br>
                        <br></br>
                        <Link to={'/questions'}>
                            <Button variant="contained">Back</Button>
                        </Link>
                    </div>
                </Grid>   
            </Grid> 
    );
}