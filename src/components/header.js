import React from "react";

const Header = () => {

    const headStyle = {
        background: "#333",
        color: '#fff',  
        textAlign :"center",
        padding: "10px",
    }

    return (
        <header>
            <h1 style={headStyle}>TODO APP</h1>
        </header>
    );
}

export default Header;