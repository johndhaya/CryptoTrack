// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {cryptocurrencyDetails} = props
  const {
    currencyLogoUrl,
    currencyName,
    usdValue,
    euroValue,
  } = cryptocurrencyDetails

  return (
    <li className="crypt-item">
      <div className="titlelogo-cont">
        <img className="logo" alt={currencyName} src={currencyLogoUrl} />
        <p className="name">{currencyName}</p>
      </div>
      <div className="usd-euro-value-cont">
        <p className="value-text">{usdValue}</p>
        <p className="value-text">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
