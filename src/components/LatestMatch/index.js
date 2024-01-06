import './index.css'

const LatestMatch = props => {
  const {otherDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = otherDetails
  return (
    <div className="latest-match-card">
      <div className="top-bg">
        <div className="ll1">
          <p className="tm1">{competingTeam}</p>
          <p className="tm2">{date}</p>
          <p className="tm3">{venue}</p>
          <p className="tm3">{result}</p>
        </div>
        <img
          className="compLogo"
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
        />
      </div>
      <hr className="line" />
      <div className="ll">
        <p className="tm3">First Innings</p>
        <p className="tm3">{firstInnings}</p>
        <p className="tm3">Second Innings</p>
        <p className="tm3">{secondInnings}</p>
        <p className="tm3">Man Of The Match</p>
        <p className="tm3">{manOfTheMatch}</p>
        <p className="tm3">Umpires</p>
        <p className="tm3">{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
