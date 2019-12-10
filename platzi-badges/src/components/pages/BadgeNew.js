import React, {Component} from 'react';

import '../styles/BadgeNew.css'

import BadgeForm from '../BadgeForm'
import Badge from '../Badge'
import header from '../../images/badge-header.svg'
import Navbar from '../Navbar'

class BadgeNew extends Component {
    state={form: {
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: '',
        twitter: '',
    }}

    // 16 - Subimos este método de BadgeForm a BadgeNew.js, el cual
    // se compartirá como props a su componente inicial.
    handleChange = e => {
        this.setState({
            form: {
                // 16- Solución 2 que propone Richard Kaufman es con
                // el spread operator 
                ...this.state.form,
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
                            {/* 16- Aquí se está compartiendo mediante props a BadgeForm.js*/}
                            <BadgeForm 
                                onChange={this.handleChange}
                                formValues={this.state.form}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeNew;