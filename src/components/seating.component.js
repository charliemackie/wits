import React from "react";
import axios from "axios";
import { Button } from "@mui/material";

export default function Seating() {

    // state for current user
    const [state, setState] = React.useState({});

    // all other users
    const [allState, setAllState] = React.useState({});

    // get the user id that just filled form from url (passed in previous component)
    const id = window.location.pathname.split('/')[2]

    // get all users data
    axios.get('http://localhost:3000/user').then(
        response => {
            setAllState(response.data)
        }
    )

    // get the users data that just filled out form
    axios.get('http://localhost:3000/user/'+id).then(
        response => {
            setState(response.data)
        }
    )


    return (
        <div>
            <div className="p-10 outline">
            <strong>Current user details:</strong>
            <br></br>
            <strong>Snacks:</strong> {state['Snack']}
            <br></br>
            <strong>Allergy:</strong>  {state['Allergy']}
            <br></br>
            <strong>Noise:</strong> {state['Noise']}
            <br></br>
            <strong>Lighting:</strong>  {state['Light']}
            </div>
            
            <div className="grid grid-cols-4 gap-4 p-10">
                

                <Button variant="outlined">1</Button> 
                <Button variant="outlined">1</Button> 
                <Button variant="outlined">1</Button> 
                <Button variant="outlined">1</Button> 
                <Button variant="outlined">1</Button> 
                <Button variant="outlined">1</Button> 
                <Button variant="outlined">1</Button> 
                <Button variant="outlined">1</Button> 
                <Button variant="outlined">1</Button> 
                <Button variant="outlined">1</Button> 
                <Button variant="outlined">1</Button> 
                <Button variant="outlined">1</Button> 
                <Button variant="outlined">1</Button> 
                <Button variant="outlined">1</Button> 
                <Button variant="outlined">1</Button> 
                <Button variant="outlined">1</Button> 
                <Button variant="outlined">1</Button> 
                <Button variant="outlined">1</Button> 
                <Button variant="outlined">1</Button> 
                <Button variant="outlined">1</Button> 
                <Button variant="outlined">1</Button> 
                <Button variant="outlined">1</Button> 
                <Button variant="outlined">1</Button> 
                <Button variant="outlined">1</Button> 
                <Button variant="outlined">1</Button> 
                <Button variant="outlined">1</Button> 
                <Button variant="outlined">1</Button> 
                <Button variant="outlined">1</Button> 
                <Button variant="outlined">1</Button> 
                <Button variant="outlined">1</Button> 
                <Button variant="outlined">1</Button> 
                <Button variant="outlined">1</Button> 
                <Button variant="outlined">1</Button> 
                <Button variant="outlined">1</Button> 
                <Button variant="outlined">1</Button> 
                <Button variant="outlined">1</Button> 
                <Button variant="outlined">1</Button> 
                <Button variant="outlined">1</Button> 
                <Button variant="outlined">1</Button> 
                <Button variant="outlined">1</Button> 
                <Button variant="outlined">1</Button> 
                <Button variant="outlined">1</Button> 
                <Button variant="outlined">1</Button> 
                <Button variant="outlined">1</Button> 
                <Button variant="outlined">1</Button> 
                <Button variant="outlined">1</Button> 
                <Button variant="outlined">1</Button> 
                <Button variant="outlined">1</Button> 
                <Button variant="outlined">1</Button> 
                <Button variant="outlined">1</Button> 
                <Button variant="outlined">1</Button> 
                <Button variant="outlined">1</Button> 
                <Button variant="outlined">1</Button> 
                <Button variant="outlined">1</Button> 
                <Button variant="outlined">1</Button> 
            </div>
        </div>

        
    );
}