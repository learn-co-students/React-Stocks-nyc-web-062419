import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    let mappedStocks = this.props.stocksArray.map(stock => {
      return <Stock key={stock.id} stockObj={stock} handlePortfolio={this.props.handlePortfolio}/>
    })
    return (
      <div>
        <h2>Stocks</h2>
        {mappedStocks}
      </div>
    );
  }

}

export default StockContainer;
