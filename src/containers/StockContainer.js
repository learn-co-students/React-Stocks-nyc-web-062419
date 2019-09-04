import React, { Component } from "react";
import Stock from "../components/Stock";

class StockContainer extends Component {
  render() {
    let stock = this.props.stocks.map(stock => (
      <Stock stock={stock} click={this.props.click} />
    ));
    return (
      <div>
        <h2>Stocks</h2>
        {
          //render the list of stocks here
          stock
        }
      </div>
    );
  }
}

export default StockContainer;
