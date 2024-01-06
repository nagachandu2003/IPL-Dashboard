import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails
  return (
    <Link to={`/team-matches/${id}`} className="item-link">
      <li className="team-list-item">
        <img className="team-logo" src={teamImageUrl} alt={name} />
        <p className="tm-heading">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
