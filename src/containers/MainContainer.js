import React, { Component } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "../components/SearchBar";
import { runInThisContext } from "vm";

class MainContainer extends Component {
  state = {
    stocks: [],
    portfolio: [],
    filter: ""
  };

  componentDidMount() {
    fetch("http://localhost:3000/stocks")
      .then(resp => resp.json())
      .then(data => this.setState({ stocks: data }));
  }

  clickhandler = stock => {
    if (!this.state.portfolio.includes(stock)) {
      this.setState({ portfolio: [...this.state.portfolio, stock] });
    }
  };

  pClickhandler = stock => {
    if (this.state.portfolio.includes(stock)) {
      this.setState({
        portfolio: this.state.portfolio.filter(pStock => pStock !== stock)
      });
    }
  };

  onSelect = e => {
    this.setState({
      filter: this.state.stocks.filter(stocks => stocks.type === e)
    });
  };

  onChange = e => {
    if (e === "Alphabetically") {
      this.setState({
        stocks: this.state.stocks.sort(function(a, b) {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        })
      });
    } else if (e === "Price") {
      this.setState({
        stocks: this.state.stocks.sort(function(a, b) {
          if (a.price < b.price) {
            return -1;
          }
          if (a.price > b.price) {
            return 1;
          }
          return 0;
        })
      });
    }
  };

  render() {
    let filteredList = this.state.stocks.filter(
      stock => stock.type === this.state.filter
    );
    return (
      <div>
        <SearchBar change={this.onChange} select={this.onSelect} />

        <div className="row">
          <div className="col-8">
            <StockContainer
              stocks={this.state.stocks}
              click={this.clickhandler}
            />
          </div>
          <div className="col-4">
            <PortfolioContainer
              portfolio={this.state.portfolio}
              click={this.pClickhandler}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
