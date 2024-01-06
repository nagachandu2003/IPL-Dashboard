import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {teamsData: [], isLoading: true}

  componentDidMount = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const {teams} = await response.json()
    const data = teams
    const formattedData = data.map(ele => ({
      id: ele.id,
      name: ele.name,
      teamImageUrl: ele.team_image_url,
    }))
    this.setState({teamsData: formattedData, isLoading: false})
  }

  render() {
    const {teamsData, isLoading} = this.state
    return (
      <div className="home-bg">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="bg2">
            <div className="logo-container">
              <img
                className="main-logo"
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
              />
              <h1>IPL Dashboard</h1>
            </div>
            <ul className="list-container">
              {teamsData.map(ele => (
                <TeamCard key={ele.id} teamDetails={ele} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default Home
