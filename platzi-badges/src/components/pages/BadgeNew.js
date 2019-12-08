import React, {Component} from 'react';

import '../styles/BadgeNew.css'

import BadgeForm from '../BadgeForm'
import Badge from '../Badge'
import header from '../../images/badge-header.svg'
import Navbar from '../Navbar'

class BadgeNew extends Component {
    state={form: {}}

    handleChange = e => {
        this.setState({
            form: {
                [e.target.name]: e.target.value,
            },
        })
    }

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
                            <BadgeForm onChange={this.handleChange}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeNew;