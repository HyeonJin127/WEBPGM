import React from "react";

function Navigation({ content, title, onClick }) {
    return (
        <div id="nav">
           <a href="#" onClick={(e) => {
               e.preventDefault();
               onClick(content);
           }}>
                <strong>{title}</strong>
           </a>
        </div>
    );
}

export default Navigation;
