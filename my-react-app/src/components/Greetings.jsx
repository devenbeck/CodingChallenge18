import React from "react";
function Greetings({name}) {
    return (
        <div>
            <h3>Hello from the Greeting Component! {name}!</h3>
            <p>This is your first custom component in React!</p>
        </div>
    );
}
export default Greetings;