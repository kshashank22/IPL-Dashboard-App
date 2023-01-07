// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {matchDetails: [], isLoading: true}

  componentDidMount() {
    this.getTeamCardDetails()
  }

  getTeamCardDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const updatedTeamDetails = teams.map(eachItems => ({
      name: eachItems.name,
      id: eachItems.id,
      teamImageUrl: eachItems.team_image_url,
    }))
    console.log(updatedTeamDetails)
    this.setState({matchDetails: updatedTeamDetails, isLoading: false})
  }

  renderLoader = () => (
    <div testid="loader" className="loader-container">
      <Loader type="Rings" color="#00BFFF" height={80} width={80} />
    </div>
  )

  render() {
    const {matchDetails, isLoading} = this.state

    return (
      <div className="app-container">
        <div className="heading-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            className="logo"
            alt="ipl logo"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>
        <div>
          {isLoading ? (
            this.renderLoader()
          ) : (
            <ul className="match-card-container">
              {matchDetails.map(item => (
                <TeamCard teamDetails={item} key={item.id} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default Home
