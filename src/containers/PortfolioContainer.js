import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    let mappedStocks = this.props.portfolioArray.map(stock => {
      return <Stock key={stock.id} stockObj={stock} handlePortfolio={this.props.handlePortfolio}/>
    })
    return (
      <div>
        <h2>My Portfolio</h2>
          {mappedStocks}
      </div>
    );
  }

}

export default PortfolioContainer;
