import React from 'react';

const Header = (props) => {
    return (
        <header>
            <h1>SoccerMatters</h1>
            <small>{props.tagline}</small>
        </header>
    )
}

export default Header;
