import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = matchDetails
  const fcolor = matchStatus === 'Won' ? 'c1' : 'c2'
  return (
    <li className="match-list-item">
      <img
        className="match-item-logo"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p className="tm1">{competingTeam}</p>
      <p className="tm3">{result}</p>
      <p className={`tm2 ${fcolor}`}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
