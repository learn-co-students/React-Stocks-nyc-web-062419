import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  
  state = {
    stocksArray: [],
    allStocks: [],
    myStocks: [],
    sort: ""
  }

  componentDidMount(){
    fetch("http://localhost:3000/stocks")
    .then(resp => resp.json())
    .then(data => this.setState({stocksArray: data, allStocks: data}))
  }

  handleSort = (e) => {
    this.setState({sort: e.target.value})
    if (e.target.value === "Alphabetically"){
      this.setState({stocksArray: this.state.stocksArray.sort((a,b) => (a.ticker > b.ticker) ? 1 : -1)})
    } else if (e.target.value === "Price"){
      this.setState({stocksArray: this.state.stocksArray.sort((a,b) => a.price-b.price)})
    }  
  }

  handleFilter = (e) => {
    let filteredStocks = this.state.allStocks.filter(stock => stock.type === e.target.value)
    this.setState({stocksArray: filteredStocks})
  }

  handleClick = (stock) => {
    if (this.state.myStocks.includes(stock)){
      return
    } else {
      this.setState({myStocks: [...this.state.myStocks, stock]})
    }
  }

  handlePortfolioClick = (stock) => {
    this.setState({myStocks: this.state.myStocks.filter(item => item !== stock )})
  }

  render() {
    
    return (
      <div>
        <SearchBar handleSort={this.handleSort} sort={this.state.sort} handleFilter={this.handleFilter} />

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.stocksArray} handleClick={this.handleClick}/>

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={this.state.myStocks} handleClick={this.handlePortfolioClick} />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
