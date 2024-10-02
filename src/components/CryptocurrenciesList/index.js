// Write your JS code here
import {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  renderCryptocurrenciesHeader = () => {
    ;<div className="list-head">
      <p className="type-text">Coin Type</p>
      <div className="other-cont">
        <p className="value-text">USD</p>
        <p className="value-text">EURO</p>
      </div>
    </div>
  }

  renderCryptocurrenciesView = () => {
    const {cryptocurrenciesData} = this.props

    return (
      <div className="list-cont">
        {this.renderCryptocurrenciesHeader()}
        <ul className="crypto-list">
          {cryptocurrenciesData.map(each => (
            <CryptocurrencyItem key={each.id} cryptocurrencyDetails={each} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="crypt-cont">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          className="crypto-img"
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
        {this.renderCryptocurrenciesView()}
      </div>
    )
  }
}
export default CryptocurrenciesList
