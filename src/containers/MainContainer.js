import React, { Component } from "react"
import StockContainer from "./StockContainer"
import PortfolioContainer from "./PortfolioContainer"
import SearchBar from "../components/SearchBar"

class MainContainer extends Component {
  state = { port: [] }

  handleStockClick = (e, stock) => {
    if (!this.state.port.includes(stock)) {
      const newPort = [...this.state.port, stock]
      this.setState({ port: newPort })
    }
  }

  handlePortClick = (e, stock) => {
    const newPort = this.state.port.filter(
      portStock => portStock.ticker !== stock.ticker
    )
    this.setState({ port: newPort })
  }

  render() {
    return (
      <div>
        <SearchBar />

        <div className="row">
          <div className="col-8">
            <StockContainer
              stocks={this.props.stocks}
              handleClick={this.handleStockClick}
            />
          </div>
          <div className="col-4">
            <PortfolioContainer
              stocks={this.state.port}
              handleClick={this.handlePortClick}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default MainContainer
