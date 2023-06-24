// Write your React code here.

import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {display: false}

  onImage = () => {
    this.setState({display: true})
  }

  render() {
    const {display} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    return (
      <div className="bg-container">
        {!display && (
          <div className="container">
            <h1 className="heading">
              How satisfied are you with our <br />
              customer support performance?
            </h1>
            <ul className="img-container">
              {emojis.map(each => (
                <li className="img-list" key={each.id}>
                  <img
                    src={each.imageUrl}
                    alt={each.name}
                    className="image"
                    onClick={this.onImage}
                  />
                  <p className="pera">{each.name}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
        {display && (
          <div className="container">
            <img src={loveEmojiUrl} alt="love emoji" className="love-image" />
            <h1 className="heading1">Thank You!</h1>

            <pc className="pera1">
              We will use your feedback to improve our customer support <br />
              performance.
            </pc>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
