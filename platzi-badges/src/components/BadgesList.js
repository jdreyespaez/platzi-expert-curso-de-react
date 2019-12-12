import React, {Component} from 'react';

class BadgesList extends Component {
  render() {
    return (
      <ul className="list-unstyled">
        {this.props.badges.map((badge) => {
          return(
            <li key={badge.id}>
              <div className="Badge__container">
                <img src={badge.avatarUrl} />
                <p>{badge.firstName} {badge.lastName}</p>
                <p>{badge.email}</p>
                <div>
                  {badge.twitter} {badge.jobTitle}
                </div>
              </div>
           </li>
          )
        })}
      </ul>
    )
  }
}

export default BadgesList