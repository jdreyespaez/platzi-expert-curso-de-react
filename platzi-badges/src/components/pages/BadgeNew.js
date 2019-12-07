import React, {Component} from 'react';

import '../styles/BadgeNew.css'

import BadgeForm from '../BadgeForm'
import Badge from '../Badge'
import header from '../../images/badge-header.svg'
import Navbar from '../Navbar'

class BadgeNew extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                firstName="Juan"
                                lastName="Reyes"
                                jobTitle="Software Engineer"
                                twitter="@jdreyespaez"
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeNew;