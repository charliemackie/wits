import React from "react";
import axios from "axios";

export default function Seating() {

    const [state, setState] = React.useState({});

    // get the user id that just filled form from url (passed in previous component)
    const id = window.location.pathname.split('/')[2]

    // get the users data that just filled out form
    axios.get('http://localhost:3000/user/'+id).then(
        response => {
            setState(response.data)
        }
    )

    return (
        <div>
            Current user details:
        </div>
    );
}