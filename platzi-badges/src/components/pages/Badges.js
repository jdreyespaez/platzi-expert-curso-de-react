import React, {Component} from 'react';
import Navbar from '../Navbar'

import '../styles/Badges.css'
import ConfLogo from '../../images/badge-header.svg'

class Badges extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img 
                src={ConfLogo} 
                alt="Logo de la Platzi Conf" 
                className="Badges_conf-logo"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Badges;