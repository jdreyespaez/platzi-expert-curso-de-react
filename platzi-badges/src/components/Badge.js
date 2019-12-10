import React from 'react';
import ConfLogo from '../images/badge-header.svg';
import './styles/Badge.css'


class Badge extends React.Component {
    render() {
        return (
            <div className="Badge">
                <div className="Badge__header">
                    <img src={ConfLogo} alt="Logo de la Platzi-Conf"/>
                </div>
                <div className="Badge__section-name">
                    <img 
                        className="Badge__avatar" 
                        src="https://en.gravatar.com/userimage/35531970/01270987868c91ce3a31faa7b4441490.png" 
                        alt="Avatar de gravatar"
                    />
                    <h1>{this.props.firstName} <br/>{this.props.lastName}</h1>
                </div>
                <div className="Badge__section-info">
                    <h3>{this.props.jobTitle}</h3>
                    <div>@{this.props.twitter}</div>
                    <div>{this.props.email}</div>
                </div>
                <div className="Badge__footer">#platziConf</div>
            </div>
        )
    }
}

export default Badge;