import React from 'react';

import header from '../../images/badge-header.svg'
import Navbar from '../Navbar'

class BadgeNew extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="BadgeNew_hero">
                    <img className="img-fluid" src={header} alt="Logo" />
                </div>
            </div>
        )
    }
}

export default BadgeNew;