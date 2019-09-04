import React, { Component } from "react"
import Stock from "../components/Stock"

class PortfolioContainer extends Component {
  render() {
    const portComponents = this.props.stocks.map(stock => (
      <Stock
        key={stock.name}
        stockInfo={stock}
        handleClick={this.props.handleClick}
      />
    ))
    return (
      <div>
        <h2>My Portfolio</h2>
        {portComponents}
      </div>
    )
  }
}

export default PortfolioContainer
