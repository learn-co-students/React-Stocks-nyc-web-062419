import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'
const sortBy = require('sort-by')

class MainContainer extends Component {
  state = {
    stocksArray: [],
    staticStocksArray: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/stocks')
    .then(resp=>resp.json())
    .then(data => {
      const stockWithSelected = data.map(stock => ({...stock, portfolio: false}))
      this.setState({ stocksArray: stockWithSelected, staticStocksArray: stockWithSelected })})
  }

  handlePortfolio = (stockObj) => {
    let changedObj = {...stockObj, portfolio: !stockObj.portfolio}
    let filtered = this.state.stocksArray.filter(x => x.id !== stockObj.id)
    this.setState({ stocksArray: [...filtered, changedObj]})
  }

  handleSort = (event) => {
    let sortedStocks;
    if(event.target.value === "Alphabetically"){
      sortedStocks = this.state.stocksArray.sort(sortBy("ticker"))
    } else {
      sortedStocks = this.state.stocksArray.sort(sortBy("price"))
    }
    this.setState({stocksArray: sortedStocks})
  }

  handleFilter = (e) => {
    if (e.target.value === "none"){
      this.setState({stocksArray: this.state.staticStocksArray})
    } else {
      let filteredStocks = this.state.staticStocksArray.filter(stock => stock.type === e.target.value)
      this.setState({stocksArray: filteredStocks})
    }
  }

  render() {
    const portfolioArray = this.state.stocksArray.filter(stock => stock.portfolio)
    return (
      <div>
        <SearchBar handleSort={this.handleSort} handleFilter={this.handleFilter}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocksArray={this.state.stocksArray} handlePortfolio={this.handlePortfolio}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolioArray={portfolioArray} handlePortfolio={this.handlePortfolio}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
