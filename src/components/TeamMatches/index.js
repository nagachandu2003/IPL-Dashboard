import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

const teams = ['RCB', 'KKR', 'KXP', 'CSK', 'RR', 'MI', 'SH', 'DC']
const teamBgs = ['tbg1', 'tbg2', 'tbg3', 'tbg4', 'tbg5', 'tbg6', 'tbg7', 'tbg8']

class TeamMatches extends Component {
  state = {
    currMatches: [],
    teamLogo: '',
    latestDetails: [],
    clname: '',
    isLoad: true,
  }

  componentDidMount = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const formattedData = {
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
      teamBannerUrl: data.team_banner_url,
    }
    const {latestMatchDetails, recentMatches, teamBannerUrl} = formattedData
    const formattedMatchDetails = {
      id: latestMatchDetails.id,
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      date: latestMatchDetails.date,
      firstInnings: latestMatchDetails.first_innings,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      matchStatus: latestMatchDetails.match_status,
      result: latestMatchDetails.result,
      secondInnings: latestMatchDetails.second_innings,
      umpires: latestMatchDetails.umpires,
      venue: latestMatchDetails.venue,
    }
    const formattedRecentMatches = recentMatches.map(ele => ({
      id: ele.id,
      competingTeam: ele.competing_team,
      competingTeamLogo: ele.competing_team_logo,
      date: ele.date,
      firstInnings: ele.first_innings,
      manOfTheMatch: ele.man_of_the_match,
      matchStatus: ele.match_status,
      result: ele.result,
      secondInnings: ele.second_innings,
      umpires: ele.umpires,
      venue: ele.venue,
    }))
    this.setState({
      currMatches: formattedRecentMatches,
      teamLogo: teamBannerUrl,
      latestDetails: formattedMatchDetails,
      clname: teamBgs[teams.indexOf(id)],
      isLoad: false,
    })
  }

  render() {
    const {currMatches, teamLogo, latestDetails, clname, isLoad} = this.state
    return (
      <div>
        {isLoad === true ? (
          <div className="notfound-bg">
            <div data-testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          </div>
        ) : (
          <div className={`tm-bg ${clname}`}>
            <img className="tm-logo" src={teamLogo} alt="team banner" />
            <LatestMatch key={latestDetails.id} otherDetails={latestDetails} />
            <ul className="list-container5">
              {currMatches.map(ele => (
                <MatchCard key={ele.id} matchDetails={ele} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default TeamMatches
