// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import CryptocurrenciesList from '../CryptocurrenciesList'
import './index.css'

const apiUrl = 'https://apis.ccbp.in/crypto-currency-converter'

class CryptocurrencyTracker extends Component {
  state = {
    cryptocurrenciesData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getCryptocurrency()
  }

  getCryptocurrency = async () => {
    const response = await fetch(apiUrl)
    const data = await response.json()

    this.setState({
      cryptocurrenciesData: data.map(each => ({
        id: each.id,
        currencyLogoUrl: each.currency_logo,
        currencyName: each.currency_name,
        usdValue: each.usd_value,
        euroValue: each.euro_value,
      })),
      isLoading: false,
    })
  }

  renderCryptocurrenciesList = () => {
    const {cryptocurrenciesData} = this.state

    return <CryptocurrenciesList cryptocurrenciesData={cryptocurrenciesData} />
  }

  // renderLoader = () => {}

  render() {
    const {isLoading} = this.state

    return (
      <div className="app-cont">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          this.renderCryptocurrenciesList()
        )}
      </div>
    )
  }
}
export default CryptocurrencyTracker
