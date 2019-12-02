import React from 'react';
import ConfLogo from '../images/badge-header.svg';

class Badge extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <img src={ConfLogo} alt="Logo de la Platzi-Conf"/>
                </div>
                <div>
                    <img src="https://en.gravatar.com/userimage/35531970/01270987868c91ce3a31faa7b4441490.png" alt="Avatar de gravatar"/>
                    <h1>Juan <br/>Reyes</h1>
                </div>
                <div>
                    <p>Economista y front end developer</p>
                    <p>@jdreyespaez</p>
                </div>
            </div>
        )
    }
}

export default Badge;