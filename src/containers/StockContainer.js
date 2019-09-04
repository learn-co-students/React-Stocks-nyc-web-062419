import React, { Component } from "react"
import Stock from "../components/Stock"

class StockContainer extends Component {
  render() {
    const stockComponents = this.props.stocks.map(stock => (
      <Stock
        key={stock.name}
        stockInfo={stock}
        handleClick={this.props.handleClick}
      />
    ))
    return (
      <div>
        <h2>Stocks</h2>
        {stockComponents}
      </div>
    )
  }
}

export default StockContainer
