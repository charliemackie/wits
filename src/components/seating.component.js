import React from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { useEffect } from "react";

export default function Seating() {

    // state for current user
    const [state, setState] = React.useState({});

    // all other users
    var [allState, setAllState] = React.useState({});

    // other user currently looking at
    var [currentState, setCurrentState] = React.useState({});

    // get the user id that just filled form from url (passed in previous component)
    const id = window.location.pathname.split('/')[2]

    useEffect(() => {
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
    }, [])

    // different seat buttons
    function handle1() {
        setCurrentState(allState['3'])
    }

    function handle2() {
        setCurrentState(allState['4'])
    }

    function handle3() {
        setCurrentState(allState['5'])
    }

    function handle4() {
        setCurrentState(allState['6'])
    }

    function handle5() {
        setCurrentState(allState['7'])
    }

    function handle6() {
        setCurrentState(allState['8'])
    }

    function handle7() {
        setCurrentState(allState['9'])
    }
    
    function handleVacant() {
        setCurrentState({
            ID: '',
            Snack: '',
            Allergy: 'Seat is Vacant',
            Noise: '',
            Light: '',
        })
    }

    return (
        <div>
            <div className="p-10 outline">
            <strong>Current user details:</strong>
            <br></br>
            <strong>Snacks: </strong>{state['Snack']}
            <br></br>
            <strong>Allergy: </strong>{state['Allergy']}
            <br></br>
            <strong>Noise: </strong>{state['Noise']}
            <br></br>
            <strong>Lighting: </strong>{state['Light']}
            </div>
            
            <div className="grid grid-cols-4 gap-4 p-10">
                
                <Button variant="outlined" onClick={handle1}>X</Button> 
                <Button variant="outlined" onClick={handle2}>X</Button> 
                <Button variant="outlined" onClick={handle3}>X</Button> 
                <Button variant="outlined" onClick={handle4}>X</Button> 
                <Button variant="outlined" onClick={handle5}>X</Button> 
                <Button variant="outlined" onClick={handle6}>X</Button> 
                <Button variant="outlined" onClick={handle7}>X</Button> 
                <Button variant="outlined" onClick={handleVacant}>Y</Button> 
                <Button variant="outlined" onClick={handleVacant}>Y</Button> 
                <Button variant="outlined" onClick={handle3}>X</Button> 
                <Button variant="outlined" onClick={handle3}>X</Button> 
                <Button variant="outlined" onClick={handleVacant}>Y</Button> 
                <Button variant="outlined" onClick={handle2}>X</Button> 
                <Button variant="outlined" onClick={handle3}>X</Button> 
                <Button variant="outlined" onClick={handle5}>X</Button> 
                <Button variant="outlined" onClick={handleVacant}>Y</Button> 
                <Button variant="outlined" onClick={handle3}>X</Button> 
                <Button variant="outlined" onClick={handle2}>X</Button> 
                <Button variant="outlined" onClick={handle5}>X</Button> 
                <Button variant="outlined" onClick={handleVacant}>Y</Button> 
                <Button variant="outlined" onClick={handleVacant}>Y</Button> 
                <Button variant="outlined" onClick={handleVacant}>Y</Button> 
                <Button variant="outlined" onClick={handle2}>X</Button> 
                <Button variant="outlined" onClick={handle5}>X</Button> 
                <Button variant="outlined" onClick={handleVacant}>Y</Button> 
                <Button variant="outlined" onClick={handle6}>X</Button> 
                <Button variant="outlined" onClick={handleVacant}>Y</Button> 
                <Button variant="outlined" onClick={handle2}>X</Button> 
                <Button variant="outlined" onClick={handleVacant}>Y</Button> 
                <Button variant="outlined" onClick={handle3}>X</Button> 
                <Button variant="outlined" onClick={handle6}>X</Button> 
                <Button variant="outlined" onClick={handleVacant}>Y</Button> 
                <Button variant="outlined" onClick={handle5}>X</Button> 
                <Button variant="outlined" onClick={handleVacant}>Y</Button> 
                <Button variant="outlined" onClick={handleVacant}>Y</Button> 
                <Button variant="outlined" onClick={handle3}>X</Button> 
                <Button variant="outlined" onClick={handleVacant}>Y</Button> 
                <Button variant="outlined" onClick={handleVacant}>Y</Button> 

            </div>
            <div className="outline p-10">
                <strong>Selected Seat details:</strong>
                <br></br>
                <strong>Allergy: </strong> {currentState['Allergy']}
                <br></br>
                <strong>Snack: </strong>{currentState['Snack']}
                <br></br>
                <strong>Noise: </strong>{currentState['Noise']}
                <br></br>
                <strong>Light: </strong>{currentState['Light']}
            </div>
            <div className="p-10" >
                <strong>Legend</strong>
                <br></br>
                <br></br>
                <strong>X = Occupied</strong>
                <br></br>
                <strong>Y = Vacant</strong>
            </div>
        </div>

        
    );
}