import React from "react";

function Foot(){
    const year = new Date().getFullYear();
    return <div className = "footer">
        <p> copyright message {year}</p>
    </div>
}

export default Foot;