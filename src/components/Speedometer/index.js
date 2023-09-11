import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {
    speed: 0,
  }

  onIncrease = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(preState => ({
        speed: preState.speed + 10,
      }))
    }
  }

  onDecrease = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(preState => ({
        speed: preState.speed - 10,
      }))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">SPEEDOMETER</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
            className="card-img"
          />
          <h1 className="card-heading">Speed is {speed}mph</h1>
          <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
          <div className="card-btn">
            <button
              className="increase-btn"
              type="button"
              onClick={this.onIncrease}
            >
              Accelerate
            </button>
            <button
              className="decrease-btn"
              type="button"
              onClick={this.onDecrease}
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
