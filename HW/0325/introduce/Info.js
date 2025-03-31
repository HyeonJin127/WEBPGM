import React from "react";

function Info({numb, name}) {
    return (
        <div id="title">
            <h3>{numb} {name}</h3>
        </div>
    );
}

export default Info;