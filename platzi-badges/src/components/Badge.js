import React from 'react';
import ConfLogo from '../images/badge-header.svg';

class Badge extends React.Component {
    render() {
        return (
            <div>
                <img src={ConfLogo} />
                <h1>Badge</h1>
            </div>
        )
    }
}

export default Badge;