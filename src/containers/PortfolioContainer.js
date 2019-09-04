import React, { Component } from "react";
import Stock from "../components/Stock";

class PortfolioContainer extends Component {
  render() {
    let portfolio = this.props.portfolio.map(stock => (
      <Stock stock={stock} click={this.props.click} />
    ));
    return (
      <div>
        <h2>My Portfolio</h2>
        {
          //render your portfolio stocks here
          portfolio
        }
      </div>
    );
  }
}

export default PortfolioContainer;
