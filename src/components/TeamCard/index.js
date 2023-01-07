// Write your code here

import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails
  return (
    <Link to={`/team-matches/${id}`} className="link-item">
      <li className="team-container">
        <div className="team-card">
          <img src={teamImageUrl} className="logo" alt={name} />
          <p className="name">{name}</p>
        </div>
      </li>
    </Link>
  )
}

export default TeamCard
